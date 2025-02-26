import { execSync } from "child_process";
import { writeFileSync } from "fs";
import * as fs from "fs-extra";
import * as path from "path";
import { createLogger, format, transports } from "winston";
import * as ts from "typescript";
import * as crypt from "crypto";
const { combine, timestamp, printf } = format;
const luamin = require('luamin');

interface IProjectConfig {
  compilerOptions: {
    baseUrl: string;
    outDir: string;
    mapName: string;
    scripts: {
      constantFolding: boolean;
      minify: boolean;
      optimize: boolean;
      encrypt: {
        enable: boolean;
        key: string;
        salt: string;
      };
    };
    protection: {
      removeEditorOnly: boolean;
      scrambleHeader: boolean;
      obfuscateScripts: boolean;
      obfuscateFileName: boolean;
      obfuscateObjectId: boolean;
      fakeScripts: boolean;
      scrambleFile: boolean;
      scrambleRepeat: number;
    };
  };
  game: {
    executable: string;
    args: string[];
  };
}

interface TSConfig {
  compilerOptions: CompilerOptions;
  include: string[];
  exclude: any[];
  tstl: Tstl;
}

interface Tstl {
  luaTarget: string;
  noHeader: boolean;
  luaLibImport: string;
  noImplicitSelf: boolean;
  luaBundle: string;
  luaBundleEntry: string;
  sourceMapTraceback: boolean;
  measurePerformance: boolean;
  tstlVerbose: boolean;
}

export interface CompilerOptions extends ts.CompilerOptions {
  plugins: Plugin[];
}

interface Plugin extends ts.PluginImport {
  transform: string;
  enable: boolean,
  cfPrecision: number;
  mapDir: string;
  entryFile: string;
  outputDir: string;
}

const cache = new Map<string, any>();

export function loadProjectConfig(): IProjectConfig {
  if (cache.has("projectConfig")) return cache.get("projectConfig");
  try {
    cache.set("projectConfig", JSON.parse(fs.readFileSync("config.json").toString()))

    return cache.get("projectConfig");
  } catch (e) {
    logger.error(e.toString());
    return {
      "compilerOptions":{
        "baseUrl": "",
        "outDir": "",
        "mapName": "",

        "scripts":{
          "constantFolding": false,
          "minify": false,
          "optimize": false,
          "encrypt": {
            "enable": false,

            "key": "",
            "salt": ""
          }
        },

        "protection":{
          "removeEditorOnly": false,
          "scrambleHeader": false,
          "obfuscateScripts": false,
          "obfuscateFileName": false,
          "obfuscateObjectId": false,
          "fakeScripts": false,
          "scrambleFile": false,
          "scrambleRepeat": 1
        }
      },

      "game":{
        "executable": "",
        "args": [""]
      }
    };
  }
}

export function loadTSConfig(): TSConfig {
  if (cache.has("tsConfig")) return cache.get("tsConfig");
  try {
    cache.set("tsConfig", JSON.parse(fs.readFileSync("tsconfig.json").toString()));

    return cache.get("tsConfig");
  } catch (e){
    logger.error(e.toString());
    //@ts-expect-error
    return {};
  }
}

/**
 * Convert a Buffer to ArrayBuffer
 * @param buf
 */
export function toArrayBuffer(b: Buffer): ArrayBuffer {
  var ab = new ArrayBuffer(b.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < b.length; ++i) {
    view[i] = b[i];
  }
  return ab;
}

/**
 * Convert a ArrayBuffer to Buffer
 * @param ab
 */
export function toBuffer(ab: ArrayBuffer) {
  var buf = Buffer.alloc(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

/**
 * Recursively retrieve a list of files in a directory.
 * @param dir The path of the directory
 */
export function getFilesInDirectory(dir: string) {
  const files: string[] = [];
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      const d = getFilesInDirectory(fullPath);
      for (const n of d) {
        files.push(n);
      }
    } else {
      files.push(fullPath);
    }
  });
  return files;
};

/**
 * Replaces all instances of the include directive with the contents of the specified file.
 * @param contents war3map.lua
 */
export function processScriptIncludes(contents: string) {
  const regex = /include\(([^)]+)\)/gm;
  let matches;
  while ((matches = regex.exec(contents)) !== null) {
    const filename = matches[1].replace(/"/g, "").replace(/'/g, "");
    const fileContents = fs.readFileSync(filename);
    contents = contents.substring(0, regex.lastIndex - matches[0].length) + "\n" + fileContents + "\n" + contents.substring(regex.lastIndex);
  }
  return contents;
}

function updateTSConfig(mapFolder: string) {
  const tsconfig = loadTSConfig();
  const plugin = tsconfig.compilerOptions.plugins;

  plugin[1].enable = loadProjectConfig().compilerOptions.scripts.constantFolding;
  plugin[1].cfPrecision = 0;
  plugin[0].mapDir = path.resolve('maps', mapFolder).replace(/\\/g, '/');
  plugin[0].entryFile = path.resolve(tsconfig.tstl.luaBundleEntry).replace(/\\/g, '/');
  plugin[0].outputDir = path.resolve('dist', mapFolder).replace(/\\/g, '/');

  writeFileSync('tsconfig.json', JSON.stringify(tsconfig, undefined, 2));
}

function updateProjectConfig(){
  const project = loadProjectConfig();

  project.compilerOptions.mapName = getMapName();

  writeFileSync('config.json', JSON.stringify(project, undefined, 4));
}

export function getMapName(){
  if (cache.has("mapName")) return cache.get("mapName");

  let split = loadProjectConfig().compilerOptions.baseUrl.split("/");
  cache.set("mapName", split.at(-1));

  return cache.get("mapName");
}

function cutMapFile(filePath: string){
  const split = filePath.split("\\");

  return split.slice(split.indexOf(getMapName())+1).join("/");
}

interface MapFileCache {
  // filePath: "hash"
  [filePath: string]: string;
}

function copyAndCache(source: string, target: string, cache: string, ignoreCache: boolean = false){
  let tryNum = 0;
  const cacheFile = fs.readFileSync(cache, {encoding: "utf8", flag: "a+"});
  const cached: MapFileCache = JSON.parse(cacheFile === "" ? "{}" : cacheFile);
  while (true){
    try {
      fs.copySync(source, target, {
        filter: function(source, _){
          if (fs.statSync(source).isDirectory()) return true;

          const mapFile = cutMapFile(source);
          const mapHash = crypt.createHash('sha512').update(fs.readFileSync(source)).digest().toString("hex");

          if (cached[mapFile] == undefined || cached[mapFile] != mapHash){
            cached[mapFile] = mapHash;
            return true;
          }

          return false
        }
      })

      fs.writeFileSync(cache, JSON.stringify(cached, undefined, 2));
      return;
    } catch(ex){
      logger.error("Error while copying: ", ex);
      tryNum++;
    }
    if (tryNum >= 3) break;
    logger.warn("Trying again...");
  }
  throw new Error("Copying failed!")
}

export function mapBuildCache(mapUrl: string, mapDest: string){
  const cachePath = mapDest + "cache.json";
  copyAndCache(mapUrl, mapDest + getMapName(), cachePath);
}

/**
 *
 */
export function compileMap(config: IProjectConfig) {
  if (!config.compilerOptions.baseUrl || config.compilerOptions.baseUrl === "") {
    logger.error(`[config.json]: baseUrl is empty!`);
    return false;
  }

  const tsLua = `${config.compilerOptions.outDir}/dist/tstl_output.lua`;

  if (fs.existsSync(tsLua)) {
    fs.unlinkSync(tsLua);
  }

  logger.info(`Building "${config.compilerOptions.baseUrl}"...`);
  mapBuildCache(config.compilerOptions.baseUrl, `${config.compilerOptions.outDir}/dist/`)

  logger.info("Updating configuration...");
  updateTSConfig(config.compilerOptions.baseUrl);
  updateProjectConfig()

  logger.info("Transpiling code...");
  execSync('tstl -p tsconfig.json', { stdio: 'inherit' });

  if (!fs.existsSync(tsLua)) {
    logger.error(`Could not find "${tsLua}"`);
    return false;
  }

  // Merge the TSTL output with war3map.lua
  const mapLua = `./${config.compilerOptions.baseUrl}/war3map.lua`;

  if (!fs.existsSync(mapLua)) {
    logger.error(`Could not find "${mapLua}"`);
    return false;
  }

  try {
    let contents = fs.readFileSync(mapLua).toString() + fs.readFileSync(tsLua).toString();
    contents = processScriptIncludes(contents);

    if (config.compilerOptions.scripts.minify) {
      logger.info(`Minifying script...`);
      contents = luamin.minify(contents.toString());
    }
    //contents = luamin.minify(contents);
    fs.writeFileSync(mapLua, contents);
  } catch (err) {
    logger.error(err.toString());
    return false;
  }

  return true;
}

/**
 * Formatter for log messages.
 */
const loggerFormatFunc = printf(({ level, message, timestamp }) => {
  return `[${timestamp.replace("T", " ").split(".")[0]}] ${level}: ${message}`;
});

/**
 * The logger object.
 */
export const logger = createLogger({
  transports: [
    new transports.Console({
      format: combine(
        format.colorize(),
        timestamp(),
        loggerFormatFunc
      ),
    }),
    new transports.File({
      filename: "project.log",
      format: combine(
        timestamp(),
        loggerFormatFunc
      ),
    }),
  ]
});

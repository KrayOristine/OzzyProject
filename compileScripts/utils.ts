import { execSync } from "child_process";
import { writeFileSync } from "fs";
import * as fs from "fs-extra";
import * as path from "path";
import { createLogger, format, transports } from "winston";
import * as ts from "typescript";
import { xxh3 } from "@node-rs/xxhash";
import lm from "./luamin/luamin";
const { combine, timestamp, printf, colorize } = format;

interface IProjectConfig {
  compilerOptions: {
    baseUrl: string;
    outDir: string;
    mapName: string;
    scripts: {
      constantFolding: boolean;
      minify: boolean;
      optimize: boolean;
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
  enable: boolean;
  cfPrecision: number;
  mapDir: string;
  entryFile: string;
  outputDir: string;
}

const cache = new Map<string, any>();

export function loadProjectConfig(): IProjectConfig {
  if (cache.has("projectConfig")) return cache.get("projectConfig");
  try {
    cache.set("projectConfig", JSON.parse(fs.readFileSync("config.json").toString()));

    return cache.get("projectConfig");
  } catch (e) {
    logger.error(e.toString());
    return {
      compilerOptions: {
        baseUrl: "",
        outDir: "",
        mapName: "",

        scripts: {
          constantFolding: false,
          minify: false,
          optimize: false,
        },
      },

      game: {
        executable: "",
        args: [""],
      },
    };
  }
}

export function loadTSConfig(): TSConfig {
  if (cache.has("tsConfig")) return cache.get("tsConfig");
  try {
    cache.set("tsConfig", JSON.parse(fs.readFileSync("tsconfig.json").toString()));

    return cache.get("tsConfig");
  } catch (e) {
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
  fs.readdirSync(dir).forEach((file) => {
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
}

/**
 * Replaces all instances of the include directive with the contents of the specified file.
 * @param contents war3map.lua
 */
export function processScriptIncludes(contents: string) {
  const regex = /include\(([^)]+)\)/gm;
  let matches: RegExpExecArray | null;
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
  plugin[0].mapDir = path.resolve("maps", mapFolder).replace(/\\/g, "/");
  plugin[0].entryFile = path.resolve(tsconfig.tstl.luaBundleEntry).replace(/\\/g, "/");
  plugin[0].outputDir = path.resolve("dist", mapFolder).replace(/\\/g, "/");

  writeFileSync("tsconfig.json", JSON.stringify(tsconfig, undefined, 2));
}

function updateProjectConfig() {
  const project = loadProjectConfig();

  project.compilerOptions.mapName = getMapName();

  writeFileSync("config.json", JSON.stringify(project, undefined, 4));
}

export function getMapName() {
  if (cache.has("mapName")) return cache.get("mapName");

  let split = loadProjectConfig().compilerOptions.baseUrl.split("/");
  cache.set("mapName", split.at(-1));

  return cache.get("mapName");
}

function cutMapFile(filePath: string) {
  const split = filePath.split("\\");

  return split.slice(split.indexOf(getMapName()) + 1).join("/");
}

interface MapFileCache {
  // filePath: "hash"
  [filePath: string]: string;
}

async function copyAndCache(source: string, target: string, cache: string, ignoreCache: boolean = false) {
  let tryNum = 0;
  const cacheFile = fs.readFileSync(cache, { encoding: "utf8", flag: "a+" });
  const cached: MapFileCache = JSON.parse(cacheFile === "" ? "{}" : cacheFile);
  const diff: Record<string, "hash" | "removed"> = {};
  while (true) {
    fs.copy(source, target, {
      filter: async function (source, _) {
        if (fs.statSync(source).isDirectory()) return Promise.resolve<boolean>(true);

        const mapFile = cutMapFile(source);
        return new Promise<boolean>((resolve, reject) => {
          fs.readFile(source, { encoding: "utf8" })
            .then((v) => {
              const mapHash = xxh3.xxh128(v, 696969n).toString(16);

              if (cached[mapFile] === undefined || cached[mapFile] === null) {
                cached[mapFile] = mapHash;
                diff[mapFile] = "removed";

                return resolve(true);
              }

              if (cached[mapFile] == undefined || cached[mapFile] != mapHash) {
                cached[mapFile] = mapHash;
                diff[mapFile] = "hash";

                return resolve(true);
              }

              return resolve(false);
            })
            .catch((e) => {
              reject(e);
            });
        });
      },
    })
      .then(() => {
        for (var k in diff) {
          if (diff[k] === "removed") {
            delete cached[k];
          }
        }

        fs.writeFile(cache, JSON.stringify(cached, undefined, ""));
      })
      .catch((e) => {
        logger.error("Error while copying: ", e);
        tryNum++;
        if (tryNum >= 3) return;
        logger.warn("Trying again...");
      });
  }
}

export async function mapBuildCache(mapUrl: string, mapDest: string) {
  const cachePath = mapDest + "cache.json";
  await copyAndCache(mapUrl, mapDest + getMapName(), cachePath);
}

/**
 *
 */
export async function compileMap(config: IProjectConfig) {
  if (!config.compilerOptions.baseUrl || config.compilerOptions.baseUrl === "") {
    logger.error(`[config.json]: baseUrl is empty!`);
    return false;
  }

  const tsLua = `${config.compilerOptions.outDir}/dist/tstl_output.lua`;

  if (fs.existsSync(tsLua)) {
    fs.unlinkSync(tsLua);
  }

  logger.info(`Building "${config.compilerOptions.baseUrl}"...`);
  await mapBuildCache(config.compilerOptions.baseUrl, `${config.compilerOptions.outDir}/dist/`);

  logger.info("Updating configuration...");
  updateTSConfig(config.compilerOptions.baseUrl);
  updateProjectConfig();

  logger.info("Transpiling code...");
  execSync("tstl -p tsconfig.json", { stdio: "inherit" });

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
       let minified = lm.minify(contents.toString(), {
        minifyAllGlobalVars: true,
        minifyTableKeyStrings: true,
        newlineSeparator: false,
        minifyMemberNames: true,
        minifyAssignedGlobalVars: true,
        minifyGlobalFunctions: true,
        randomIdentifiers: true,
        preservedGlobalFunctions: [
          // warcraft expect these two, so we preserve it to prevent it being minified
          'main',
          'config',
        ],
        preservedGlobalVars: [
          // i dont think we need to preserve this
        ]
      }) ?? '';

      if (minified.length <= 0){
        logger.error("Cant minify script!");
        throw new Error("Cant minify script");
      }

      contents = minified;
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
const loggerFormatFunc = (info) => `[${(info.timestamp as string).replace("T", " ").split(".")[0]}] ${info.level}: ${info.message}`;

/**
 * The logger object.
 */
export const logger = createLogger({
  transports: [
    new transports.Console({
      format: combine(colorize(), timestamp(), printf(loggerFormatFunc)),
    }),
    new transports.File({
      filename: "project.log",
      format: combine(timestamp(), printf(loggerFormatFunc)),
    }),
  ],
});

import { execSync } from "child_process";
import { writeFileSync } from "fs";
import * as fs from "fs-extra";
import * as path from "path";
import { createLogger, format, transports } from "winston";
import ts from "typescript";
const { combine, timestamp, printf, colorize } = format;

export interface IProjectConfig {
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

export interface TSConfig {
  compilerOptions: CompilerOptions;
  include: string[];
  exclude: any[];
  tstl: Tstl;
}

export interface Tstl {
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

export interface Plugin extends ts.PluginImport {
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
    logger.error(e);
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
    logger.error(e);
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



export function updateTSConfig(mapFolder: string) {
  const tsconfig = loadTSConfig();
  const plugin = tsconfig.compilerOptions.plugins;

  plugin[1].enable = loadProjectConfig().compilerOptions.scripts.constantFolding;
  plugin[1].cfPrecision = 0;
  plugin[0].mapDir = path.resolve("maps", mapFolder).replace(/\\/g, "/");
  plugin[0].entryFile = path.resolve(tsconfig.tstl.luaBundleEntry).replace(/\\/g, "/");
  plugin[0].outputDir = path.resolve("dist", mapFolder).replace(/\\/g, "/");

  writeFileSync("tsconfig.json", JSON.stringify(tsconfig, undefined, 2));
}

export function GetWorkerPath(path: string, fn: string){
  return new URL(path, require('url').pathToFileURL(fn).href);
}

export function updateProjectConfig() {
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

/**
 * Formatter for log messages.
 */
const loggerFormatFunc = (info: any) =>
  `[${(info.timestamp as string).replace("T", " ").split(".")[0]}] ${info.level}: ${info.message}`;

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

import { getMapName, getPreservedName, IProjectConfig, logger, updateProjectConfig, updateTSConfig } from "./utils.ts";
import { xxh3 } from "@node-rs/xxhash";
import lm from "./luamin/luamin.ts";
import * as fs from "fs-extra";
import tstl from "typescript-to-lua";
import { DiagnosticCategory } from 'typescript';

interface MapFileCache {
  // filePath: "hash"
  [filePath: string]: string;
}
const enum inline {

  seedA = 845673492817342,
  seedB = 156987324598743,
  seedC = 378241596384920,
  seedD = 903476123857294,
  seedE = 245098765432189
}


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

export function cutMapFile(filePath: string) {
  const split = filePath.split("\\");

  return split.slice(split.indexOf(getMapName()) + 1).join("/");
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
              const mapHash = xxh3.xxh128(v, BigInt(inline.seedE)).toString(16);

              if (ignoreCache) {
                cached[mapFile] = mapHash;
                diff[mapFile] = cached[mapFile] === undefined ? "removed" : "hash";

                return resolve(true);
              }

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
  return copyAndCache(mapUrl, mapDest + getMapName(), cachePath);
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
  mapBuildCache(config.compilerOptions.baseUrl, `${config.compilerOptions.outDir}/dist/`);

  logger.info("Updating configuration...");
  updateTSConfig(config.compilerOptions.baseUrl);
  updateProjectConfig();

  logger.info("Transpiling code...");

  let r = tstl.transpileProject('../tsconfig.json');

  if (r.diagnostics.length > 0){
    var hasErr = false;
    for (let i = 0; i < r.diagnostics.length; i++){
      let diag = r.diagnostics[i];
      if (diag.category === DiagnosticCategory.Error){
        if (!hasErr) logger.error("Error during transpilation!");
        hasErr = true;
        logger.error(diag.messageText.toString());
      }
    }

    return false;
  }

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
    const preserved = await getPreservedName();

    if (config.compilerOptions.scripts.minify) {
      logger.info(`Minifying script...`);
      let minified =
        lm.minify(contents.toString(), {
          minifyAllGlobalVars: true,
          minifyTableKeyStrings: true,
          newlineSeparator: false,
          minifyMemberNames: true,
          minifyAssignedGlobalVars: true,
          minifyGlobalFunctions: true,
          randomIdentifiers: true,
          preservedGlobalFunctions: [
            // warcraft expect these two, so we preserve it to prevent it being minified
            "main",
            "config",
            ...preserved.native,
            ...preserved.func
          ],
          preservedGlobalVars: [
            // i dont think we need to preserve this - 2/20/2025
            // yes we do - 3/1/2025
            ...preserved.variable
          ],
        }) ?? "";

      if (minified.length <= 0) {
        //logger.error("Cant minify script!");
        throw new Error("Cant minify script");
      }

      contents = minified;
    }

    fs.writeFileSync(mapLua, contents);
  } catch (err) {
    logger.error(err);
    return false;
  }
  return true;
}

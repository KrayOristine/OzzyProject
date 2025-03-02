import { cutMapFile, getMapName, getPreservedName, IProjectConfig, logger, processScriptIncludes, updateProjectConfig, updateTSConfig } from "./utils";
import { xxh3 } from "@node-rs/xxhash";
import lm from "./luamin/luamin";
import * as fs from "fs-extra";
import { execSync } from "child_process";

interface MapFileCache {
  // filePath: "hash"
  [filePath: string]: string;
}

const seed = [845673492817342n, 156987324598743n, 378241596384920n, 903476123857294n, 245098765432189n];

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
              const mapHash = xxh3.xxh128(v, seed[3]).toString(16);

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
    const preserved = getPreservedName()

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

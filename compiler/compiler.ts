import { getMapName, IProjectConfig, logger } from "./utils";
import { xxh3 } from "@node-rs/xxhash";
import lm from "./luamin/luamin";
import fsa from "fs/promises";
import fs from "fs";
import { DiagnosticCategory } from "typescript";
import { processPreserve } from "./processPreserve";
import { mapTranspile } from './transpiler';

interface MapFileCache {
  // filePath: "hash"
  [filePath: string]: string;
}
const enum inline {
  seedA = 845673492817342,
  seedB = 156987324598743,
  seedC = 378241596384920,
  seedD = 903476123857294,
  seedE = 245098765432189,
}

export function processScriptIncludes(contents: string) {
  const regex = /include\(([^)]+)\)/gm;
  let matches: RegExpExecArray | null;
  while ((matches = regex.exec(contents)) !== null) {
    const filename = matches[1].replace(/"/g, "").replace(/'/g, "");
    const fileContents = fs.readFileSync(filename);
    contents =
      contents.substring(0, regex.lastIndex - matches[0].length) +
      "\n" +
      fileContents +
      "\n" +
      contents.substring(regex.lastIndex);
  }
  return contents;
}

export function cutMapFile(filePath: string) {
  const split = filePath.split("\\");

  return split.slice(split.indexOf(getMapName()) + 1).join("/");
}

function testCache(hash: string, which: string, cache: MapFileCache, bypassCache = false): "normal" | "hash" | "removed" {
  if (cache[which] === hash) return "normal";
  if (cache[which] !== hash) return "hash";
  if (cache[which] === undefined || cache[which] === null) return "removed";

  // you should not be able to reach this
  return "normal";
}

async function copyAndCache(copySource: string, copyTarget: string, cache: string, ignoreCache: boolean = false) {
  let tryNum = 0;
  let cacheFile: string = "{}";
  if (fs.existsSync(cache)){
    cacheFile = fs.readFileSync(cache, { encoding: "utf-8", flag: "r" });
  }

  logger.info(`Copying start: source - ${copySource} | target - ${copyTarget}`);
  const cached: MapFileCache = JSON.parse(cacheFile);
  let continueToCopy = true;
  while (continueToCopy) {
    await fsa.cp(copySource, copyTarget, {
      recursive: true,
      force: true,
      filter: async function (source, _) {
        if (fs.statSync(source).isDirectory()) return true;

        try {
          const file = cutMapFile(source);
          const content = await fsa.readFile(source, { encoding: "utf8" })
          const hash = xxh3.xxh128(content, BigInt(inline.seedE)).toString(16);

          const r = testCache(hash, file, cached, ignoreCache);

          if (r === 'hash') {
            logger.info(`File changed, copying: ${file}`);
            cached[file] = hash;
            return true;
          };

          return false;
        } catch (e){
          logger.error(`Failed to copy ${source}, reason: ${e}`)
          throw e;
        }
      },
    })
      .then(() => {
        logger.info(`Finished copying to ${copyTarget}`);
        fs.writeFileSync(cache, JSON.stringify(cached, undefined, ""));
        continueToCopy = false;
      })
      .catch((e) => {
        logger.error("Error while copying: ", e);
        tryNum++;
        if (tryNum >= 3){
          logger.error("Failed to copy files after 3 retry, aborting...")
          continueToCopy = false;
          return;
        }
        logger.info("Trying again...");
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
export async function compileMap(config: IProjectConfig, minify: boolean) {
  if (!config.compilerOptions.baseDir || config.compilerOptions.baseDir === "") {
    logger.error(`[config.json]: baseDir is empty!`);
    return false;
  }

  const tsLua = `${config.compilerOptions.outDir}/dist/tstl_output.lua`;

  logger.info(`Cleaning up old build...`);
  if (fs.existsSync(tsLua)) {
    fs.unlinkSync(tsLua);
  }

  logger.info(`Building "${config.compilerOptions.baseDir}"...`);
  await mapBuildCache(config.compilerOptions.baseDir, `${config.compilerOptions.outDir}/dist/`);

  logger.info("Transpiling code...");
  let r = mapTranspile(config.compilerOptions.codeDir);
  try {
    const emit = await r;

    if (emit.diagnostics.length > 0) {
      var hasErr = false;
      for (let i = 0; i < emit.diagnostics.length; i++) {
        let diag = emit.diagnostics[i];
        if (diag.category === DiagnosticCategory.Error) {
          hasErr = true;
          logger.info(JSON.stringify(diag));
        }
      }

      if (hasErr){
        throw "Error during transpilation";
      }
    }
  } catch (e){
    logger.error(e);
    return;
  }

  if (!fs.existsSync(tsLua)) {
    logger.error(`Could not find "${tsLua}"`);
    return false;
  }

  // Merge the TSTL output with war3map.lua
  const mapLua = `./${config.compilerOptions.baseDir}/war3map.lua`;

  if (!fs.existsSync(mapLua)) {
    logger.error(`Could not find "${mapLua}"`);
    return false;
  }

  try {
    const read = [fsa.readFile(mapLua), fsa.readFile(tsLua)];
    if (minify) {
      const blizzard = `./compiler/Blizzard.j`;
      const common = `./compiler/common.j`;
      read.push(fsa.readFile(blizzard), fsa.readFile(common));
    }

    await Promise.allSettled(read);

    const mapL = await read[0];
    const tsL = await read[1];
    const ct = new Uint8Array(mapL.byteLength + tsL.byteLength);
    ct.set(mapL, 0);
    ct.set(tsL, mapL.byteLength);
    let contents = processScriptIncludes(ct.toString());

    if (minify) {
      const blizzContent = (await read[2]).toString();
      const commonContent = (await read[3]).toString();
      const preservedBlizz = processPreserve(blizzContent);
      const preservedCommon = processPreserve(commonContent);
      if (globalThis.gc) {
        globalThis.gc();
      }

      logger.info(`Minifying script...`);
      let minified =
        lm.minify(contents, {
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
            ...preservedBlizz[0],
            ...preservedCommon[0],
          ],
          preservedGlobalVars: [
            // i dont think we need to preserve this - 2/20/2025
            // yes we do - 3/1/2025
            ...preservedBlizz[1],
            ...preservedCommon[1],
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

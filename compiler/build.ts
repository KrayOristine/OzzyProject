import * as fs from "fs-extra";
import * as path from "path";
import War3Map from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/map";
import { compileMap, getFilesInDirectory, loadProjectConfig, logger, toArrayBuffer } from "./utils";

function main() {
  const config = loadProjectConfig();
  const minify = process.argv[2] === "-minify" || config.compilerOptions.scripts.minify;

  if (minify !== config.compilerOptions.scripts.minify) {
    logger.warn(`minifyScript has been overridden by command line argument "-minify"`);
    config.compilerOptions.scripts.minify = minify;
  }

  const result = compileMap(config);

  result.finally(() => {
    if (!result) {
      logger.error(`Failed to compile map.`);
      return;
    }

    logger.info(`Creating w3x archive...`);
    if (!fs.existsSync(config.compilerOptions.outDir + "/dist/bin")) {
      fs.mkdirSync(config.compilerOptions.outDir + "/dist/bin");
    }

    createMapFromDir(`${config.compilerOptions.outDir}/dist/bin/${config.compilerOptions.mapName}`, `./dist/${config.compilerOptions.mapName}`);
  });
}

/**
 * Creates a w3x archive from a directory
 * @param output The output filename
 * @param dir The directory to create the archive from
 */
export function createMapFromDir(output: string, dir: string) {
  const map = new War3Map();
  const files = getFilesInDirectory(dir);

  logger.info(`Creating archive from "${dir}" to target file "${output}"`);

  map.archive.resizeHashtable(files.length);

  for (const fileName of files) {
    const contents = toArrayBuffer(fs.readFileSync(fileName));
    const archivePath = path.relative(dir, fileName);
    const imported = map.import(archivePath, contents);

    if (!imported) {
      logger.warn("Failed to import " + archivePath);
      continue;
    }
  }

  const result = map.save();

  if (!result) {
    logger.error("Failed to save archive.");
    return;
  }

  fs.writeFileSync(output, new Uint8Array(result));

  logger.info("Finished!");
}

main();

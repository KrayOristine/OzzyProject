import * as tstl from "typescript-to-lua";
import * as ts from "typescript";
import * as fs from "node:fs";
import * as fsa from "fs-extra";
import path from 'node:path';
import { logger } from './utils';

const memo = function(f: ()=>any){
  let v: any = undefined;
  return ()=>{
    if (v === undefined){
      v = f();
    };

    return v;
  }
}

export async function mapTranspile(codeDir: string): Promise<tstl.EmitResult> {
  if (!fs.existsSync(`${codeDir}/tsconfig.json`)){
    throw "tsconfig.json does not exists";
  }

  const system: typeof ts.sys = {...ts.sys,
    getCurrentDirectory: memo(()=>{
      return path.resolve(path.join(process.cwd(), './src'));
    }),
    writeFile(path, data, writeByteOrderMark) {
      fs.writeFileSync(path, data, { encoding: "utf-8", flag: "w+"});
    },
  };

  const configPath = path.resolve(path.join(process.cwd(), codeDir, 'tsconfig.json'))
  const parseResult = tstl.parseConfigFileWithSystem(configPath, undefined, system);

  logger.debug(JSON.stringify({includedFiles: parseResult.fileNames, errors: parseResult.errors}, null, 2));

  if (parseResult.errors.length > 0) {
      return { diagnostics: parseResult.errors, emitSkipped: true };
  }

  try {
    const result = tstl.transpileFiles(parseResult.fileNames, parseResult.options, system.writeFile);
    return result;
  } catch (e) {
    logger.info(String(e));
    return { diagnostics: [], emitSkipped: true};
  }

}

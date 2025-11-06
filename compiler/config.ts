import * as path from 'node:path';
import * as fs from 'node:fs';

interface ScriptOption {
  minify: boolean;
  optimize: boolean;
  optimizeLevel: number;
}

interface MpqOption {
  cache: boolean;
}

interface CompilerConfig {
  baseDir: string;
  outDir: string;
  mapName: string;
  scripts: ScriptOption;
  mpq: MpqOption;
}

interface GameConfig {
  path: string;
  extraArgs: string[];
}

interface Config {
  compilerOptions: CompilerConfig;
  game: GameConfig;
}

let currentConfig: Config | null = null;

export function getCompilerConfig() {
  if (currentConfig) return currentConfig;

  const p = path.resolve(process.cwd(), "compile-config.json");

  try {
    const content = fs.readFileSync(p, 'utf-8');

    currentConfig = JSON.parse(content) as Config;
  } catch (e){
    throw new Error(`Error parsing configuration file at ${p}: ${(e as Error).message}`);
  }

  return currentConfig;
}

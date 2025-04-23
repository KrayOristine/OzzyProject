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

function fmtStr(arr: RegExpExecArray) {
  const r = [];
  for (let i = 1; i < arr.length; i++) {
    const str = arr[i];
    if (str === undefined || str === null) {
      r.push(`${i}/0`);
      continue;
    }

    const valid = str.trim();
    if (valid.length <= 0 || valid === "") {
      r.push(`${i}/0`);
      continue;
    }

    r.push(`${i}/${valid}`);
  }

  return r.join(",");
}

function checkValid(which: string, val: string) {
  if (val === undefined || val === null) return false;

  const str = val.toLowerCase().trim();
  if (str.length === 0 || str === "") return false;

  return str == which;
}

async function capture(source: Promise<string>, regex: RegExp, native: string[], variable: string[], func: string[]) {
  const sourceData = await source;
  let m = regex.exec(sourceData);
  while (m !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // https://regex101.com/r/Zy6QfV/1 -- saved for future
    const name = m[16];
    const isConst = checkValid("constant", m[2]); // what do you expect me to do?
    const isFunc = checkValid("function", m[2]);
    const isNative = checkValid("native", m[10]) || checkValid("native", m[2]);
    const isVar = !(isFunc || isNative);
    // which kind

    // console.log(
    //   `[Native Matcher] Found match: ${name} - Is Const/Func/Native/Var: ${isConst ? 1 : 0}/${isFunc ? 1 : 0}/${
    //     isNative ? 1 : 0
    //   }/${isVar ? 1 : 0} - Array of V: [${fmtStr(m)}]`
    // );
    if (isFunc) {
      func.push(name);
    } else if (isNative) {
      native.push(name);
    } else if (isVar) {
      variable.push(name);
    }

    m = regex.exec(sourceData);
  }
}

const enum Inliner {
  ValidType = "string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect",
}

export async function getPreservedName(forceGenerate: boolean = false): Promise<{ native: string[]; func: string[]; variable: string[] }> {
  if (!forceGenerate && fs.existsSync("./preserveNameCache.json")) {
    return JSON.parse(fs.readFileSync("./preserveNameCache.json", {encoding: 'utf8'}));
  }

  const bliz = fs.readFile("./compiler/Blizzard.j", { encoding: "utf-8" });
  const nat = fs.readFile("./compiler/common.j", { encoding: "utf-8" });

  const native: string[] = [];
  const func: string[] = [];
  const variable: string[] = [];

  //const regexA = new RegExp(`^([\\t ]+)?((constant )|(function )|(native )|((${Inliner.ValidType}) (array )?))([ \\t]+)?((native )|((${Inliner.ValidType}) (array )?))?([ \\t]+)?(\\w+)(([ \\t]+)(takes|\\=)? [, \\w\\d\\t\\"\\'\\(\\)]+)?\\n?$`, "gm");
  const regexB =
    /^([\t ]+)?((constant )|(function )|(native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))([ \t]+)?((native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))?([ \t]+)?(\w+)(([ \t]+)(takes|\=)? [, \w\d\t\"\'\(\)]+)?\n?$/gm;

  let capNat = capture(nat, regexB, native, variable, func);
  let capBlit = capture(bliz, regexB, native, variable, func);

  await Promise.allSettled([capNat, capBlit]);

  let result = { native: native, func: func, variable: variable };

  fs.writeFileSync("./preserveNameCache.json", JSON.stringify(result));
  return result;
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

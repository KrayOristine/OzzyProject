import fs from "node:fs/promises";
import { parentPort } from "node:worker_threads";

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

async function capture(source: Promise<string>, regex: RegExp, funcBuffer: Uint8Array, varBuffer: Uint8Array) {
  const sourceData = await source;
  let m = regex.exec(sourceData);
  if (m === null) return;

  const tex = new TextEncoder();

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

    // console.log(
    //   `[Native Matcher] Found match: ${name} - Is Const/Func/Native/Var: ${isConst ? 1 : 0}/${isFunc ? 1 : 0}/${
    //     isNative ? 1 : 0
    //   }/${isVar ? 1 : 0} - Array of V: [${fmtStr(m)}]`
    // );

    if (isFunc || isNative) {
      tex.encodeInto(name, funcBuffer);
      tex.encodeInto(',', funcBuffer)
    } else if (isVar) {
      tex.encodeInto(name, varBuffer);
      tex.encodeInto(',', varBuffer);
    }

    m = regex.exec(sourceData);
  }
}

parentPort?.on("message", async (path: string) => {
  const f = fs.readFile(path, { encoding: "utf-8" });

  const regexB =
    /^([\t ]+)?((constant )|(function )|(native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))([ \t]+)?((native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))?([ \t]+)?(\w+)(([ \t]+)(takes|\=)? [, \w\d\t\"\'\(\)]+)([ \t]+)?(\/\/.*)?\n?$/gm;

  const vBuf = new ArrayBuffer();
  const fBuf = new ArrayBuffer();
  const viewV = new Uint8Array(vBuf);
  const viewF = new Uint8Array(fBuf);
  await capture(f, regexB, viewF, viewV);

  const sendF = fBuf.byteLength > 0;
  const sendV = vBuf.byteLength > 0;

  if (sendF && sendV) parentPort?.postMessage(2);
  if (sendF || sendV) parentPort?.postMessage(1);
  else {
    parentPort?.postMessage(0);
    return;
  }

  if (sendV) parentPort?.postMessage(vBuf);
  if (sendF) parentPort?.postMessage(fBuf);
});

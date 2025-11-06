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

let tex: InstanceType<typeof TextEncoder> | undefined;

function pushBuffer(buffer: Uint8Array, value: string){
  if (!tex) tex = new TextEncoder();
}

function capture(source: string, regex: RegExp, funcBuffer: Uint8Array, varBuffer: Uint8Array) {
  const sourceData = source;
  let m = regex.exec(sourceData);
  if (m === null) return;

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

    let target;
    if (isFunc || isNative){
      target = funcBuffer;
    } else if (isVar){
      target = varBuffer;
    }

    if (target !== undefined){
      pushBuffer(target, name);
      pushBuffer(target, '|');
    }

    m = regex.exec(sourceData);
  }
}

/**
 *
 * @param target The script contents
 * @returns 0 - function buffer, 1 - variable buffer
 */
export function processPreserve(target: string): [string[], string[]] {
  const regexB =
    /^([\t ]+)?((constant )|(function )|(native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))([ \t]+)?((native )|((string|integer|real|boolean|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|minimapicon|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat|hashtable|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|commandbuttoneffect) (array )?))?([ \t]+)?(\w+)(([ \t]+)(takes|\=)? [, \w\d\t\"\'\(\)]+)([ \t]+)?(\/\/.*)?\n?$/gm;

  const vBuf = new Uint8Array();
  const fBuf = new Uint8Array();
  capture(target, regexB, fBuf, vBuf);

  const func =  fBuf.toString();
  const vars = vBuf.toString();

  // convert to array
  const funcArr = func.length > 0 ? func.split('|').filter(v => v.trim().length > 0) : [];
  const varsArr = vars.length > 0 ? vars.split('|').filter(v => v.trim().length > 0) : [];

  return [funcArr, varsArr];
}

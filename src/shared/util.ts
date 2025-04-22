import hooks from "./hooks";

let zeroLoc: location;
const sbyte = string.byte;
const concat = table.concat;
const char = string.char;

function util_init() {
  zeroLoc = Location(0, 0);
}


function LuaTableContains<T2>(table: LuaTable<number, T2>, data: T2): boolean {
  for (const i of $range(1, table.length())) {
    if (table.get(i) == data) return true;
  }
  return false;
}

function ArrContains<T>(arr: T[], data: T): boolean {
  for (const i of $range(1, arr.length)) {
    if (arr[i] == data) return true;
  }
  return false;
}

function GetHeroPrimaryStat(h: unit, includeBonus: boolean = false): number {
  let i = BlzGetHeroPrimaryStat(h);
  if (i == 1) return GetHeroStr(h, includeBonus);
  if (i == 3) return GetHeroAgi(h, includeBonus);
  if (i == 2) return GetHeroInt(h, includeBonus);

  return 0;
}

function SetHeroPrimaryStat(h: unit, newValue: number): void {
  BlzSetHeroStatEx(h, BlzGetHeroPrimaryStat(h), newValue);
}

function GetZ(xPos: number, yPos: number): number {
  MoveLocation(zeroLoc, xPos, yPos);
  return GetLocationZ(zeroLoc);
}

function GetUnitZ(u: unit): number {
  return GetZ(GetUnitX(u), GetUnitY(u) + GetUnitFlyHeight(u));
}

function SetUnitZ(u: unit, newZPos: number): void {
  SetUnitFlyHeight(u, newZPos - GetZ(GetUnitX(u), GetUnitY(u)), 0);
}

// yoinked from Magi Log n' Load (COBSEscape at line i dont know)
function cobs_escape(s: string) {
  let char = string.char;
  let sub = string.sub;
  let find = string.find;
  let str0 = char(0);
  let str255 = char(255);

  let l = s.length;
  let i0 = 1;
  let r = [];
  let ri = 0;

  while (i0 <= l) {
    let i1 = i0 + 253 > l ? l - i0 + 1 : 254;

    let sb = sub(s, i0, i0 + i1);

    i0 += i1;

    let last = 0;
    let hit: number | null = find(sb, str0, last + 1, true)[0];
    while (hit) {
      ri += 1;
      r[ri - 1] = char(hit - last);

      if (hit - last > 1) {
        ri += 1;
        r[ri - 1] = sub(sb, last + 1, hit - 1);
      }

      last = hit;

      hit = last < i1 ? find(sb, str0, last + 1, true)[0] : null;
    }

    if (last < i1) {
      ri += 1;
      r[ri - 1] = str255;

      ri += 1;
      r[ri - 1] = sub(sb, last + 1, i1);
    }
  }

  return concat(r);
}

// also yoinked from Magi Log n' Load (COBSDescape)
function cobs_unescape(s: string) {
  let sub = string.sub;
  let byte = string.byte;
  let s0 = char(0);
  let l = s.length;
  let i = 1;
  let r = [];
  let ri = 0;

  while (i <= l) {
    let sbl = i + 254 > l ? l - i + 1 : 255;

    let sb = sub(s, i, i + sbl);

    i += sbl;

    let last = 1;
    let hit = byte(sb, last, last)[0];

    while (last + hit <= sbl) {
      ri += 1;
      r[ri - 1] = sub(sb, last + 1, last + hit - 1);

      last += hit;

      ri += 1;
      r[ri - 1] = s0;

      hit = byte(sb, last, last)[0];
    }

    if (last < sbl) {
      ri += 1;
      r[ri - 1] = sub(sb, last + 1, sbl);
    }
  }

  return concat(r);
}

function to_utf8(s: string): string{
  let char = utf8.char;

  let strlen = s.length;
  let arr: number[] = sbyte(s, 1, strlen);

  let r: string[] = [];

  for (const i of $range(0,(strlen >>> 1)+(strlen&1)-1)) {
    r[i] = char((arr[i+i] << 8) + (arr[i+i+1] || 255));

  }

  r[r.length] = char((strlen&1)+1);

  return table.concat(r);
}

function code_utf8(s: string){
  let r = new LuaTable();
  let i = 0;

  for (const [_, c] of utf8.codes(s)){
    i += 1;
    r.set(i, c >>> 8);
    i += 1;
    r.set(i, c & 255);
  }

  r.set(i - r.get(i), null)
  r.set(i - 1, null)
  r.set(i, null)

  return fuck_type<number[]>(r);
}

function to_byte_array(s:string, dest?: number[]){
  const r: number[] = dest || [];
  for (const i of $range(1, s.length)){
    r.push(sbyte(s, i));
  }

  return r;
}

// dont ask me
function fuck_type<T>(v: any) { return v as unknown as T};

/**
 * Determines whether the attacker is behind the attacked with the given tolerance in degrees.
 *
 * A tolerance of 360 would mean the target can be attacked from anywhere while being considered "behind".
 * @param attacker The unit performing the attack.
 * @param attacked The unit being attacked.
 * @param tolerance In degrees.
 */
function IsBehindOfTarget(source: unit, target: unit, tolerance: number): boolean {
  let num1 = AngleBetweenPointsC(source, target);
  let face = GetUnitFacing(target);
  let num2 = 0.5 * tolerance;
  let num3 = 360 - num2;
  let num4 = Math.abs(num1 - face);
  if (num4 > num3) return num4 > num2;

  return true;
}

/**
 * Determines whether the attacker is in front of the attacked with the given tolerance in degrees.
 *
 * A tolerance of 360 means the target can be attacked from anywhere while being considered "in front".
 * @param attacker The unit performing the attack.
 * @param attacked The unit being attacked.
 * @param tolerance In degrees.
 */
function IsFrontOfTarget(source: unit, target: unit, tolerance: number): boolean {
  let num1 = AngleBetweenPointsC(target, source);
  let face = GetUnitFacing(target);
  let num2 = 0.5 * tolerance;
  let num3 = 360 - num2;
  let num4 = Math.abs(num1 - face);
  if (num4 > num3) return num4 > num2;

  return true;
}

/**
 *  Calculates the distance from x1, y1 to x2, y2.
 *
 *  All parameters must be pre-calculated.
 */
function DistanceBetweenPoints(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

/**
 *  Calculates the angle in degrees from source unit to (x2, y2).
 *
 *  source must be pre-calculated.
 */
function AngleBetweenPointsA(source: unit, x2: number, y2: number): number {
  return 180 + 57.2957764 * Math.atan2(GetUnitY(source) - y2, GetUnitX(source) - x2);
}

/**
 *  Calculates the angle in degrees from (x1, y1) to target unit.
 *
 *  target must be pre-calculated.
 */
function AngleBetweenPointsB(x1: number, y1: number, target: unit): number {
  return 180 + 57.2957764 * Math.atan2(y1 - GetUnitY(target), x1 - GetUnitX(target));
}

/**
 *  Calculates the angle in degrees from source unit to target unit.
 *
 *  All parameters must be pre-calculated.
 */
function AngleBetweenPointsC(source: unit, target: unit): number {
  return 180 + 57.2957764 * Math.atan2(GetUnitY(source) - GetUnitY(target), GetUnitX(source) - GetUnitX(target));
}

/**
 *  Calculates the angle in degrees from (x1, y1) to (x2, y2).
 */
function AngleBetweenPointsD(x1: number, y1: number, x2: number, y2: number): number {
  return 180 + 57.2957764 * Math.atan2(y1 - y2, x1 - x2);
}

/**
 *  Calculates the angle in radians from source unit to (x2, y2).
 *
 *  source must be pre-calculated.
 */
function AngleBetweenPointsRadA(source: unit, x2: number, y2: number): number {
  return 3.14159274 + Math.atan2(GetUnitY(source) - y2, GetUnitX(source) - x2);
}

/**
 *  Calculates the angle in radians from (x1, y1) to target unit.
 *
 *  target must be pre-calculated.
 */
function AngleBetweenPointsRadB(x1: number, y1: number, target: unit): number {
  return 3.14159274 + Math.atan2(y1 - GetUnitY(target), x1 - GetUnitX(target));
}

/**
 *  Calculates the angle in radians from source unit to target unit.
 *
 *  All parameters must be pre-calculated.
 */
function AngleBetweenPointsRadC(source: unit, target: unit): number {
  return 3.14159274 + Math.atan2(GetUnitY(source) - GetUnitY(target), GetUnitX(source) - GetUnitX(target));
}

/**
 *  Calculates the angle in radians from (x1, y1) to (x2, y2).
 *
 *  All parameters must be pre-calculated.
 */
function AngleBetweenPointsRadD(x1: number, y1: number, x2: number, y2: number): number {
  return 3.14159274 + Math.atan2(y1 - y2, x1 - x2);
}

export default {
  ArrContains,
  LuaTableContains,
  AngleBetweenPointsA,
  AngleBetweenPointsB,
  AngleBetweenPointsC,
  AngleBetweenPointsD,
  AngleBetweenPointsRadA,
  AngleBetweenPointsRadB,
  AngleBetweenPointsRadC,
  AngleBetweenPointsRadD,
  IsBehindOfTarget,
  IsFrontOfTarget,
  GetZ,
  GetUnitZ,
  SetUnitZ,
  SetHeroPrimaryStat,
  GetHeroPrimaryStat,
  cobs_escape,
  cobs_unescape,
  ensure_string_safety: to_utf8,
  util_init,
  to_byte_array,
  code_utf8,
  fuck_type,
};

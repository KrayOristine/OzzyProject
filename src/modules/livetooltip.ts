import periodic from "./periodic";

//@ THIS IS PURE NIGHTMARE FUEL FOR MARGINAL PERFORMANCE AND SPEED
//@ DO NOT REPLICATE WITHOUT PROFESSIONAL HELP
//@ DO NOT ATTEMPT TO UNDERSTAND

export const enum IdentifierType {
  base = "base",
  bonus = "bonus",
  total = "total",
  current = "current",
  custom = "custom",
}

/** @noSelf */
interface LiveTooltip {
  addList: (target: unit, abilityList: number[], prefetch: boolean) => void;
  addSingle: (target: unit, ability: number, prefetch: boolean) => void;
  removeSingle: (from: unit, ability: number) => void;
  removeList: (from: unit, abilityList: number[]) => void;
  removeAll: (from: unit) => void;
  clearCache: () => void;
  init: ()=>void;
  update: () => boolean;
}


const _identifier = new LuaMap<string,number>();
const _identifierKind = new LuaMap<string,number>();
let _tooltipCache = new LuaMap<number,string>();
let _extendedTooltipCache = new LuaMap<number,string>();
const _updateTarget = new LuaMap<unit,number[]>();
const _updateList: unit[] = [];
let _active = false;
let _current: unit;

const converter = setmetatable({}, {
  __index: _identifier,
  __newindex: function(this: object, k: any, v: any){}
});

const _pgsub = function(...match: string[]){


}

const _processFormula = function(str: string, u: unit){

  _current = u;
  const r = string.gsub(str, "%$(.-)%$", _pgsub)

  return str;
}

const liveTooltip: LiveTooltip = {

  init: function(){

  },
  addList: function (target: unit, abilityList: number[], prefetch: boolean = true): void {
    if (!_active) {
      periodic.add(this.update, 1);
      _active = true;
    }

    if (_updateTarget.has(target)) {
      const v = _updateTarget.get(target)!;
      const al = abilityList.length;

      let vl = v.length;
      if (prefetch) {
        for (const i of $range(1, al)) {
          const id = abilityList[i - 1];
          vl++;
          v[vl - 1] = id;
          _tooltipCache.set(id, BlzGetAbilityTooltip(id, 0)!);
          _extendedTooltipCache.set(id, BlzGetAbilityExtendedTooltip(id, 0)!);
        }
      } else {
        for (const i of $range(1, al)) {
          vl++;
          v[vl - 1] = abilityList[i - 1];
        }
      }

      return;
    }

    const uls = _updateList;
    uls[uls.length] = target;
    let ti = 0;
    const t = [];

    const al = abilityList.length;
    if (prefetch) {
      for (const i of $range(1, al)) {
        ti++;
        const id = abilityList[i - 1];
        t[ti - 1] = id;
        _tooltipCache.set(id, BlzGetAbilityTooltip(id, 0)!);
        _extendedTooltipCache.set(id, BlzGetAbilityExtendedTooltip(id, 0)!);
      }
    } else {
      for (const i of $range(1, al)) {
        ti++;
        t[ti - 1] = abilityList[i - 1];
      }
    }

    _updateTarget.set(target, t);
  },
  addSingle: function (target: unit, ability: number, prefetch: boolean = true): void {
    if (!_active) {
      periodic.add(this.update, 1);
      _active = true;
    }

    if (_updateTarget.has(target)) {
      const v = _updateTarget.get(target)!;
      v[v.length] = ability;

      if (prefetch) {
        _tooltipCache.set(ability, BlzGetAbilityTooltip(ability, 0)!);
        _extendedTooltipCache.set(ability, BlzGetAbilityExtendedTooltip(ability, 0)!);
      }

      return;
    }

    const uls = _updateList;
    uls[uls.length] = target;
    _updateTarget.set(target, [ability]);

    if (prefetch) {
      _tooltipCache.set(ability, BlzGetAbilityTooltip(ability, 0)!);
      _extendedTooltipCache.set(ability, BlzGetAbilityExtendedTooltip(ability, 0)!);
    }
  },
  removeSingle: function (from: unit, ability: number): void {
    if (!_updateTarget.has(from)) return;

    const t = _updateTarget.get(from)!;
    const tl = t.length;
    for (const i of $range(1, tl)) {
      if (t[i - 1] == ability) {
        t[i - 1] = t[tl - 1];
        t[tl - 1] = null!;
        break;
      }
    }

    if (tl - 1 == 0) {
      const u = _updateList;
      const ul = u.length;

      for (const i of $range(1, ul)) {
        if (u[i - 1] == from) {
          u[i - 1] = u[ul - 1];
          u[ul - 1] = null!;
          break;
        }
      }

      _updateTarget.delete(from);
    }
  },
  removeList: function (from, abilityList) {
    if (!_updateTarget.has(from)) return;

    const a = _updateTarget.get(from)!;
    let al = a.length;
    const rl = abilityList.length;
    for (const i of $range(1, rl)) {
      const id = abilityList[i];
      if (!_tooltipCache.has(id)) continue;
      for (const i of $range(1, al)) {
        if (a[i - 1] == id) {
          a[i - 1] = a[al - 1];
          a[al - 1] = null!;
          al--;
          // it exists
          break;
        }
      }
    }

    const u = _updateList;
    const ul = u.length;

    for (const i of $range(1, ul)) {
      if (u[i - 1] == from) {
        u[i - 1] = u[ul - 1];
        u[ul - 1] = null!;
        break;
      }
    }
  },
  removeAll: function (from: unit) {
    if (!_updateTarget.has(from)) return;

    _updateTarget.delete(from);

    const u = _updateList;
    const ul = u.length;

    for (const i of $range(1, ul)) {
      if (u[i - 1] == from) {
        u[i - 1] = u[ul - 1];
        u[ul - 1] = null!;
        break;
      }
    }
  },
  clearCache: function(){
    _tooltipCache = new LuaMap();
    _extendedTooltipCache = new LuaMap();
  },
  update: function (): boolean {
    const up = _updateList;
    const upl = _updateList.length;
    const processDynamic = _processFormula;
    for (const i of $range(1, upl)){
      const u = up[i-1];
      const arr = _updateTarget.get(u)!;
      const arrl = arr.length;
      for (const i of $range(1, arrl)){
        const abi = arr[i-1];
        let cacheA = _tooltipCache.get(abi);
        let cacheB = _extendedTooltipCache.get(abi);

        if (cacheA == null){
          cacheA = BlzGetAbilityTooltip(abi, 0)!;
          _tooltipCache.set(abi, cacheA);
        }
        if (cacheB == null){
          cacheB = BlzGetAbilityTooltip(abi, 0)!;
          _tooltipCache.set(abi, cacheB);
        }

        const repA = processDynamic(cacheA, u);
        const repB = processDynamic(cacheB, u);

      }
    }

    return false;
  },
};

export default liveTooltip;

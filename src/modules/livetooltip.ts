import periodic from "./periodic";

//@ THIS IS PURE NIGHTMARE FUEL FOR MARGINAL PERFORMANCE AND SPEED
//@ DO NOT REPLICATE WITHOUT PROFESSIONAL HELP
//@ DO NOT ATTEMPT TO UNDERSTAND

export const enum IdentifierType {
  base = "base",
  bonus = "bonus",
  total = "total",
  current = "current",
  custom = "custom.",
}

interface LiveTooltip {
  identifier: LuaMap<string, number>; // must map to stats number
  identifierKind: LuaMap<string, IdentifierType>; // must map to it type
  tooltipCache: LuaMap<number, string>; // number = ability id
  extendedTooltipCache: LuaMap<number, string>; // number = ability id
  updateTarget: LuaMap<unit, number[]>; // number = ability id
  updateList: unit[];
  active: boolean;

  addList: (target: unit, abilityList: number[], prefetch: boolean) => void;
  addSingle: (target: unit, ability: number, prefetch: boolean) => void;
  removeSingle: (from: unit, ability: number) => void;
  removeList: (from: unit, abilityList: number[]) => void;
  removeAll: (from: unit) => void;
  update: (this: void) => boolean;
}

const liveTooltip: LiveTooltip = {
  identifier: new LuaMap(),
  identifierKind: new LuaMap(),
  tooltipCache: new LuaMap(),
  extendedTooltipCache: new LuaMap(),
  updateTarget: new LuaMap(),
  updateList: [],
  active: false,
  addList: function (target: unit, abilityList: number[], prefetch: boolean = true): void {
    if (!this.active) {
      periodic.add(this.update, 1);
      this.active = true;
    }

    if (this.updateTarget.has(target)) {
      const v = this.updateTarget.get(target)!;
      const al = abilityList.length;

      let vl = v.length;
      if (prefetch) {
        for (const i of $range(1, al)) {
          const id = abilityList[i - 1];
          vl++;
          v[vl - 1] = id;
          this.tooltipCache.set(id, BlzGetAbilityTooltip(id, 0)!);
          this.extendedTooltipCache.set(id, BlzGetAbilityExtendedTooltip(id, 0)!);
        }
      } else {
        for (const i of $range(1, al)) {
          vl++;
          v[vl - 1] = abilityList[i - 1];
        }
      }

      return;
    }

    const uls = this.updateList;
    uls[uls.length] = target;
    let ti = 0;
    const t = [];

    const al = abilityList.length;
    if (prefetch) {
      for (const i of $range(1, al)) {
        ti++;
        const id = abilityList[i - 1];
        t[ti - 1] = id;
        this.tooltipCache.set(id, BlzGetAbilityTooltip(id, 0)!);
        this.extendedTooltipCache.set(id, BlzGetAbilityExtendedTooltip(id, 0)!);
      }
    } else {
      for (const i of $range(1, al)) {
        ti++;
        t[ti - 1] = abilityList[i - 1];
      }
    }

    this.updateTarget.set(target, t);
  },
  addSingle: function (target: unit, ability: number, prefetch: boolean = true): void {
    if (!this.active) {
      periodic.add(this.update, 1);
      this.active = true;
    }

    if (this.updateTarget.has(target)) {
      const v = this.updateTarget.get(target)!;
      v[v.length] = ability;

      if (prefetch) {
        this.tooltipCache.set(ability, BlzGetAbilityTooltip(ability, 0)!);
        this.extendedTooltipCache.set(ability, BlzGetAbilityExtendedTooltip(ability, 0)!);
      }

      return;
    }

    const uls = this.updateList;
    uls[uls.length] = target;
    this.updateTarget.set(target, [ability]);

    if (prefetch) {
      this.tooltipCache.set(ability, BlzGetAbilityTooltip(ability, 0)!);
      this.extendedTooltipCache.set(ability, BlzGetAbilityExtendedTooltip(ability, 0)!);
    }
  },
  removeSingle: function (from: unit, ability: number): void {
    if (!this.updateTarget.has(from)) return;

    const t = this.updateTarget.get(from)!;
    const tl = t.length;
    for (const i of $range(1, tl)) {
      if (t[i - 1] == ability) {
        t[i - 1] = t[tl - 1];
        t[tl - 1] = null!;
        break;
      }
    }

    this.tooltipCache.delete(ability);
    this.extendedTooltipCache.delete(ability);

    if (tl - 1 == 0) {
      const u = this.updateList;
      const ul = u.length;

      for (const i of $range(1, ul)) {
        if (u[i - 1] == from) {
          u[i - 1] = u[ul - 1];
          u[ul - 1] = null!;
          break;
        }
      }

      this.updateTarget.delete(from);
    }
  },
  removeList: function (from, abilityList) {
    if (!this.updateTarget.has(from)) return;

    const a = this.updateTarget.get(from)!;
    let al = a.length;
    const rl = abilityList.length;
    for (const i of $range(1, rl)) {
      const id = abilityList[i];
      if (!this.tooltipCache.has(id)) continue;
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
    for (const i of $range(1, al)) {
      const id = a[i - 1];
      this.tooltipCache.delete(id);
      this.extendedTooltipCache.delete(id);
    }

    const u = this.updateList;
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
    if (!this.updateTarget.has(from)) return;

    const a = this.updateTarget.get(from)!;
    this.updateTarget.delete(from);
    const al = a.length;
    for (const i of $range(1, al)) {
      const id = a[i - 1];
      this.tooltipCache.delete(id);
      this.extendedTooltipCache.delete(id);
    }

    const u = this.updateList;
    const ul = u.length;

    for (const i of $range(1, ul)) {
      if (u[i - 1] == from) {
        u[i - 1] = u[ul - 1];
        u[ul - 1] = null!;
        break;
      }
    }
  },
  update: function (this: void): boolean {
    return false;
  },
};

export default liveTooltip;

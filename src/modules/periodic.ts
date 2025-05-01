interface PeriodicTrigger {
  action: Act<boolean>;
  time: number;
  interval: number;
  active: boolean;
}

interface PeriodicManager {
  readonly _trig: PeriodicTrigger[];
  _timer: timer;
  _started: boolean;
  _cache: LuaMap<Act<boolean>, PeriodicTrigger>;
  add: (func: Act<boolean> | PeriodicTrigger, interval: number) => PeriodicTrigger;
  rem: (trigger: PeriodicTrigger) => void;
  update: (this: void) => void;
}

const enum PeriodicConstant {
  SYSTEM_INTERVAL = 0.03125,
}

const periodic: PeriodicManager = {
  _trig: [],
  _timer: null!,
  _started: false,
  _cache: new LuaMap(),
  /**
   *
   * @param func Return true to terminate the periodic action
   * @param interval The interval at which func run
   * @returns
   */
  add: function (func: Act<boolean> | PeriodicTrigger, interval) {
    if (!this._started) {
      this._timer = CreateTimer();
      this._started = true;
      TimerStart(this._timer, PeriodicConstant.SYSTEM_INTERVAL, true, this.update);
    }

    if (typeof func != "function") {
      func.active = true;
      const trig = this._trig;
      trig[trig.length] = func;
      return func;
    }

    if (this._cache.has(func)){
      const t = this._cache.get(func)!;
      t.interval = interval;
      t.time = 0;
      t.active = true;

      const trig = this._trig;
      trig[trig.length] = t;
      return t;
    }

    const trigger = {
      action: func,
      time: 0,
      interval: interval,
      active: true,
    };

    const trig = this._trig;
    trig[trig.length] = trigger;

    return trigger;
  },
  rem: function (trigger) {
    const trigs = this._trig;
    const tl = trigs.length;

    if (trigs[tl - 1] == trigger) {
      trigs[tl - 1] = null!;
      return;
    } else if (trigs[0] == trigger) {
      trigs[0] = trigs[tl - 1];
      trigs[tl - 1] = null!;
      return;
    }

    for (const i of $range(1, tl)) {
      if (trigs[i - 1] == trigger) {
        trigs[i - 1] = trigs[tl - 1]; // move last to this
        trigs[tl - 1] = null!;
        break;
      }
    }
  },
  update: function (this: void) {
    const trigs = periodic._trig;
    let tl = trigs.length;
    let i = 1;
    while (i < tl) {
      const trig = trigs[i - 1];
      i++;
      if (!trig.active) continue;

      trig.time += PeriodicConstant.SYSTEM_INTERVAL;
      if (trig.time < trig.interval) continue;

      while (trig.time >= trig.interval) {
        trig.time -= PeriodicConstant.SYSTEM_INTERVAL;
        if (trig.action()) {
          trig.active = false;
          trig.time = 0; // clear possibly accumulated time
          trigs[i - 1] = trigs[tl - 1];
          trigs[tl - 1] = null!;
          i--;
          tl--;
        }
      }
    }
  },
};

export default periodic;

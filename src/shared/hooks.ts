/** @noSelfInFile */

// declare let main: () => void;
// declare let config: () => void;
// declare let InitGlobal: () => void;
// declare let InitCustomTriggers: () => void;
// declare let RunInitializationTriggers: () => void;
// declare let MarkGameStarted: () => void;
type hookFunc = () => void;

const oldMain = main;
const oldConfig = config;
const oldGlobal = InitGlobal;
const oldTrig = InitCustomTriggers;
const oldInit = RunInitializationTriggers;
const oldStart = MarkGameStarted;
let __hooksTable: hookFunc[][] = [[], [], [], [], [], []];
let __errorStack: string[] = [];
let __printStack: string[] = [];
let __oldPrint = print;

//@ts-expect-error
print = function (this: void, ...args: any[]) {
  let str: string = "";
  for (let i = 0; i < args.length; i++) {
    str += tostring(args[i]);
  }
  __printStack.push(str);
};

//@ts-expect-error
main = function () {
  oldMain();
  let tbl = __hooksTable[4];
  for (let i = 0; i < tbl.length; i++) {
    const result = pcall(tbl[i]);

    if (!result[0]) __errorStack.push(result[1]);
  }

  let tmr = CreateTimer();
  TimerStart(tmr, 0, false, ()=>{
    let tbl = __hooksTable[3];
    for (let i = 0; i < tbl.length; i++) {
      const result = pcall(tbl[i]);

      if (!result[0]) __errorStack.push(result[1]);
    }

    //@ts-expect-error
    tbl = null;

    if (__errorStack.length > 0) {
      for (const i of $range(0, __errorStack.length)) {
        print(__errorStack[i]);
      }
    }

    // clean up
    //@ts-expect-error
    __errorStack = null;
    //@ts-expect-error
    __printStack = null;
    //@ts-expect-error
    __hooksTable = null;
    //@ts-expect-error
    __oldPrint = null;
  })
};
//@ts-expect-error
config = function () {
  oldConfig();
  let tbl = __hooksTable[5];
    for (let i = 0; i < tbl.length; i++) {
      const result = pcall(tbl[i]);

      if (!result[0]) __errorStack.push(result[1]);
    }
};
//@ts-expect-error
InitGlobal = function () {
  oldGlobal();
  let tbl = __hooksTable[0];
    for (let i = 0; i < tbl.length; i++) {
      const result = pcall(tbl[i]);

      if (!result[0]) __errorStack.push(result[1]);
    }
};
//@ts-expect-error
InitCustomTriggers = function () {
  oldTrig();
  let tbl = __hooksTable[1];
    for (let i = 0; i < tbl.length; i++) {
      const result = pcall(tbl[i]);

      if (!result[0]) __errorStack.push(result[1]);
    }
};
//@ts-expect-error
RunInitializationTriggers = function () {
  oldInit();
  let tbl = __hooksTable[2];
    for (let i = 0; i < tbl.length; i++) {
      const result = pcall(tbl[i]);

      if (!result[0]) __errorStack.push(result[1]);
    }
};


let hooks = {
  global: (func: hookFunc) => {
    __hooksTable[0].push(func);
  },

  trigger: (func: hookFunc) => {
    __hooksTable[1].push(func);
  },

  map: (func: hookFunc) => {
    __hooksTable[2].push(func);
  },

  final: (func: hookFunc) => {
    __hooksTable[3].push(func);
  },

  // for nerds
  main: (func: hookFunc) => {
    __hooksTable[4].push(func);
  },

  config: (func: hookFunc) => {
    __hooksTable[5].push(func);
  },
};

export default hooks;

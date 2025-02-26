/*
 * A Init helper
*/

declare let main: () => void;
declare let config: () => void;
declare let InitGlobal: () => void;
declare let InitCustomTriggers: () => void;
declare let RunInitializationTriggers: () => void;
declare let MarkGameStarted: () => void;
type hookFunc = () => void;

const oldMain = main;
const oldConfig = config;
const oldGlobal = InitGlobal;
const oldTrig = InitCustomTriggers;
const oldInit = RunInitializationTriggers;
const oldStart = MarkGameStarted;
const hooksTable: hookFunc[][] = [[],[],[],[],[],[],[],[]];
const errorStack: string[] = [];
//const printStack: string[] = [];
//const oldPrint = print;

/*
print = function(...args: any[]){
	let str: string = "";
	for (let i = 0; i < args.length; i++){
		str += args[i].toString();
	}
	printStack.push(str);
}
*/

function safeRun(tbl: hookFunc[]){
  for (let i = 0; i < tbl.length; i++){
    const result = pcall(tbl[i]);

    if (!result[0]) errorStack.push(result[1]);
  }
}

main = function(){
  safeRun(hooksTable[4])
  oldMain()
  safeRun(hooksTable[5])
}

config = function(){
  safeRun(hooksTable[6])
  oldConfig();
  safeRun(hooksTable[7])
}

InitGlobal = function(){
  oldGlobal();
  safeRun(hooksTable[0])
}

InitCustomTriggers = function(){
  oldTrig();
  safeRun(hooksTable[1])
}

RunInitializationTriggers = function(){
  oldInit();
  safeRun(hooksTable[2])
}

MarkGameStarted = function(){
  //print = oldPrint;

  oldStart();
  safeRun(hooksTable[3]);
  /*if (printStack.length > 0){
	for (let i = 0; i  < printStack.length; i++){
		print(printStack[i]);
	}
  }*/
  if (errorStack.length > 0){
    for (let i = 0; i < errorStack.length; i++){
      print(errorStack[i]);
    }
  }
}


export function global(func: hookFunc){
  hooksTable[0].push(func);
}

export function trigger(func: hookFunc){
  hooksTable[1].push(func);
}

export function map(func: hookFunc){
  hooksTable[2].push(func);
}

export function final(func: hookFunc){
  hooksTable[3].push(func);
}

// for nerds

export function mainBefore(func: hookFunc){
  hooksTable[4].push(func)
}

export function mainAfter(func: hookFunc){
  hooksTable[5].push(func)
}

export function configBefore(func: hookFunc){
  hooksTable[6].push(func);
}

export function configAfter(func: hookFunc){
  hooksTable[7].push(func);
}

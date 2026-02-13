type ReqFunc = (reqName: string, source?: LuaTable) => unknown;

type TIRequire = {
  /**
   * Using this call will require the given reqName to exists for this to run
   */
  strict: ReqFunc;
  /**
   * Work like Require.strict, but will run even if reqName does not exist
   */
  optional: ReqFunc;
  optionally: ReqFunc;
  [key: string]: ReqFunc;
}

type TIInit = (req: TIRequire)=>void;

type TIMethod = (libraryName: string, initCallback: TIInit)=>void;

type TotalInitialization = {
  global: TIMethod;
  library: TIMethod;
  module: TIMethod;
  trig: TIMethod;
  map: TIMethod;
  final: TIMethod;
  main: TIMethod;
  root: TIMethod;
  config: TIMethod;
}



declare const Require: TIRequire;
declare const OnInit: TotalInitialization;

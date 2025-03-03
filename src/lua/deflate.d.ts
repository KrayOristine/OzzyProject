
type LibDeflate = {
  InitCompressor: ()=>void;
  DecompressDeflate: (str: string)=> LuaMultiReturn<string, number>;
  CompressDeflate: (str: string)=> LuaMultiReturn<string, number>;
};



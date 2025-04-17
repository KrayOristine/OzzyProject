type HookTree = {
  [index: number]: HookProperty;
};

type HookProperty = {
  next: HookProperty | function;
  remove: (all?: boolean) => void;
  index: number;
  priority: number;
  tree: HookTree;
  hookAsBasicFn: function;
};

type HookObject = {
  add<T extends (hook: HookObject) => any>(
    key: string | Function,
    callbackFn: T,
    priority?: number,
    hostTableToHook?: LuaTable,
    defaultNativeBehavior?: () => any,
    hookedTableIsMetatable?: boolean,
    hookAsBasicFn?: boolean
  ): HookProperty;
  basic<T extends (hook: HookObject) => any>(
    key: string | Function,
    callbackFn: T,
    priority?: number,
    hostTableToHook?: LuaTable,
    defaultNativeBehavior?: () => any,
    hookedTableIsMetatable?: boolean
  ): HookProperty;

  delete: (prop: HookProperty, deleteAllHooks?: boolean) => void;

  [index: number]: HookProperty;
};

declare const Hook: HookObject;

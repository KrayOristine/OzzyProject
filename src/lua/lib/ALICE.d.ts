/**
 * @noSelfInFile
 */

declare type ALICEPair = {
  destructionQueued: boolean;
  userData: LuaTable;
  hadContact: boolean;
  cooldown: number;
  paused: boolean;
};

declare type ALICEActor = {
  isActor: boolean;
  host: ALICEObject;
  anchor: ALICEObject;
  originalAnchor: ALICEObject;
  getOwner: () => player;
  interactions: LuaTable | function | null;
  selfInteractions: LuaTable;
  identifier: ALICEIdentifier;
  visualizer: effect;
  alreadyDestroyed: boolean;
  causedCrash: boolean;
  isSuspended: boolean;
  identifierClass: string;
  interactionsClass: string;
  references: LuaTable;
  periodicPair: Pair;
  firstPair: LuaTable;
  lastPair: LuaTable;
  nextPair: LuaTable;
  previousPair: LuaTable;
  x: LuaTable;
  y: LuaTable;
  z: LuaTable;
  lastX: number;
  lastY: number;
  zOffset: number;
  priority: number;
  index: number;
  isStationary: boolean;
  unique: number;
  bindToBuff: string | null;
  persistOnDeath: boolean;
  unit: unit | null;
  waitingForBuff: boolean;
  bindToOrder: number | null;
  onDestroy: functio | null;
  isUnselectable: boolean;
  isAnonymous: boolean;
  isGlobal: boolean;
  usesCells: boolean;
  halfWidth: number;
  halfHeight: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  cellCheckInterval: number;
  nextCellCheck: number;
  positionInCellCheck: number;
  isInCell: Actor[];
  nextInCell: Actor[];
  previousInCell: Actor[];
  cellsVisualized: boolean;
  cellVisualizers: lightning[];
};

declare type ALICECell = {
  horizontalLightning: lightning;
  verticalLightning: lightning;
  first: Actor;
  last: Actor;
  numActors: numbe;
};

type ALICEObject = ALICEActor | LuaTable | destructable | unit | item;
type ALICEIdentifier = string | string[];
type ALICEFlags = {
  actorClass: ALICEObject;
  anchor: ALICEObject;
  zOffset: number;
  isStationary: boolean;
  isAnonymous: boolean;
  isGlobal: boolean;
  hasInfiniteRange: boolean;
  priority: number;
  selfInteractions: ALICEObject;
  width: number;
  height: number;
  radius: number;
  cellCheckInterval: number;
  persistOnDeath: boolean;
  bindToBuff: string | number;
  bindToOrder: string | number;
  isUnselectable: boolean;
};

type ALICEDelayedCallback<T extends () => any> = {
  callCounter: number;
  callback: T;
  args: LuaTable;
  unpack: boolean;
};

type ALICEPairDelayedCallback<T extends () => any> = {
  callCounter: number;
  callback: T;
  hostA: LuaTable;
  hostB: LuaTable;
  pair: ALICEPair;
};

type ALICEPeriodicCallback<T extends () => any> = {
  callback: T;
  excess: number;
  isPeriodic: true;
};

type ALICERepeatedCallback<T extends () => any> = {
  callback: T;
  howOften: number;
  currentExecution: number;
  excess: number;
  isPeriodic: true;
};

type ALICECondition = (host: ALICEObject, ...other) => boolean;

type ALICEOnWidgetTable<T extends () => any> = {
  onUnitEnter: T;
  onUnitDeath: T;
  onUnitRevive: T;
  onUnitRemove: T;
  onUnitChangeOwner: T;
  onDestructableEnter: T;
  onDestructableDestroy: T;
  onItemEnter: T;
  onItemDestroy: T;
};

//@ baseline

declare function ALICE_Create(
  host: ALICEObject,
  identifier?: ALICEIdentifier,
  interaction?: { [key: string]: function },
  flags?: ALICEFlags
): ALICEActor;
declare function ALICE_Destroy(object: ALICEObject, keyword?: string);
declare function ALICE_Kill(object: ALICEObject);

//@ coordination

declare function ALICE_PairGetDistance2D(): number;
declare function ALICE_PairGetDistance3D(): number;
declare function ALICE_PairGetAngle2D(): number;
declare function ALICE_PairGetAngle3D(): number;
declare function ALICE_PairGetCoordinates2D(): LuaMultiReturn<number, number, number, number>;
declare function ALICE_PairGetCoordinates3D(): LuaMultiReturn<number, number, number, number, number, number>;

declare function ALICE_GetCoordinates2D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number>;
declare function ALICE_GetCoordinates3D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number, number>;

//@ delayed/periodic/repeated callback

declare function ALICE_CallDelayed<T extends () => any>(
  callback: T,
  delay?: number,
  ...callbackArgs
): ALICEDelayedCallback<T>;
declare function ALICE_PairCallDelayed<T extends () => any>(callback: T, delay?: number): ALICEPairDelayedCallback<T>;
declare function ALICE_CallPeriodic<T extends () => any>(
  callback: T,
  delay?: number,
  ...callbackArgs
): ALICEPeriodicCallback<T>;
declare function ALICE_CallRepeated<T extends () => any>(
  callback: T,
  howOften: number,
  delay?: number,
  ...callbackArgs
): ALICERepeatedCallback<T>;
declare function ALICE_DisableCallback<
  T extends ALICEDelayedCallback | ALICEPairDelayedCallback | ALICEPeriodicCallback | ALICERepeatedCallback
>(callback?: T): boolean;
declare function ALICE_PauseCallback<
  T extends ALICEDelayedCallback | ALICEPairDelayedCallback | ALICEPeriodicCallback | ALICERepeatedCallback
>(callback?: T, enable?: boolean);

//@ enumeration

declare function ALICE_EnumObjects(identifier: ALICEIdentifier, condition: ALICECondition, ...args): ALICEObject[];
declare function ALICE_EnumObjectsInRange(
  x: number,
  y: number,
  range: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
): ALICEObject[];
declare function ALICE_EnumObjectsInRect(
  minx: number,
  miny: number,
  maxx: number,
  maxy: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
): ALICEObject[];
declare function ALICE_EnumObjectsInLineSegment(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  halfWidth: number,
  condition?: ALICECondition,
  ...args
): ALICEObject[];

declare function ALICE_ForAllObjectsDo(
  action: () => void,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
);
declare function ALICE_ForAllObjectsInRangeDo(
  action: () => void,
  x: number,
  y: number,
  range: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
);
declare function ALICE_ForAllObjectsInRectDo(
  action: () => void,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
);
declare function ALICE_ForAllObjectsInLineSegmentDo(
  action: () => void,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  halfWidth: number,
  condition?: ALICECondition,
  ...args
);
declare function ALICE_GetClosestObject(
  x: number,
  y: number,
  identifier: ALICEIdentifier,
  cutOffDistance: number,
  condition?: ALICECondition,
  ...args
): ALICEObject[];

//@ pair utils

declare function ALICE_PairIsFriend(): boolean;
declare function ALICE_PairIsEnemy(): boolean;
declare function ALICE_PairSetInteractionFunc<T extends () => any>(selfInteraction: T);
declare function ALICE_PairDisable();
declare function ALICE_PairPreciseInterval(interval: number): number;
declare function ALICE_PairIsUnoccupied();
declare function ALICE_PairCooldown(duration: number, type?: string): number;
declare function ALICE_PairLoadData(whichMetatable: LuaTable): LuaTable;
declare function ALICE_PairIsFirstContact(): boolean;
declare function ALICE_FuncSetInit<T extends () => any, D extends () => any>(which: T, onInit: D);
declare function ALICE_FuncSetOnDestroy<T extends () => any, D extends () => any>(which: T, onDestroy: D);
declare function ALICE_FuncSetOnBreak<T extends () => any, D extends () => any>(which: T, onBreak: D);
declare function ALICE_FuncSetOnReset<T extends () => any, D extends () => any>(which: T, onReset: D);
declare function ALICE_PairReset();
declare function ALICE_PairInterpolate();

//@ widget utils
declare function ALICE_IncludeTypes(...codes: (number | string)[]);
declare function ALICE_ExcludeTypes(...codes: (number | string)[]);

declare function ALICE_OnWidgetEvent<T extends () => any>(hook: ALICEOnWidgetTable<T>);
declare function ALICE_AddIdentifier(object: ALICEObject, newIdentifier: ALICEIdentifier, keyword?: string);
declare function ALICE_RemoveIdentifier(object: ALICEObject, toRemove: ALICEIdentifier, keyword?: string);
declare function ALICE_SwapIdentifier(
  object: ALICEObject,
  oldIdentifier: ALICEIdentifier,
  newIdentifier: ALICEIdentifier,
  keyword?: string
);
declare function ALICE_SetIdentifier(object: ALICEObject, newIdentifier: ALICEIdentifier, keyword?: string);
declare function ALICE_HasIdentifier(object: ALICEObject, identifier: ALICEIdentifier, keyword?: string);
declare function ALICE_GetIdentifier(object: ALICEObject, keyword?: string, result: ALICEIdentifier[]);
declare function ALICE_FindIdentifier(object: ALICEObject, ...args: string[]): ?string;
declare function ALICE_FindField(table: LuaTable|ALICEActor, object: ALICEObject, keyword: string): any;

//@ interaction api

declare const ALICE_Where:
  | "outsideofcycle"
  | "precleanup"
  | "postcleanup"
  | "callbacks"
  | "everystep"
  | "cellcheck"
  | "variablestep";
declare const ALICE_TimeElapsed: number;
declare const ALICE_CPULoad: number;

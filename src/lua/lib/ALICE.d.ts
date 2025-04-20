/**
 * @noSelfInFile
 */

interface ALICEPair {
  destructionQueued: boolean;
  userData: LuaTable;
  hadContact: boolean;
  cooldown: number;
  paused: boolean;
};

interface ALICEActor {
  isActor: boolean;
  host: ALICEObject;
  anchor: ALICEObject;
  originalAnchor: ALICEObject;
  getOwner: () => player;
  interactions: Map<string, Act> | Act | null;
  selfInteractions: Map<string, Act>;
  identifier: Set<string>;
  visualizer: effect;
  alreadyDestroyed: boolean;
  causedCrash: boolean;
  isSuspended: boolean;
  identifierClass: string;
  interactionsClass: string;
  references: unknown[];
  periodicPair: ALICEPair;
  firstPair: ALICEPair;
  lastPair: ALICEPair;
  nextPair: Map<ALICEPair, ALICEPair>;
  previousPair: Map<ALICEPair, ALICEPair>;
  x: number[];
  y: number[];
  z: number[];
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

declare interface ALICECell {
  horizontalLightning: lightning;
  verticalLightning: lightning;
  first: Actor;
  last: Actor;
  numActors: number;
};

type ALICEObject = ALICEHostTable | destructable | unit | item;
interface ALICEHostTable extends ALICEFlags {
  x:number,y:number,z?: number;
  owner: player,
  visual?: effect,
  identifier: ALICEIdentifier,
}

type ALICEIdentifier = string | string[];
interface ALICEFlags {
  actorClass?: ALICEObject;
  anchor?: ALICEObject;
  zOffset?: number;
  isStationary?: boolean;
  isAnonymous?: boolean;
  isGlobal?: boolean;
  hasInfiniteRange?: boolean;
  priority?: number;
  selfInteractions?: ALICEObject;
  width?: number;
  height?: number;
  radius?: number;
  onActorDestroy?: Fn;
  cellCheckInterval?: number;
  persistOnDeath?: boolean;
  bindToBuff?: string | number;
  bindToOrder?: string | number;
  isUnselectable?: boolean;
};

interface ALICEOverwritableFlags {
  cellCheckInterval?: number;
  hasInfiniteRange?: boolean;
  isStationary?: boolean;
  isUnselectable?: boolean;
  onActorDestroy?: Fn;
  persistOnDeath?: boolean;
  priority?: number;
  radius?: number;
  zOffset?: number;
};

interface ALICEDelayedCallback<T extends any, P extends any[]> {
  callCounter: number;
  callback: Fn<P, T>;
  args: P;
  unpack: boolean;
};

interface ALICEPairDelayedCallback<T extends any> {
  callCounter: number;
  callback: Act<T>;
  hostA: ALICEPair;
  hostB: ALICEPair;
  pair: ALICEPair;
};

interface ALICEPeriodicCallback<T extends any> {
  callback: Act<T>;
  excess: number;
  isPeriodic: true;
};

interface ALICERepeatedCallback<T extends any> {
  callback: Act<T>;
  howOften: number;
  currentExecution: number;
  excess: number;
  isPeriodic: true;
};

type ALICECondition = (host: ALICEObject, ...other) => boolean;

interface ALICEOnWidgetTable<T extends Act<any>> {
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
declare function ALICE_Create<T extends ALICEObject>(
  host: T,
  identifier?: ALICEIdentifier,
  interaction?: { [key: string]: Act },
  flags?: ALICEFlags
): T;
declare function ALICE_Destroy(object: ALICEObject, keyword?: string): void;
declare function ALICE_Kill(object: ALICEObject): void;

//@ coordination utils
declare function ALICE_PairGetDistance2D(): number;
declare function ALICE_PairGetDistance3D(): number;
declare function ALICE_PairGetAngle2D(): number;
declare function ALICE_PairGetAngle3D(): number;
declare function ALICE_PairGetCoordinates2D(): LuaMultiReturn<number, number, number, number>;
declare function ALICE_PairGetCoordinates3D(): LuaMultiReturn<number, number, number, number, number, number>;
declare function ALICE_GetCoordinates2D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number>;
declare function ALICE_GetCoordinates3D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number, number>;

//@ delayed/periodic/repeated callback utils
declare function ALICE_CallDelayed<P extends any[] = never[], T extends any = void>(
  callback: Fn<P, T>,
  delay?: number,
  ...callbackArgs: P
): ALICEDelayedCallback<T, P>;
declare function ALICE_PairCallDelayed<T extends Act<any>>(callback: T, delay?: number): ALICEPairDelayedCallback<T>;
declare function ALICE_CallPeriodic<T extends Act<any>>(
  callback: T,
  delay?: number,
  ...callbackArgs
): ALICEPeriodicCallback<T>;
declare function ALICE_CallRepeated<T extends Act<any>>(
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
>(callback?: T, enable?: boolean): void;

//@ enumeration utils
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
): ALICEObject[];
declare function ALICE_ForAllObjectsInRangeDo(
  action: () => void,
  x: number,
  y: number,
  range: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
): ALICEObject[];
declare function ALICE_ForAllObjectsInRectDo(
  action: () => void,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number,
  identifier: ALICEIdentifier,
  condition?: ALICECondition,
  ...args
): ALICEObject[];
declare function ALICE_ForAllObjectsInLineSegmentDo(
  action: () => void,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  halfWidth: number,
  condition?: ALICECondition,
  ...args
): ALICEObject[];
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
declare function ALICE_PairSetInteractionFunc<T extends Act<any>>(selfInteraction: T): void;
declare function ALICE_PairDisable(): void;
declare function ALICE_PairPreciseInterval(interval: number): number;
declare function ALICE_PairIsUnoccupied(): void;
declare function ALICE_PairCooldown(duration: number, type?: string): number;
declare function ALICE_PairLoadData(whichMetatable: LuaTable): LuaTable;
declare function ALICE_PairIsFirstContact(): boolean;
declare function ALICE_FuncSetInit<T extends Act<any>, D extends Act<any>>(which: T, onInit: D): void;
declare function ALICE_FuncSetOnDestroy<T extends Act<any>, D extends Act<any>>(which: T, onDestroy: D): void;
declare function ALICE_FuncSetOnBreak<T extends Act<any>, D extends Act<any>>(which: T, onBreak: D): void;
declare function ALICE_FuncSetOnReset<T extends Act<any>, D extends Act<any>>(which: T, onReset: D): void;
declare function ALICE_PairReset(): void;
declare function ALICE_PairInterpolate(): void;
declare function ALICE_PairPause(): void;

//@ widget utils
declare function ALICE_IncludeTypes(...codes: (number | string)[]): void;
declare function ALICE_ExcludeTypes(...codes: (number | string)[]): void;
declare function ALICE_OnWidgetEvent<T extends Act<any>>(hook: ALICEOnWidgetTable<T>): void;

//@ identifier api
declare function ALICE_AddIdentifier(object: ALICEObject, newIdentifier: ALICEIdentifier, keyword?: string): void;
declare function ALICE_RemoveIdentifier(object: ALICEObject, toRemove: ALICEIdentifier, keyword?: string): void;
declare function ALICE_SwapIdentifier(
  object: ALICEObject,
  oldIdentifier: ALICEIdentifier,
  newIdentifier: ALICEIdentifier,
  keyword?: string
): void;
declare function ALICE_SetIdentifier(object: ALICEObject, newIdentifier: ALICEIdentifier, keyword?: string);
declare function ALICE_HasIdentifier(object: ALICEObject, identifier: ALICEIdentifier, keyword?: string): boolean;
declare function ALICE_GetIdentifier(object: ALICEObject, keyword?: string, result?: ALICEIdentifier): ALICEIdentifier;
declare function ALICE_FindIdentifier(object: ALICEObject, ...args: string[]): ?string;
declare function ALICE_FindField(table: LuaTable | ALICEActor, object: ALICEObject, keyword: string): any;

//@ interaction api
declare function ALICE_SetInteractionFunc(
  object: ALICEObject,
  target: ALICEIdentifier,
  newAct: Act | null,
  keyword?: string
): void;
declare function ALICE_AddSelfInteraction(object: ALICEObject, whichAct: Act, keyword?: string, data?: LuaTable): void;
declare function ALICE_RemoveSelfInteraction(object: ALICEObject, whichAct: Act, keyword?: string): void;
declare function ALICE_HasSelfInteraction(object: ALICEObject, whichAct: Act, keyword?: string): boolean;

//@ misc api
declare function ALICE_FuncSetDelay(whichAct: Act, delay?: number): void;
declare function ALICE_FuncSetUnbreakable(whichAct: Act): void;
declare function ALICE_FuncSetUnsuspendable(whichAct: Act): void;
declare function ALICE_FuncPauseOnStationary(whichAct: Act): void;
declare function ALICE_HasActor(object: ALICEObject, identifier: ALICEIdentifier, strict: boolean): boolean;
declare function ALICE_GetAnchor(object: ALICEObject): ?ALICEObject;
declare function ALICE_GetFlag<F extends keyof ALICEFlags>(
  object: ALICEObject,
  whichFlag: F,
  keyword?: string
): ALICEFlags[F];
declare function ALICE_SetFlag<F extends keyof ALICEFlags>(object: ALICEObject, whichFlag: F, v: ALICEFlags[F]): void;
declare function ALICE_GetAnchoredObject(object: ALICEObject, identifier: ALICEIdentifier): ?ALICEIdentifier;
declare function ALICE_GetOwner(object: ALICEObject, keyword?: string): player;

//@ pair api
declare function ALICE_Enable(
  objectA: ALICEObject,
  objectB: ALICEObject,
  keywordA?: string,
  keywordB?: string
): LuaMultiReturn<[boolean, boolean]>;
declare function ALICE_AccessData(
  objectA: ALICEObject,
  objectB: ALICEObject | Act,
  keywordA?: string,
  keywordB?: string
): ?LuaTable;
declare function ALICE_UnpausePair(
  objectA: ALICEObject,
  objectB: ALICEObject | Act,
  keywordA?: string,
  keywordB?: string
): void;
declare function ALICE_GetPairAndDo<T extends any = void, P extends any[]>(
  action: Fn<P, T>,
  objectA: ALICEObject,
  objectB: ALICEObject | Act,
  keywordA?: string,
  keywordB?: string,
  ...param: P
): T;
declare function ALICE_ForAllPairsDo<T extends any = void, P extends any[]>(
  action: Fn<P, T>,
  object: ALICEObject,
  whichFn: Act,
  includeInteractive?: boolean,
  keywordB?: string,
  ...param: P
): void;

//@ optimize api
declare function ALICE_Unpause(object: ALICEObject, whichFn: Fn, keyword?: string): void;
declare function ALICE_SetStationary(object: ALICEObject, enable?: boolean): void;
declare function ALICE_IsStationary(object: ALICEObject): boolean;
declare function ALICE_FuncDistribute(whichFn: Fn, interval: number): void;
declare function ALICE_OnCreation(matchingIdentifier: string, whichFn: Fn): void;
declare function ALICE_OnCreationAddFlag<F extends keyof ALICEOverwritableFlags>(
  matchingIdentifier: string,
  flag: F,
  value: ALICEOverwritableFlags[F]
): void;
declare function ALICE_OnCreationAddIdentifier(
  matchingIdentifier: string,
  identifier: ALICEIdentifier | Act<ALICEIdentifier>
): void;
declare function ALICE_OnCreationAddInteraction(
  matchingIdentifier: string,
  keyword: ALICEIdentifier,
  whichFn: Act
): void;
declare function ALICE_OnCreationAddSelfInteraction(matchingIdentifier: string, selfInteraction: Act): void;

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

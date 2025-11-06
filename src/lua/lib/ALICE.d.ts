/**
 * @noSelfInFile
 */

// defined from ALICE 2.11.2
// definition version 1.5

interface ALICEPair {
  destructionQueued: boolean;
  userData: LuaTable;
  hadContact: boolean;
  cooldown: number;
  paused: boolean;
}

type ALICEPairState = "paused" | "active" | "outofrange" | "disabled" | "uninitialized";

type InteractionFn<T> = Fn<[ALICEObject, T],void>;

declare interface ALICEInteraction {
  self?: Fn<[ALICEObject],void>[];
  unit?: InteractionFn<unit> | InteractionFn<unit>[];
  item?: InteractionFn<item> | InteractionFn<item>[];
  effect?: InteractionFn<effect> | InteractionFn<effect>[];
  widget?: InteractionFn<widget> | InteractionFn<widget>[];
  destructable?: InteractionFn<destructable> | InteractionFn<destructable>[];
  player?: InteractionFn<player> | InteractionFn<player>[];
  [key: string]: InteractionFn<any> | InteractionFn<any>[];
}

type ALICEObject = ALICEHostTable | destructable | unit | item;
declare interface ALICEHostTable extends ALICEFlags {
  x: number;
  y: number;
  z?: number;
  owner: player;
  visual?: effect;
  identifier?: ALICEIdentifier;
  interactions?: ALICEInteraction;
}

type ALICEIdentifier = string | string[];
type ALICEEnumIdentifier = ALICEIdentifier | (string | ALICEMatchingType)[];
interface ALICEFlags {
  actorClass?: ALICEObject;
  anchor?: ALICEObject;
  zOffset?: number;
  isStationary?: boolean;
  isAnonymous?: boolean;
  isGlobal?: boolean;
  hasInfiniteRange?: boolean;
  priority?: number;
  selfInteractions?: ALICEInteraction;
  width?: number;
  height?: number;
  radius?: number;
  onActorDestroy?: Fn;
  cellCheckInterval?: number;
  persistOnDeath?: boolean;
  bindToBuff?: string | number;
  bindToOrder?: string | number;
  isUnselectable?: boolean;
}

interface ALICEOverwritableFlags {
  isUnselectable?: boolean;
  isStationary?: boolean;
  isAnonymous?: boolean;
  isGlobal?: boolean;
  anchor?: ALICEObject;
  bindToBuff?: string | number;
  bindToOrder?: string | number;
  actorClass?: ALICEObject;
  cellCheckInterval?: number;
  hasInfiniteRange?: boolean;
  isStationary?: boolean;
  isUnselectable?: boolean;
  onActorDestroy?: Fn<[ALICEHostTable],void>;
  persistOnDeath?: boolean;
  priority?: number;
  width?: number;
  height?: number;
  radius?: number;
  zOffset?: number;
}

interface ALICECallback {
  callback: ()=>void;
}

interface ALICEDelayedCallback<T extends any=any, P extends readonly any[]> extends ALICECallback {
  callCounter: number;
  callback: Fn<P, T>;
  args: P;
  unpack: boolean;
}

interface ALICEPairDelayedCallback<T extends any=any> extends ALICECallback {
  callCounter: number;
  callback: Act<T>;
  hostA: ALICEPair;
  hostB: ALICEPair;
  pair: ALICEPair;
}

interface ALICEPeriodicCallback<T extends any=any> extends ALICECallback {
  callback: Act<T>;
  excess: number;
  isPeriodic: true;
}

interface ALICERepeatedCallback<T extends any=any> extends ALICECallback {
  callback: Act<T>;
  howOften: number;
  currentExecution: number;
  excess: number;
  isPeriodic: true;
}

interface ALICEOnWidgetTable<T extends Act<any>> {
  onUnitEnter?: T;
  onUnitDeath?: T;
  onUnitRevive?: T;
  onUnitRemove?: T;
  onUnitChangeOwner?: T;
  onDestructableEnter?: T;
  onDestructableDestroy?: T;
  onItemEnter?: T;
  onItemDestroy?: T;
}

type ALICEConfig = {
  /**
   * Minimum interval between interactions in seconds. Sets the time step of the timer. All interaction intervals are an integer multiple of this value.
   */
  MIN_INTERVAL: number;
  /**
   * Print out warnings, errors, and enable the "downtherabbithole" cheat code for the players with these names. #XXXX not required.
   */
  MAP_CREATORS: string[];
  /**
   * Calls all interaction functions in protected mode, so that the main cycle is not interrupted on an error. Each unique error will be printed only once to the
      map creator. This is recommended for playtest versions which are not fully stable yet.
   */
  PROTECTED_MODE: boolean;
  /**
   * An option that is available if PROTECTED_MODE is also activated.
   *
   * If enabled, ALICE will write the next executed callback or interaction function into the file
   * ALICE\ALICECrashDump.txt giving you information about which function causes a crash.
   *
   * Functions need to be global or named with ALICE_FuncSetName to get any
   * meaningful information from the dump
   *
   * "once"        Will test every function once, then ignore it on subsequent calls.
   *
   * "full"        Will test every function on each call. Will MASSIVELY slow down the game.
   */
  CRASH_DUMP: false | "once" | "full";
  /**
   * Which hotkeys are used for cycling selection in debug mode. The key combo is Ctrl + the specified hotkey.
   */
  CYCLE_SELECTION_HOTKEY: string;
  /**
   * Which hotkeys are used for lock selection in debug mode. The key combo is Ctrl + the specified hotkey.
   */
  LOCK_SELECTION_HOTKEY: string;
  /**
   * Which hotkeys are used for the step to next frame in debug mode. The key combo is Ctrl + the specified hotkey.
   */
  NEXT_STEP_HOTKEY: string;
  /**
   * Which hotkeys are used for halting the cycle in debug mode. The key combo is Ctrl + the specified hotkey.
   */
  HALT_CYCLE_HOTKEY: string;
  /**
   * Which hotkeys are used for printing the function name in debug mode. The key combo is Ctrl + the specified hotkey.
   */
  PRINT_FUNCTION_NAMES_HOTKEY: string;
  /**
   * Maximum interval between interactions in seconds.
   */
  MAX_INTERVAL: number;
  /**
   * This interval is used by a second, faster timer that can be used to update visual effects at a faster rate than the MIN_INTERVAL with ALICE_PairInterpolate.
      Set to nil to disable.
   */
  INTERPOLATION_INTERVAL: number;
  /**
   * The playable map area is divided into cells of this size. Objects only interact with other objects that share a cell with them. Smaller cells increase the
    efficiency of interactions at the cost of increased memory usage and overhead.
   */
  CELL_SIZE: number;
  /**
   * How often the system checks if objects left their current cell. Should be overwritten with the cellCheckInterval flag for fast-moving objects.
   */
  DEFAULT_CELL_CHECK_INTERVAL: number;
  /**
   * How large an actor is when it comes to determining in which cells it is in and its maximum interaction range. Should be overwritten with the radius flag for
    objects with a larger interaction range.
   */
  DEFAULT_OBJECT_RADIUS: number;
  /**
   * Function that will replace ALICE internal table recycler
   */
  TABLE_RECYCLER_GET: () => LuaTable;
  /**
   * Function that will replace ALICE internal table recycler
   */
  TABLE_RECYCLER_RETURN: (whichTable: LuaTable) => void;
  /**
   * Determine whether or not unit will automatically receive actors and be registered with ALICE. The created actors are passive and only receive pairs. You can
    add exceptions with ALICE_IncludeType and ALICE_ExcludeType.
   */
  NO_UNIT_ACTOR: boolean;
  /**
   * Determine whether or not destructable will automatically receive actors and be registered with ALICE. The created actors are passive and only receive pairs. You can
    add exceptions with ALICE_IncludeType and ALICE_ExcludeType.
   */
  NO_DESTRUCTABLE_ACTOR: boolean;
  /**
   * Determine whether or not item will automatically receive actors and be registered with ALICE. The created actors are passive and only receive pairs. You can
      add exceptions with ALICE_IncludeType and ALICE_ExcludeType.
   */
  NO_ITEM_ACTOR: boolean;
  /**
   * Add widget names (converted to camelCase) as identifiers to widget actors. Note that the names of widgets are localized and you risk a desync if you reference
    a widget by name unless it's a custom name.
   */
  ADD_WIDGET_NAMES: boolean;
  /**
   * Whether to destroy unit actors on death or not. Units will not regain an actor when revived if disabled.
   */
  UNITS_LEAVE_BEHIND_CORPSES: boolean;
  /**
   * Disable if corpses are relevant and you're moving them around.
   */
  UNIT_CORPSES_ARE_STATIONARY: boolean;
  /**
   * Add identifiers such as "hero" or "mechanical" to units if they have the corresponding classification and "nonhero", "nonmechanical" etc. if they do not.
    The identifiers will not get updated automatically when a unit gains or loses classifications and you must update them manually with ALICE_SwapIdentifier.
   */
  UNIT_ADDED_CLASSIFICATIONS: unittype[];
  /**
   * Default radius for unit, set to null to use default object radius
   * @see DEFAULT_OBJECT_RADIUS
   */
  DEFAULT_UNIT_RADIUS: number | null | undefined;
  /**
   * Default radius for destructable, set to null to use default object radius
   * @see DEFAULT_OBJECT_RADIUS
   */
  DEFAULT_DESTRUCTABLE_RADIUS: number | null | undefined;
  /**
   * Default radius for item, set to null to use default object radius
   * @see DEFAULT_OBJECT_RADIUS
   */
  DEFAULT_ITEM_RADIUS: number | null | undefined;
  /**
   * Disable if items are relevant and you're moving them around.
   */
  ITEMS_ARE_STATIONARY: boolean;
};

//@ baseline
/**
 * Create an actor for the object host and add it to the cycle. If the host is a table and is
provided as the only input argument, all other arguments will be retrieved directly from
that table.
 */
declare function ALICE_Create<T extends ALICEObject>(
  host: T,
  identifier?: ALICEIdentifier,
  interaction?: { [key: string]: Act },
  flags?: ALICEFlags
): T;
/**
 * Destroy the actor of the specified object.
 */
declare function ALICE_Destroy(object: ALICEObject, keyword?: string): void;
/**
 * Calls the appropriate function to destroy the object, then destroys all actors attached to
 * it. If the object is a table, the object:destroy() method will be called. If no destroy
 * function exists, it will try to destroy the table's visual, which can be an effect, a unit,
 * or an image.
 */
declare function ALICE_Kill(object: ALICEObject): void;


//@ coordination utils
/**
 * Returns the distance between the objects of the pair currently being evaluated in two dimensions. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetDistance2D(): number;
/**
 * Returns the distance between the objects of the pair currently being evaluated in three dimensions. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetDistance3D(): number;
/**
 * Returns the angle from object A to object B of the pair currently being evaluated. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetAngle2D(): number;
/**
 * Returns the horizontal and vertical angles from object A to object B of the pair currently being evaluated. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetAngle3D(): number;
/**
 * Returns the coordinates of the objects in the pair currently being evaluated in the order x1, y1, x2, y2. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetCoordinates2D(): LuaMultiReturn<number, number, number, number>;
/**
 * Returns the coordinates of the objects in the pair currently being evaluated in the order x1, y1, z1, x2, y2, z2. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_PairGetCoordinates3D(): LuaMultiReturn<number, number, number, number, number, number>;
/**
 * Returns the coordinates x, y of an object. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_GetCoordinates2D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number>;
/**
 * Returns the coordinates x, y, z of an object. This function uses cached values and may not be accurate if immediately called after changing an object's location.
 */
declare function ALICE_GetCoordinates3D(object: ALICEObject, keyword?: string): LuaMultiReturn<number, number, number>;

//@ delayed/periodic/repeated callback utils
/**
 * Invokes the callback function after the specified delay, passing additional arguments into the callback function.
 */
declare function ALICE_CallDelayed<P extends any[] = never[], T extends any = void>(
  callback: Fn<P, T>,
  delay?: number,
  ...callbackArgs: P
): ALICEDelayedCallback<T, P>;
/**
 * Invokes the callback function after the specified delay, passing the hosts of the current pair as arguments.
 *
 * A third parameter is passed into the callback, specifying whether you have access to the ALICE_Pair functions.
 *
 * You will not if the current pair has been destroyed after the callback was queued up.
 * @param callback
 * @param delay
 */
declare function ALICE_PairCallDelayed<T extends Act<any>>(callback: T, delay?: number): ALICEPairDelayedCallback<T>;
/**
 * Periodically invokes the callback function.
 * Optional delay parameter to delay the first execution. Additional arguments are passed into the callback function.
 * The return value of the callback function specifies the interval until next execution.
 * @param callback
 * @param delay
 * @param callbackArgs
 */
declare function ALICE_CallPeriodic<T extends Act<any>>(
  callback: T,
  delay?: number,
  ...callbackArgs: Parameters<T>
): ALICEPeriodicCallback<T>;
/**
 * Periodically invokes the callback function up to howOften times. Optional delay parameter to delay the first execution.
 *
 * The arguments passed into the callback function are the current iteration, followed by any additional arguments.
 *
 * The return value of the callback function specifies the interval until next execution.
 * @param callback
 * @param howOften
 * @param delay
 * @param callbackArgs
 */
declare function ALICE_CallRepeated<T extends Act<any>>(
  callback: T,
  howOften: number,
  delay?: number,
  ...callbackArgs: Parameters<T>
): ALICERepeatedCallback<T>;
/**
 * Returns the remaining time until the first execution of a callback returned by ALICE_CallDelayed, ALICE_PairCallDelayed, ALICE_CallPeriodic, or ALICE_CallRepeated. Returns 0 if the callback has already been executed or is invalid.
 * @param callback Which callback to check
 */
declare function ALICE_GetDelayRemaining<T extends ALICECallback>(callback?: T): number;
/**
 * Disables a callback returned by ALICE_CallDelayed, ALICE_PairCallDelayed, ALICE_CallPeriodic, or ALICE_CallRepeated.
 *
 * If called from within a periodic callback function itself, the parameter can be omitted.
 * @param callback Which callback to disable
 * @returns Whether the callback was interrupted or not
 */
declare function ALICE_DisableCallback<T extends ALICECallback>(callback?: T): boolean;
/**
 * Pauses or unpauses a callback returned by ALICE_CallDelayed, ALICE_CallPeriodic, or ALICE_CallRepeated.
 *
 * If a periodic callback is unpaused this way, the next iteration will be executed immediately.
 * Otherwise, the remaining time will be waited.
 *
 * If called from within a periodic callback function itself, the callback parameter can be omitted.
 * @param callback
 * @param enable
 */
declare function ALICE_PauseCallback<T extends ALICECallback>(callback?: T, enable?: boolean): void;

//@ enumeration utils
declare function ALICE_EnumObjects<T extends readonly any[]>(
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_EnumOnInit(identifier: ALICEEnumIdentifier, callback: Act): ALICEObject[];

declare function ALICE_EnumObjectsInRange<T extends readonly any[]>(
  x: number,
  y: number,
  range: number,
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_EnumObjectsInRect<T extends readonly any[]>(
  minx: number,
  miny: number,
  maxx: number,
  maxy: number,
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_EnumObjectsInLineSegment<T extends readonly any[]>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  halfWidth: number,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_EnumObjectsInRegion<T extends readonly any[]>(
  whichRegion: rect[],
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_ForAllObjectsDo<T extends readonly any[]>(
  action: () => void,
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_ForAllObjectsInRangeDo<T extends readonly any[]>(
  action: () => void,
  x: number,
  y: number,
  range: number,
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_ForAllObjectsInRectDo<T extends readonly any[]>(
  action: () => void,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number,
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_ForAllObjectsInRegionDo<T extends readonly any[]>(
  action: () => void,
  whichRegion: rect[],
  identifier: ALICEEnumIdentifier,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_ForAllObjectsInLineSegmentDo<T extends readonly any[]>(
  action: () => void,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  halfWidth: number,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_GetClosestObject<T extends readonly any[]>(
  x: number,
  y: number,
  identifier: ALICEEnumIdentifier,
  cutOffDistance: number,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
): ALICEObject[];
declare function ALICE_GetNClosestObjects<T extends readonly any[]>(
  x: number,
  y: number,
  identifier: ALICEEnumIdentifier,
  maxAmount: number,
  cutOffDistance: number,
  condition?: (host: ALICEObject, ...args: T) => boolean,
  ...args: T
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
declare function ALICE_IncludeTypes<T extends number | string>(...codes: T[]): void;
declare function ALICE_ExcludeTypes<T extends number | string>(...codes: T[]): void;
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
declare function ALICE_Teleport(object: ALICEObject, x: number, y: number, z?: number);
/**
 * Pauses all actors attached to the specified object and renders it invisible to enumerator functions.
 * @param object
 * @param enable
 */
declare function ALICE_Suspend(object: ALICEObject, enable?: boolean): boolean;
/**
 * Toggles whether objects that were suspended with ALICE_Suspend, widgets that were hidden with ShowUnit, ShowItem, or ShowDestructable, and units loaded into transports are enumerated by ALICE_Enum functions.
 * @param enable true/false - On/Off
 */
declare function ALICE_IncludeSuspended(enable: boolean): void;

//@ debug
declare function ALICE_Debug();
declare function ALICE_ListGlobals();
declare function ALICE_Select(qualifier: ALICEObject | number | string);
declare function ALICE_IsSelected(whichObject: ALICEObject): boolean;
declare function ALICE_GetSelectedObject(): ALICEObject | null;
declare function ALICE_PairIsSelected(): boolean;
declare function ALICE_Halt(pauseGame: boolean);
declare function ALICE_NextStep();
declare function ALICE_Resume();
declare function ALICE_Statistics();
declare function ALICE_Benchmark();
declare function ALICE_GetPairState(
  objectA: ALICEObject,
  objectB: ALICEObject,
  keywordA?: string,
  keywordB?: string
): ALICEPairState;
declare function ALICE_VisualizeAllCells();
declare function ALICE_VisualizeAllActors();
declare function ALICE_FuncRequireFields(
  whichFunc: () => void,
  requireMale: boolean,
  requireFemale: boolean,
  ...whichFields: ALICEIdentifier | Record<string, string | LuaTable>
);
declare function ALICE_FuncSetName(whichFunc: () => void, name: string);

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

type ALICEMatchingType = {
  readonly __match_type: never;
};
type ALICEMatchingTypeAny = ALICEMatchingType & {
  readonly __match_any: never;
};

type ALICEMatchingTypeAll = ALICEMatchingType & {
  readonly __match_all: never;
};

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
declare const ALICE_Config: ALICEConfig;
declare const MATCHING_TYPE_ALL: ALICEMatchingTypeAll;
declare const MATCHING_TYPE_ANY: ALICEMatchingTypeAny;

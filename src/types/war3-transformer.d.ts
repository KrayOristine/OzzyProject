/** @noSelfInFile */

// Everything declared in this file will be computed on map build

declare type ObjectData = import("war3-objectdata").ObjectData;

declare interface compiletimeContext {
  objectData: ObjectData;
  /**
   * Optimized fourcc for mass usage
   * @param id text id
   * @returns
   */
  from4cc: (id: T) => T extends number ? string : (T extends number[] ? string[] : never);
  /**
   * Optimized fourcc for mass usage
   * @param id text id
   * @returns
   */
  to4cc: (id: T) => T extends string ? number : (T extends string[] ? number[] : never);
  /**
   * Log the target text to the console
   * @param args
   * @returns
   */
  log: (...args: any) => void;
}

type compiletimeResult = string | number | boolean | object | void;
type isCTR<T> = T extends (ctx: compiletimeContext) => infer R ? (R extends ()=> any ? never : (R extends compiletimeResult ? R : (R extends bigint ? number : never))) : never;

/**
 * Define a function that will be run on compile time in Node environment.
 * It will also return any value that the function defined return
 *
 * @returns string | number | boolean | object | undefined | null
 * @note Any other return type is considered never
 * @since 0.0.3
 * @compiletime
 */
declare function compiletime<T extends (ctx: compiletimeContext)=>any>(func: T): isCTR<T>;

/**
 * Convert a 4 character length string into warcraft object id
 *
 * @note This will be converted in compiletime
 * @compiletime
*/
declare function FourCC(typeId: string): number;


/**
 * Convert an array of 4 character length string into an array of warcraft object id
 *
 * @note This will be converted in compiletime
 * @compiletime
*/
declare function FourCCArray(code: string[]): number[];

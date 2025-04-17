/** @noSelfInFile */

// Everything declared in this file will be computed on map build

declare type ObjectData = import("war3-objectdata").ObjectData;

declare interface compiletimeContext {
  objectData: ObjectData;
  fourCC: (id: string) => number;
  log: (...args: any) => void;
}

type compiletimeResult = string | number | boolean | object | void;

/**
 * Define a function that will be run on compile time in Node environment.
 * It will also return any value that the function defined return
 *
 * @returns string | number | boolean | object | undefined | null
 * @note Any other return type is considered never
 * @since 0.0.3
 * @compiletime
 */
declare function compiletime<T>(func: T): T extends (ctx: compiletimeContext) => infer R ? (R extends ()=> any ? never : (R extends compiletimeResult ? R : never)) : never;


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

/**
 * Try to convert a string into warcraft object id
 *
 * @note This will ignore the length limit and will be converted in compiletime
 * @compiletime
 */
declare function FourCCPure(code: string): number;

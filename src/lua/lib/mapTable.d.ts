/** @noSelfInFile */

declare function TableGet<T extends object>(): T;
declare function TableRet<T extends object>(tbl: T): void;
declare function TableRetM<T extends object>(...args: T[]): void;

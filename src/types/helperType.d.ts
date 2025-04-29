// these helper should be global

declare type Act<TResult = void> = () => TResult;
declare type Fn<TArgs extends any[],TResult = void> = (...args: TArgs) => TResult;
declare type ValueOf<T> = T[keyof T];

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

/**
 * Generate a type that is represent a number ranging from [A, B)
 */
declare type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>


declare type Maybe<T> = T | null | undefined;

declare type Spread<T1, T2> = T2 & Omit<T1, keyof T2>;

declare type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P]; };

declare type ExtractArray<T extends any[]> = (T)[number];

/**
 * Floor div operation (we cant use // since it is a comment syntax)
 */
declare const _fdiv: LuaFloorDivision<number, number, number>;
/**
 * recommend to not use this, it is extremely slow in warcraft environment.
 * But if you are not going for maximum performance by premature optimization then
 * go ahead
 */
declare const _pow: LuaPower<number, number, number>

// these helper should be global

declare type Func<TResult> = () => TResult;
declare type Func1<T1,TResult> = (p1: T1) => TResult;
declare type Func2<T1,T2,TResult> = (p1: T1, p2: T2) => TResult;
declare type Func3<T1,T2,T3,TResult> = (p1: T1, p2: T2, p3: T3) => TResult;
declare type Func4<T1,T2,T3,T4,TResult> = (p1: T1, p2: T2, p3: T3, p4: T4) => TResult;
declare type Func5<T1,T2,T3,T4,T5,TResult> = (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5) => TResult;
declare type ObjValues<T> = T[keyof T];

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

declare type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

declare type Maybe<T> = T | null | undefined;

declare type Spread<T1, T2> = T2 & Omit<T1, keyof T2>;

declare type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P]; };

declare type ExtractArray<T extends any[]> = (T)[number];

declare const _floorDiv: LuaFloorDivision<number, number, number>;
declare const _pow: LuaPower<number, number, number>

// these helper should be global
declare type Maybe<T> = T | null | undefined;

declare type Spread<T1, T2> = T2 & Omit<T1, keyof T2>;

declare type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P]; };

declare type Except<T, V> = T extends V ? never : T;

declare type ExtractArray<T extends any[]> = (T)[number];

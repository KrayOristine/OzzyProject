export type Maybe<T> = T | null | undefined;
export type Spread<T1, T2> = T2 & Omit<T1, keyof T2>;
export type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P]; };
export type Except<T, V> = T extends V ? never : T;
export type ExtractArray<T extends any[]> = (T)[number];

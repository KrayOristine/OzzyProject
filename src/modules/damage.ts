import { Actor } from './actor';

export interface DamageInstance {
  source: Actor,
  target: Actor,
  readonly baseValue: number,
  value: number,
  flags: number,
}

export const enum DamageFlag {
  None = 0,

  // base kind
  isPhysical = 1,
  isMagical = 1 << 1,
  isRanged = 1 << 2,
  isTrue = 1 << 3,

  // info flag - for usage after damage dealt
  isCrit = 1 << 7,
  isDodge = 1 << 8,
  isImmune = 1 << 9,
  isBounce = 1 << 10,

  // extra flag - set before damage dealt
  ignoreDodge = 1 << 15,
  ignoreBlock = 1 << 16,
  ignoreImmune = 1 << 17,
  willCrit = 1 << 18,
  bounceDiagonal = 1 << 19
}

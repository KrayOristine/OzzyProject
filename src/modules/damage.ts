import { Actor } from './actor';

export interface DamageInstance {
  source: Actor,
  target: Actor,
  readonly baseValue: number,
  value: number,
  tags: number,
  property: DamageProperty,
}

export interface DamageProperty {
  /**
   * The effectiveness of on-hit effects applied by this instance
   * 0 - no on-hit effects
   * 1 - 100% effectiveness
   */
  applyOnhit: number,
  /**
   * The effectiveness of lifesteal applied by this instance
   * 0 - no lifesteal
   * 1 - 100% effectiveness
   */
  applyLifesteal: number,

  /**
   * Whether this instance should respect target damage immunities
   */
  respectImmunity: boolean,
  /**
   * Whether this instance should respect target evasion effect
   */
  respectDodge: boolean,
}

export const enum DamageTags {
  None = 0,

  BasicAttack = 1,
  ActiveSpell = 1 << 1,
  AOE = 1 << 2,
  Periodic = 1 << 3,
  Item = 1 << 4,
  Proc = 1<< 5,
  Pet = 1<< 6,
  NonRedirectable = 1 << 7,
  Indirect = 1 << 8,

  // Types
  Physical = 1 << 10,
  Magical = 1 << 11,
  True = 1 << 12,
  /**
   * ignore all reductions, only negated by invulnerability
   */
  Raw = 1 << 13,

  /**
   * ignore everything
  */
  Absolute = 1 << 14,
  // Info
  Critical = 1 << 20,
  Blocked = 1 << 21,
  Evaded = 1 << 22,
  Parried = 1 << 23,
  Reflected = 1 << 24,
}

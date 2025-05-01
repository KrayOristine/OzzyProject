import { Actor } from './actor';

/**
 * Interface for attribute
 */
export interface Attribute {
  int?: boolean,
  float?: boolean,
  name: string, // should be within 4 character
}

export interface IntegerAttribute extends Attribute {
  int: true,
}

export interface FloatAttribute extends Attribute {
  float: true,
}

export interface Attributes {
  data: number[],
  owner: Actor,
}

export const enum AttributeType {
  __MIN__ = 0,
  //@: DO NOT MODIFY THE ENUM ABOVE

  maxHP,
  curHP,
  regenHP,
  maxMP,
  curMP,
  regenMP,
  maxAction,
  curAction,
  maxMove,
  curMove,
  toughness,
  physic,
  magic,
  range,
  critRate,
  critRatio,
  damageRatio,

  block,
  dodge,
  resist,
  resistPen,
  accuracy,
  bounceAmt,
  bounceRatio,

  //@: DO NOT MODIFY THE ENUM BELOW
  __MAX__,
}

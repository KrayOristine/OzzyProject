import { Vec2 } from '@/shared/math';
import { Attribute } from './stats';

//
export interface SimpleActor {
  position: Vec2,
  visual: effect,
  visualPath: string,
  owner: player,
  flags: number,

  //TODO: made hit trigger
}

// any unit with stats
export interface Actor extends SimpleActor {

  // TODO: create stats system and replace this
  stats: Attribute[],
}

export const enum ActorFlag {
  None = 0,

  // moveability
  Moveable = 1,

  // decorator or anything
  Decoration = 1 << 1,

  // like it name
  Destructable = 1 << 2,

  //
  Damageable = 1 << 3,

}


interface Cell {
  x: number,
  y: number,
  actors: Actor[]
}

const cells: Cell[] = [];
const enum Constant {
  maxX = 64000,
  maxY = 64000,
}

export function InitCell(){
  for (const i of $range(1, Constant.maxX)){
    for (const j of $range(1, Constant.maxY)){
      cells[i * 1_000_000 + j] = {
        x: i,
        y: j,
        actors: []
      } satisfies Cell;
    }
  }
}

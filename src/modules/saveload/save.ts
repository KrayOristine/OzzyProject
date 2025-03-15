import { Encoder } from './encoder'
import { Decoder } from './decoder'
import u from '@/shared/util';
import { CompressDeflate } from '@/lua/deflate';
import { constant } from '@/constants';
import { HashMM3 } from '@/shared/murmur';
import { File } from '@/modules/fileIO';

const enum inliner {
  max_slot = 5, // actually should be max
  map_salt = 0x1e35e9b2,
  map_pepper = 0x91367c33,
  map_sugar = 0x32288143,
}

const concat = table.concat;
const upack = table.unpack;
const char = string.char;
const encode = (str: string)=> u.ensure_string_safety(u.cobs_escape(CompressDeflate(str)[0]))
const decode = (encoded: string)=> char(upack(u.code_utf8(encoded))[0]);
class SaveProfile {

  static from: SaveProfile[] = [];

  slot: SaveSlot[] = [];
  name: string = '';
  key: string = '';

  private constructor(n: string){

  }

  static init(){
    for (const i of $range(0, constant.max_player)){
      const p = Player(i)!;
      this.from[i] = new SaveProfile(GetPlayerName(p)!);
    }
  }

  // index 0 is the profile save, 1 ~ max_slot + 1 is save data from slot
  save() {

    for (const i of $range(0, inliner.max_slot)){
      const slot = this.slot[i];

      File.writeSingle(slot.name, encode(slot.save()));

    }


  }
}

class SaveSlot {

  name: string;

  constructor(n: string){
    this.name = string.format('%x', HashMM3(n, inliner.map_sugar));
  }

  save(): string {

    return '';
  }
}



export default {
  SaveProfile,
  SaveSlot
}

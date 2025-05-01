
import { constant } from '@/constants';
import u from '@/shared/util'

const enum Inliner {
  syncChunk = 'Z',
  chunkSize = 250, // 255 - stream id (1 byte) - chunk Id (2 byte) - chunk N (2 byte)
  trimPattern = '^%s*(.-)%s*$',
  trimValue = '%1',
  tickPeriod = 0.035,
}

const sbyte = string.byte;
const concat= table.concat;
const uchar = utf8.char;
const char = string.char;
const sub = string.sub;
const gsub = string.gsub;
const trim = (s: string) => gsub(s, Inliner.trimPattern, Inliner.trimValue)[0];
const concat2BytePair = (a: number,b: number) =>((a-1) << 7) | (b - 1);

type OutgoingStream = {
  dataN: number,
  dataSent: number,
  data: LuaTable<number, string>,
  source: player,
  initiateTick: number,
}

type ReceivingStream = {
  chunkN: number,
  chunkSynced: number,
  localChunk: LuaTable<number, string>
  lastTick: number,
}

// each player is assigned with their specific Sync class
class Sync {

  private source: player;
  private static stack: LuaMap<player, Sync> = new LuaMap();
  private static syncingSource?: player;
  private static handler: trigger;
  private static tmr: timer;
  private static playerStream: LuaMap<number, LuaTable<number, ReceivingStream>> = new LuaMap();
  private static synced: LuaMap<player, LuaTable<number, OutgoingStream>> = new LuaMap();
  private static currStream = 0;
  private static queue: OutgoingStream[] = [];

  private constructor(from: player) {
    this.source = from;
  }

  static init(){
    let t = CreateTrigger();
    for (const i of $range(0, constant.max_player)){
      let p = Player(i)!;
      this.stack.set(p, new Sync(p));
      this.synced.set(p, new LuaTable());
      this.playerStream.set(p, new LuaTable());
      BlzTriggerRegisterPlayerSyncEvent(t, p, Inliner.syncChunk, false);
    }

    TriggerAddAction(t, Sync.onSync)

    this.handler = t;
    this.tmr = CreateTimer();
    TimerStart(this.tmr, Inliner.tickPeriod, true, Sync.onTick);
  }

  private static onTick(this: void){

  }

  private static onSync(this: void){
    const p = GetTriggerPlayer()!;
    const id = GetPlayerId(p);
    const lid = GetPlayerId(GetLocalPlayer());
    const data = BlzGetTriggerSyncData()!;

    const streamId = sbyte(data, 1, 1)[0];
    if (streamId > Sync.currStream){
      Sync.currStream = streamId;
    }

    const ps = Sync.playerStream.get(id)!;
    //@ts-expect-error
    const cid = concat2BytePair(sbyte(data, 2,3)[0]);
    //@ts-expect-error
    const cn = concat2BytePair(sbyte(data, 4,5)[0]);

    if (ps.get(streamId) == null){
      ps.set(streamId, {
        chunkN: cn,
        chunkSynced: 0,
        localChunk: new LuaTable(),
        lastTick: 0,
      })
    }

    const s = ps.get(streamId);

  }

  static from(src: player){
      return Sync.stack.get(src)!;
  }

  static get(src: player, id: number){
      return table.concat(Sync.synced.get(src)![id]);
  }




  send(data: string, toIndex: number): number {
    if (Sync.syncingSource != null) {
      return -1;
    }
    const safe = u.ensure_string_safety(data);
    const char = string.char;
    const idx = Sync.synced.get(this.source)!.length + 1;

    BlzSendSyncData(Inliner.syncChunk, char(idx));

    if (safe.length < Inliner.chunkSize){

      BlzSendSyncData(Inliner.syncChunk, char(idx) + safe);
      return idx;
    }

    let m = _fdiv(safe.length, Inliner.chunkSize);

    for (const i of $range(0, m)){
      const mul = i * Inliner.chunkSize;
      BlzSendSyncData(Inliner.syncChunk, string.sub(data, mul, mul + Inliner.chunkSize));
    }

    return idx;
  }
}

export default Sync;

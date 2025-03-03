
const enum Inliner{
  RAW_PREFIX =']]i([[',
  RAW_SUFFIX = ']])--[[',
  RAW_SIZE = 256 - 6 - 7,
  EMPTY = 'FUCK YOU',
}

export class File {
  private path;
  private buffer: string[];
  private closed: boolean;
  private static stack: File[] = [];

  private constructor(path: string, data?: string) {
    this.path = path;
    this.buffer = data ? [data] : [];
    this.closed = false;
  }


  static open(path: string): File {
    BlzSetAbilityTooltip(FourCC('ANdc'), Inliner.EMPTY, 0);
    Preloader(path);
    const loadStr = BlzGetAbilityTooltip(FourCC('ANdc'), 0);
    if (loadStr == Inliner.EMPTY || loadStr == undefined){
      const f = this.stack.pop();
      if (!f) return new File(path);

      f.buffer = [];
      f.path = path;
      f.closed = false;

      return f;
    }

    return new File(path, loadStr);
  }

  write(data: string){
    if (this.closed) return;
    this.buffer.push(data);
  }

  /**
   * Once you flush, there is no going back
   */
  flush(cleanBuffer: boolean = true){
    if (this.closed) return;
    this.closed = true;
    const content = this.buffer.join('');
    const cl = content.length;

    if (cleanBuffer) this.buffer = [];

    File.stack.push(this);

    PreloadGenClear();
    PreloadGenStart();

		//Preload('")\nendfunction\n//!beginusercode\nlocal p={};local i=function(s)table.insert(p,s)end--[[');
    Preload('")\n//! beginusercode\ndo;local l=0;local p={};local i=function(s)l=l+1;p[l]=s;end;--[[');

    for (const i of $range(1, cl, Inliner.RAW_SIZE)){
      Preload(Inliner.RAW_PREFIX + string.sub(content, i, i + Inliner.RAW_SIZE - 1) + Inliner.RAW_SUFFIX);
    }

    Preload(']]BlzSetAbilityTooltip(' + FourCC('ANdc') + ',table.concat(p),0)\nend\n//!endusercode\nfunction a takes nothing returns nothing\n//');
    PreloadGenEnd(this.path);
  }

  close(){
    this.flush(false);
  }
}

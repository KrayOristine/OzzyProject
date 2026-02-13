const enum Inliner{
  raw_prefix =']]i([[',
  raw_suffix = ']])--[[',
  raw_size = 256 - 6 - 7,
  empty = 'FUCK YOU',
  filter = '[\\/:*?\"<>|]|^(con|prn|aux|nul|com[1-9\u00b9\u00b2\u00b3]|lpt[1-9\u00b9\u00b2\u00b3])',

}

export class File {
  private path;
  private buffer: string[];
  private closed: boolean;
  private static stack: File[] = [];

  private constructor(path: string, data?: string) {
    this.path = path;
    this.buffer = TableGet();
    if (data != null) this.buffer[0] = data;
    this.closed = false;
  }

  static read(path: string){
    if (string.find(path, Inliner.filter)[0]) return '';

    if (string.sub(path, -4, -1) != '.pld'){
      path = path + '.pld';
    }

    BlzSetAbilityTooltip(FourCC('ANdc'), Inliner.empty, 0);
    Preloader(path);
    const loadStr = BlzGetAbilityTooltip(FourCC('ANdc'), 0);
    if (loadStr == Inliner.empty || loadStr == undefined){
      return '';
    }

    return string.gsub(string.gsub(loadStr, '!%]', ']')[0], '!\\\\', '\\')[0];
  }

  static open(path: string) {
    if (string.find(path, Inliner.filter)[0]){
      return;
    }

    if (string.sub(path, -4, -1) != '.pld'){
      path = path + '.pld';
    }
    BlzSetAbilityTooltip(FourCC('ANdc'), Inliner.empty, 0);
    Preloader(path);
    const loadStr = BlzGetAbilityTooltip(FourCC('ANdc'), 0);
    if (loadStr == Inliner.empty || loadStr == undefined){
      if (this.stack.length <= 0){
        return new File(path);
      }

      const f = this.stack.pop()!;
      f.buffer = TableGet();
      f.path = path;
      f.closed = false;

      return f;
    }

    return new File(path, loadStr);
  }

  static create(path: string){
    if (string.find(path, Inliner.filter)[0]){
      return;
    }

    if (string.sub(path, -4, -1) != '.pld'){
      path = path + '.pld';
    }
    if (this.stack.length <= 0){
      return new File(path);
    }

    const f = this.stack.pop()!;
    f.buffer = TableGet();
    f.path = path;
    f.closed = false;

    return f;
  }

  write(data: string){
    if (this.closed) return;
    this.buffer.push(string.gsub(string.gsub(data, '%]','!]')[0], '\\','!\\')[0]);
  }


  static writeSingle(path: string, data: string){
    if (string.find(path, Inliner.filter)[0]){
      return false;
    }

    if (string.sub(path, -4, -1) != '.pld'){
      path = path + '.pld';
    }

    data = string.gsub(string.gsub(data, '%]','!]')[0], '\\','!\\')[0];
    const cl = data.length;

    PreloadGenClear();
    PreloadGenStart();

		//Preload('")\nendfunction\n//!beginusercode\nlocal p={};local i=function(s)table.insert(p,s)end--[[');
    Preload('")\n//! beginusercode\ndo;local l=0;local p={};local i=function(s)l=l+1;p[l]=s;end;--[[');

    let i = 0;
    let pos, __,num, str;
    while(i <= cl){
      pos = i + Inliner.raw_size - 1;
      str = string.sub(data, i, pos);
      num = string.gsub(str, "[\\\n\'\"]", '')[1];
      pos -= num;
      while (string.sub(data, pos, pos) == ']' || string.sub(data, pos+1, pos+1) == '\n'){
        pos--;
      }

      Preload(Inliner.raw_prefix + string.sub(data, i, pos) + Inliner.raw_suffix);
      i = pos + 1;
    }

    Preload(']]BlzSetAbilityTooltip(' + FourCC('ANdc') + ',table.concat(p),0)\nend\n//!endusercode\nfunction a takes nothing returns nothing\n//');
    PreloadGenEnd(path);

    return true;
  }

  /**
   * Once you flush, there is no going back
   */
  flush(cleanBuffer: boolean = true){
    if (this.closed) return;
    this.closed = true;
    const content = this.buffer.join('');
    const cl = content.length;

    if (cleanBuffer) {
      const temp = this.buffer;
      this.buffer = TableGet();
      TableRet(temp);
    }

    File.stack.push(this);

    PreloadGenClear();
    PreloadGenStart();

		//Preload('")\nendfunction\n//!beginusercode\nlocal p={};local i=function(s)table.insert(p,s)end--[[');
    Preload('")\n//! beginusercode\ndo;local l=0;local p={};local i=function(s)l=l+1;p[l]=s;end;--[[');
    let i = 0;
    let pos, __,num, str;
    while(i <= cl){
      pos = i + Inliner.raw_size - 1;
      str = string.sub(content, i, pos);
      num = string.gsub(str, "[\\\n\'\"]", '')[1];
      pos -= num;
      while (string.sub(content, pos, pos) == ']' || string.sub(content, pos+1, pos+1) == '\n'){
        pos--;
      }

      Preload(Inliner.raw_prefix + string.sub(content, i, pos) + Inliner.raw_suffix);
      i = pos + 1;
    }

    Preload(']]BlzSetAbilityTooltip(' + FourCC('ANdc') + ',table.concat(p),0)\nend\n//!endusercode\nfunction a takes nothing returns nothing\n//');
    PreloadGenEnd(this.path);
  }

  close(){
    this.flush(false);
  }
}

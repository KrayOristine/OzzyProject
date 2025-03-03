

export class Encoder {
  private data: any[];
  private format: string;
  private static stack: Encoder[] =[];

  private constructor(){
    this.data = [];
    this.format = "";
  }

  static create(){
    const e = this.stack.pop();
    if (e != undefined){
      e.data = [];
      e.format = "";
      return e;
    }

    return new Encoder();
  }
}



export class Encoder {
  private data: (string|number)[];
  private format: string[];
  private static stack: Encoder[] =[];

  private constructor(){
    this.data = [];
    this.format = ['<'];
  }

  static create(){
    if (Encoder.stack.length <= 0){
      return new Encoder();
    }
    const e = Encoder.stack.pop()!;

    e.data = [];
    e.format = ['<'];
    return e;
  }

  static clean(v: Encoder){
    v.data = [];
    v.format = [];
    Encoder.stack.push(v);
  }

  clean(){
    this.data = [];
    this.format = [];

    Encoder.stack.push(this);
  }

  encode(){
    return string.pack(table.concat(this.format), ...this.data);
  }

  addInt(v: number) {
    this.data.push(v);
    this.format.push('i4')

    return this;
  }

  addSByte(v: number){
    this.data.push(v);
    this.format.push('b');

    return this;
  }

  addShort(v: number){
    this.data.push(v);
    this.format.push('h');

    return this;
  }

  addFloat(v: number){
    this.data.push(v);
    this.format.push('f');

    return this;
  }

  addDouble(v: number){
    this.data.push(v);
    this.format.push('d');

    return this;
  }

  addString(v: string){
    this.data.push(v);
    this.format.push('z');

    return this;
  }

  addFixedString(v: string){
    this.data.push(v);
    this.format.push(`c${v.length}`);

    return this;
  }

  addUint(v: number){
    this.data.push(v);
    this.format.push('I4');

    return this;
  }

  addByte(v: number){
    this.data.push(v);
    this.format.push('B');

    return this;
  }

  addUShort(v: number){
    this.data.push(v);
    this.format.push('H');

    return this;
  }
}

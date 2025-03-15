export class Decoder {
  private data?: string;
  private pos: number;
  private static stack: Decoder[] = [];
  private fmt: string[];

  private constructor(binaryString: string) {
    this.data = binaryString;
    this.pos = 0;
    this.fmt = ['<'];
  }

  static create(data: string) {
    if (Decoder.stack.length <= 0) {
      return new Decoder(data);
    }
    const e = Decoder.stack.pop()!;

    e.data = data;
    e.pos = 0;
    e.fmt = ['<'];
    return e;
  }

  static clean(v: Decoder) {
    delete v.data;
    v.pos = 0;
    if (v.fmt.length > 1)
    {
      v.fmt = ['<'];
    }
    Decoder.stack.push(v);
  }

  clean() {
    delete this.data;
    this.pos = 0;
    this.fmt = ['<'];

    Decoder.stack.push(this);
  }

  private decode(fmt: string, size: number = 0): number {
    const res = string.unpack(fmt, this.data!, this.pos)[0];
    if (size > 0) this.pos += size;

    if (res == null) return 0;

    return res;
  }

  readAll(): any[] | null {
    if (this.fmt.length < 1){
      return null;
    }

    return string.unpack(table.concat(this.fmt), this.data!);
  }

  addInt() {
    this.fmt!.push("i4");
    return this;
  }

  addUint(){
    this.fmt!.push('I4');
    return this;
  }

  addSByte(){
    this.fmt!.push('b');
    return this;
  }

  addByte(){
    this.fmt!.push('B');
    return this;
  }

  addShort(){
    this.fmt!.push('h');
    return this;
  }

  addUShort(){
    this.fmt!.push('H');
    return this;
  }

  addFloat(){
    this.fmt!.push('f');
    return this;
  }

  addDouble(){
    this.fmt!.push('d');
    return this;
  }

  addString(){
    this.fmt!.push('z');
    return this;
  }

  addFixedString(length: number){
    this.fmt!.push(`c${length}`);
    return this;
  }

  readInt() {
    return this.decode("<i4", 4);
  }

  readSByte() {
    return this.decode("b", 1);
  }

  readShort() {
    return this.decode("h", 2);
  }

  readFloat() {
    return this.decode("f", 4);
  }

  readDouble() {
    return this.decode("d", 8);
  }

  readString() {
    const str = string.unpack("z", this.data!, this.pos)[0];
    this.pos += str.length + 1; // + null byte

    return str;
  }

  readFixedString(length: number) {
    return this.decode(`c${length}`, length);
  }

  readUint() {
    return this.decode("I4", 4);
  }

  readByte() {
    return this.decode("B", 1);
  }

  readUShort() {
    return this.decode("H", 2);
  }
}

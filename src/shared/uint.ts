export class Uint {
  private low: number;
  private high: number;
  private rem?: Uint;
  private static stack: Uint[] = [];
  private constructor(h: number, l: number, r?: Uint) {
    this.low = l;
    this.high = h;
    this.rem = r;
  }

  static create(high: number, low: number, remain?: Uint) {
    const cls = this.stack.pop();
    if (cls == undefined) return new Uint(low, high, remain);

    cls.high = high;
    cls.low = low;
    cls.rem = remain;

    return cls;
  }

  static clean(v: Uint) {
    Uint.stack.push(v);
  }

  clean() {
    Uint.stack.push(this);
  }

  static fromNumber(v: number) {
    return Uint.create(v & 0xffff, v >>> 16);
  }

  static fromString(str: string, radix: number) {
    const value = parseInt(str, radix || 10);

    return Uint.create(value & 0xffff, value >>> 16);
  }

  setN(v: number){
    this.low = v >>> 16;
    this.high = v & 0xFFFF;

    return this;
  }

  set(other: Uint){
    this.low = other.low;
    this.high = other.high;

    return this;
  }

  toNumber() {
    return this.high * 65536 + this.low;
  }

  toString(radix: number) {
    return this.toNumber().toString(radix || 10);
  }

  clone() {
    return Uint.create(this.high, this.low, this.rem);
  }

  add(other: Uint) {
    const b00 = this.low + other.low;
    const b16 = (b00 >>> 16) + this.high + other.high;

    this.low = b00 & 0xffff;
    this.high = b16 & 0xffff;

    return this;
  }

  addN(other: number){
    const b00 = this.low + (other >>> 16);
    const b16 = (b00 >>> 16) + this.high + (other & 0xFFFF);

    this.low = b00 & 0xffff;
    this.high = b16 & 0xffff;

    return this;
  }

  sub(other: Uint) {
    const v = (~other.low & 0xffff) + 1;
    const ol = v & 0xffff;
    const oh = (~other.high + (v >>> 16)) & 0xffff;

    const b00 = this.low + ol;

    this.low = b00 & 0xffff;
    this.high = ((b00 >>> 16) + this.high + oh) & 0xffff;

    return this;
  }

  subN(other: number){
    const v = (~(other >>> 16) & 0xffff) + 1;
    const ol = v & 0xffff;
    const oh = (~(other & 0xFFFF) + (v >>> 16)) & 0xffff;

    const b00 = this.low + ol;

    this.low = b00 & 0xffff;
    this.high = ((b00 >>> 16) + this.high + oh) & 0xffff;

    return this;
  }

  mult(other: Uint) {
    const a00 = this.low;
    const b00 = other.low;

    let c00 = a00 * b00;
    let c16 = (c00 >>> 16) + ((this.high * b00) & 0xffff) + a00 * other.high;

    this.low = c00 & 0xffff;
    this.high = c16 & 0xffff;

    return this;
  }

  multN(other: number){
    const a00 = this.low;
    const b00 = other >>> 16;

    let c00 = a00 * b00;
    let c16 = (c00 >>> 16) + ((this.high * b00) & 0xffff) + a00 * (other & 0xFFFF);

    this.low = c00 & 0xffff;
    this.high = c16 & 0xffff;

    return this;
  }

  divSafe(other: Uint) {
    if (other.low == 0 && other.high == 0) throw Error("division by zero");

    // other == 1
    if (other.high == 0 && other.low == 1) {
      this.rem = Uint.create(0, 0);
      return this;
    }

    // other > this: 0
    if (other.gt(this)) {
      this.rem = this.clone();
      this.low = 0;
      this.high = 0;
      return this;
    }
    // other == this: 1
    if (this.eq(other)) {
      this.rem = Uint.create(0, 0);
      this.low = 1;
      this.high = 0;
      return this;
    }

    // Shift the divisor left until it is higher than the dividend
    var _other = other.clone();
    var i = -1;
    while (!this.lt(_other)) {
      // High bit can overflow the default 16bits
      // Its ok since we right shift after this loop
      // The overflown bit must be kept though
      _other.shiftLO(1, true);
      i++;
    }

    // Set the remainder
    this.rem = this.clone();
    // Initialize the current result to 0
    this.low = 0;
    this.high = 0;
    for (; i >= 0; i--) {
      _other.shiftr(1);
      // If shifted divisor is smaller than the dividend
      // then subtract it from the dividend
      if (!this.rem.lt(_other)) {
        this.rem.sub(_other);
        // Update the current result
        if (i >= 16) {
          this.high |= 1 << (i - 16);
        } else {
          this.low |= 1 << i;
        }
      }
    }

    return this;
  }

  divSafeN(other: number){
    return this.divSafe(Uint.fromNumber(other));
  }

  div(other: Uint) {
    // other == 1
    if (other.high == 0 && other.low == 1) {
      this.rem = Uint.create(0, 0);
      return this;
    }

    // other > this: 0
    if (other.gt(this)) {
      this.rem = this.clone();
      this.low = 0;
      this.high = 0;
      return this;
    }
    // other == this: 1
    if (this.eq(other)) {
      this.rem = Uint.create(0, 0);
      this.low = 1;
      this.high = 0;
      return this;
    }

    // Shift the divisor left until it is higher than the dividend
    var _other = other.clone();
    var i = -1;
    while (!this.lt(_other)) {
      // High bit can overflow the default 16bits
      // Its ok since we right shift after this loop
      // The overflown bit must be kept though
      _other.shiftLO(1, true);
      i++;
    }

    // Set the remainder
    this.rem = this.clone();
    // Initialize the current result to 0
    this.low = 0;
    this.high = 0;
    for (; i >= 0; i--) {
      _other.shiftr(1);
      // If shifted divisor is smaller than the dividend
      // then subtract it from the dividend
      if (!this.rem.lt(_other)) {
        this.rem.sub(_other);
        // Update the current result
        if (i >= 16) {
          this.high |= 1 << (i - 16);
        } else {
          this.low |= 1 << i;
        }
      }
    }

    return this;
  }

  divN(other: number){
    return this.div(Uint.fromNumber(other))
  }

  neg() {
    const v = (~this.low & 0xffff) + 1;
    this.low = v & 0xffff;
    this.high = (~this.high + (v >>> 16)) & 0xffff;

    return this;
  }

  eq(other: Uint) {
    return this.low == other.low && this.high == other.high;
  }

  gt(other: Uint) {
    if (this.high > other.high) return true;
    if (this.high < other.high) return false;
    return this.low > other.low;
  }

  lt(other: Uint) {
    if (this.high < other.high) return true;
    if (this.high > other.high) return false;
    return this.low < other.low;
  }

  gteq(other: Uint) {
    return (this.low == other.low && this.high == other.high) || this.high > other.high || this.high == other.high || this.low > other.low;
  }

  lteq(other: Uint) {
    return (this.low == other.low && this.high == other.high) || this.high < other.high || this.high == other.high || this.low < other.low;
  }

  or(other: Uint) {
    this.low |= other.low;
    this.high |= other.high;

    return this;
  }

  orN(other: number){
    this.low |= other >>> 16;
    this.high |= other & 0xFFFF;

    return this;
  }

  and(other: Uint) {
    this.low &= other.low;
    this.high &= other.high;

    return this;
  }

  andN(other: number){
    this.low &= other >>> 16;
    this.high &= other & 0xFFFF;

    return this;
  }

  not() {
    this.low = ~this.low & 0xffff;
    this.high = ~this.high & 0xffff;

    return this;
  }

  xor(other: Uint) {
    this.low ^= other.low;
    this.high ^= other.high;

    return this;
  }

  xorN(other: number){
    this.low ^= other >>> 16;
    this.high ^= other & 0xFFFF;

    return this;
  }

  private shiftLO(n: number, allowOverflow: boolean = true) {
    if (n > 16) {
      this.high = this.low << (n - 16);
      this.low = 0;
      if (!allowOverflow) {
        this.high &= 0xffff;
      }
    } else if (n == 16) {
      this.high = this.low;
      this.low = 0;
    } else {
      this.high = (this.high << n) | (this.low >> (16 - n));
      this.low = (this.low << n) & 0xffff;
      if (!allowOverflow) {
        // Overflow only allowed on the high bits...
        this.high &= 0xffff;
      }
    }

    return this;
  }

  shiftr(n: number) {
    if (n > 16) {
      this.low = this.high >> (n - 16);
      this.high = 0;
    } else if (n == 16) {
      this.low = this.high;
      this.high = 0;
    } else {
      this.low = (this.low >> n) | ((this.high << (16 - n)) & 0xffff);
      this.high >>= n;
    }

    return this;
  }

  shiftl(n: number) {
    if (n > 16) {
      this.high = this.low << (n - 16);
      this.low = 0;
      this.high &= 0xffff;
    } else if (n == 16) {
      this.high = this.low;
      this.low = 0;
    } else {
      this.high = (this.high << n) | (this.low >> (16 - n));
      this.low = (this.low << n) & 0xffff;
      this.high &= 0xffff;
    }

    return this;
  }

  rotl(n: number) {
    var v = (this.high << 16) | this.low;
    v = (v << n) | (v >>> (32 - n));
    this.low = v & 0xffff;
    this.high = v >>> 16;

    return this;
  }

  rotr(n: number) {
    var v = (this.high << 16) | this.low;
    v = (v >>> n) | (v << (32 - n));
    this.low = v & 0xffff;
    this.high = v >>> 16;

    return this;
  }
}

const enum Inliner {
  width = 256,
  mask = width - 1,
  chunks = 6,
  digits = 52,
  sdenom = width ** chunks,
  significance = 2 ** digits,
  overflow = significance * 2,
}

class PRandom {
  private static stack: PRandom[] = [];
  // pre-generated entropy
  private static globalEntropy: number[] = [6.265385083298265,6.319829134006734,6.375049116159016,6.364932021032059,6.413244363140154,6.381178522109696,6.3059392452896565,6.308132842751394,6.412634312777182,6.361237882657251,6.311335699225881,6.324946692618956,6.412855450269851,6.356751961362843,6.32488456600394,6.370177399330763,6.338785202876735,6.352603012802634,6.345414617833736,6.2652213417614115,6.390351306146134,6.329525975794566,6.453895583372193,6.444279055541251];
  private i = 0;
  private j = 0;
  private S: number[] = [];
  private base: number[] = [];
  private entropy = false;

  private constructor() {}

  static create(seed: string, entropy: boolean) {
    const key: number[] = entropy ? this.globalEntropy.slice() : [];
    PRandom.mixkey(PRandom.str(seed), key);
    if (this.stack.length <= 0)
      return new PRandom().init(key, entropy);

    return PRandom.stack.pop()!.init(key, entropy);
  }

  static clean(v: PRandom) {
    v.S = [];
    v.i = 0;
    v.j = 0;
    PRandom.stack.push(v);
  }

  clean() {
    this.S = [];
    this.i = 0;
    this.j = 0;
    PRandom.stack.push(this);
  }

  private init(key: number[], entropy: boolean) {
    let t,
      keylen = key.length;
    let i = 0,
      j = 0;
    let s = this.S;
    this.base = key.slice();
    this.entropy = entropy;
    // The empty key [] is treated as [0].
    if (!keylen) {
      key = [0];
    }

    // Set up S using the standard key scheduling algorithm.
    while (i < Inliner.width) {
      s[i] = i+ 1;
      i++;
    }
    for (const i of $range(0, Inliner.mask)) {
      t = s[i];
      j = Inliner.mask & (j + key[i%keylen]) + t;
      s[i] = s[j];
      s[j] = t;
    }

    this.g(Inliner.width);
    PRandom.mixkey(s, PRandom.globalEntropy);
    this.g(Inliner.width);
    PRandom.mixkey(s, PRandom.globalEntropy);

    return this;
  }

  private g(count: number) {
    let t,
      r = 0;
    let i = this.i,
      j = this.j,
      s = this.S;

    while (count--) {
      i = Inliner.mask & (i+1);
      t = s[i];
      j = Inliner.mask & (j + t);
      r *= Inliner.width;
      s[i] = s[j];
      s[j] = t;
      r += s[Inliner.mask & s[j]] + t;
    }
    this.i = i;
    this.j = j;
    return r;
  }

  private static mixkey(seed: number[], key: number[]) {
    let strSeed = seed;
    let smear: number = 0,
      j = 0;
    while (j < strSeed.length) {
      const idx = Inliner.mask & j;
      j++;
      smear ^= key[idx] * 19;
      key[idx] = Inliner.mask & (smear + seed[j]);
    }
  }

  private static str(a: string) {
    const r: number[] = [];
    for (const i of $range(1, a.length)) {
      r.push(string.byte(a, i, i)[0]);
    }

    return r
  }

  static addEntropy(v: number) {
    if (v < 0 || v > 1) return;

    PRandom.globalEntropy.push(v);
  }

  addEntropy(v: number){
    if (v < 0 || v > 1) return;

    PRandom.globalEntropy.push(v);
  }

  next() {
    let n = this.g(Inliner.chunks), // Start with a numerator n < 2 ^ 48
      d = Inliner.sdenom, //   and denominator d = 2 ^ 48.
      x = 0; //   and no 'extra last byte'.
    while (n < Inliner.significance) {
      // Fill up all significant digits by
      n = (n + x) * Inliner.width; //   shifting numerator and
      d *= Inliner.width; //   denominator and generating a
      x = this.g(1); //   new least-significant-byte.
    }
    while (n >= Inliner.overflow) {
      // To avoid rounding up, before adding
      n /= 2; //   last byte, shift everything
      d /= 2; //   right using integer math until
      x >>>= 1; //   we have exactly the desired bits.
    }
    return (n + x) / d; // Form the number within [0, 1).
  }

  nextInt() {
    return this.g(4) | 0;
  }

  nextQuick() {
    return this.g(4) / 0x100000000;
  }

  remix(){
    // remixing rng while not using entropy is useless
    if (!this.entropy) return;
    const base = this.base;
    let t,
    keylen = base.length;
    let i = 0,
      j = 0;
    let s = this.S;
    PRandom.mixkey(PRandom.globalEntropy, base);

    // Set up S using the standard key scheduling algorithm.
    while (i < Inliner.width) {
      s[i] = i+1;
      i++;
    }

    for (const i of $range(0, Inliner.mask)) {
      t = s[i];
      j = Inliner.mask & (j + base[i%keylen]) + t;
      s[i] = s[j];
      //s[i] = s[(j = Inliner.mask & (j + key[i % keylen] + (t = s[i])))];
      s[j] = t;
    }

    this.g(Inliner.width);

    // remixing wont add entropy
  }
}

export default PRandom;

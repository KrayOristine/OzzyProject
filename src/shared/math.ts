// ultimate magic math library
//@ ALL MUST BE INLINED IF POSSIBLE

import PRandom from "./random";

const sqrt = math.sqrt;
const abs = math.abs;
const floor = math.floor;
const sin = math.sin;
const cos = math.cos;
const acos = math.acos;
const tan = math.tan;
const atan = math.atan;
const nmax = math.max;
const nmin = math.min;

type EasingFunction = (progress: number) => number;

interface EasingDictionary {
  [easing: string]: EasingFunction;
}

declare interface Vector2 {
  readonly x: number;
  readonly y: number;
}
declare interface Vector3 extends Vector2 {
  readonly z: number;
}
declare interface Vector4 extends Vector3 {
  readonly w: number;
}

declare interface Quaternion extends Vector4 {}

/**
 * Value on this enum will be inlined by typescript! (assuming you are not enabling erasableSyntaxOnly)
 */
export const enum MathConst {
  PI = 3.141592653589793238462643383279502884,
  HALF_PI = PI * 0.5,
  NATURAL_LOG_2 = 0.693147181,
  DEG2RAD = PI / 180.0,
  RAD2DEG = 180 / PI,
  /**
   * EPSILON that this library use when it cant use lua eq,lt,gt
   */
  EPSILON = 1e-9,

  EASE_c1 = 1.70158,
  EASE_c2 = MathConst.EASE_c1 * 1.525,
  EASE_c3 = MathConst.EASE_c1 + 1,
  EASE_c4 = (2 * PI) / 3,
  EASE_c5 = (2 * PI) / 4.5,
  EASE_c6 = 1 / 2.75,
  EASE_c7 = 2 / 2.75,
  EASE_c8 = 2.5 / 2.75,
  EASE_c9 = 1.5 / 2.75,
  EASE_c10 = 2.25 / 2.75,
  EASE_c11 = 2.625 / 2.75,
}

export function Clamp(v: number, min: number, max: number) {
  return nmin(max, nmax(v, min));
}

export function Clamp01(v: number) {
  return nmin(1, nmax(v, 0));
}

/**
 * Raylib vector 2 ported to tstl
 * also attempted to optimize it for tstl usage
 */
export class Vec2 implements Vector2 {
  readonly x: number;
  readonly y: number;

  static readonly zero: Vec2 = new Vec2(0, 0);
  static readonly one: Vec2 = new Vec2(1, 1);
  static readonly left: Vec2 = new Vec2(-1, 0);
  static readonly right: Vec2 = new Vec2(1, 0);
  static readonly up: Vec2 = new Vec2(0, 1);
  static readonly down: Vec2 = new Vec2(0, -1);

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  dot(v: Vec2) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v: Vec2) {
    return this.x * v.y + this.y * v.x;
  }

  dist(v2: Vec2) {
    return sqrt((this.x - v2.x) * (this.x - v2.x) + (this.y - v2.y) * (this.y - v2.y));
  }

  distSqr(v2: Vec2) {
    return (this.x - v2.x) * (this.x - v2.x) + (this.y - v2.y) * (this.y - v2.y);
  }

  add(v: Vec2): Vec2 {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  addValue(v: number): Vec2 {
    return new Vec2(this.x + v, this.y + v);
  }

  sub(v: Vec2): Vec2 {
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  subValue(val: number): Vec2 {
    return new Vec2(this.x - val, this.y - val);
  }

  length() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSqr() {
    return this.x * this.x + this.y * this.y;
  }

  scale(v: number): Vec2 {
    return new Vec2(this.x * v, this.y * v);
  }

  mul(v: Vec2): Vec2 {
    return new Vec2(this.x * v.x, this.y * v.y);
  }

  neg(): Vec2 {
    return new Vec2(-this.x, -this.y);
  }

  angle(v2: Vec2) {
    return atan(this.x * v2.y + this.y * v2.x, this.x * v2.x + this.y * v2.y);
  }

  angleDeg(v2: Vec2) {
    return atan(this.x * v2.y + this.y * v2.x, this.x * v2.x + this.y * v2.y) * MathConst.RAD2DEG;
  }

  angleLine(v2: Vec2) {
    return -atan(v2.y - this.y, v2.x - this.x);
  }

  angleLineDeg(v2: Vec2) {
    return -atan(v2.y - this.y, v2.x - this.y) * MathConst.RAD2DEG;
  }

  lerp(v2: Vec2, t: number): Vec2 {
    return new Vec2(this.x + t * (v2.x - this.x), this.y + t * (v2.y - this.y));
  }

  normalize(): Vec2 {
    const l = sqrt(this.x * this.x + this.y * this.y);

    if (l > 0) {
      const il = 1 / l;
      return new Vec2(this.x * il, this.y * il);
    }

    return this;
  }

  reflect(normal: Vec2): Vec2 {
    const dot = this.x * normal.x + this.y * normal.y;

    return new Vec2(this.x - 2 * normal.x * dot, this.y - 2 * normal.y * dot);
  }

  min(v2: Vec2): Vec2 {
    return new Vec2(nmin(this.x, v2.x), nmin(this.y, v2.y));
  }

  max(v2: Vec2): Vec2 {
    return new Vec2(nmax(this.x, v2.x), nmax(this.y, v2.y));
  }

  rot(angle: number): Vec2 {
    const cosr = cos(angle);
    const sinr = sin(angle);

    return new Vec2(this.x * cosr - this.y * sinr, this.x * sinr + this.y * cosr);
  }

  rotDeg(angle: number): Vec2 {
    const cosr = cos(angle * MathConst.DEG2RAD);
    const sinr = sin(angle * MathConst.DEG2RAD);

    return new Vec2(this.x * cosr - this.y * sinr, this.x * sinr + this.y * cosr);
  }

  perpendicular(): Vec2 {
    return new Vec2(-this.y, this.x);
  }

  moveToward(target: Vec2, maxDist: number) {
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const v = dx * dx + dy * dy;

    if (v == 0 || (maxDist >= 0 && v <= maxDist * maxDist)) return target;

    const dist = sqrt(v);

    return new Vec2(this.x + (dx / dist) * maxDist, this.y + (dy / dist) * maxDist);
  }

  invert(): Vec2 {
    return new Vec2(1 / this.x, 1 / this.y);
  }

  clamp(v2: Vec2, vmax: Vec2) {
    return new Vec2(nmin(vmax.x, nmax(this.x, v2.x)), nmin(vmax.y, nmax(this.y, v2.y)));
  }

  clampValue(min: number, max: number): Vec2 {
    let length = this.x * this.x + this.y * this.y;
    if (length > 0.0) {
      length = sqrt(length);

      let scale = 1; // By default, 1 as the neutral element.
      if (length < min) {
        scale = min / length;
      } else if (length > max) {
        scale = max / length;
      }

      return new Vec2(this.x * scale, this.y * scale);
    }

    return Vec2.zero;
  }

  /**
   * Compute the direction of the refracted ray
   * @param n normal vector interface of 2 optical media
   * @param ratio of the refractive index of the medium where the ray come to the refractive index of the medium on the other side of the surface
   */
  refract(n: Vec2, r: number) {
    const dot = this.x * n.x + this.y * n.y;
    let d = 1.0 - r * r * (1.0 - dot * dot);

    if (d > 0) {
      d = sqrt(d);

      const e = r * dot + d;
      return new Vec2(r * this.x - e * n.x, r * this.y - e * n.y);
    }

    return Vec2.zero;
  }

  polarOffset(angle: number, dist: number) {
    return new Vec2(this.x + dist * cos(angle), this.y + dist * sin(angle));
  }

  polarOffsetDeg(angle: number, dist: number) {
    return new Vec2(this.x + dist * cos(angle * MathConst.DEG2RAD), this.y + dist * sin(angle * MathConst.DEG2RAD));
  }

  fromLocation(loc: location): Vec2 {
    return new Vec2(GetLocationX(loc), GetLocationY(loc));
  }

  fromArr<T extends number[]>(arr: T): Vec2 {
    return new Vec2(arr[0], arr[1]); // no safety needed, if you cause crash by passing shit, then it your fault
  }

  toArr(): [number, number] {
    return [this.x, this.y];
  }

  eq(v2: Vec2) {
    return this.x == v2.x && this.y == v2.y;
  }

  neq(v2: Vec2) {
    return !(this.x == v2.x && this.y == v2.y);
  }

  lt(v2: Vec2) {
    return this.x < v2.x && this.y < v2.y;
  }

  gt(v2: Vec2) {
    return this.x > v2.x && this.y > v2.y;
  }

  lteq(v2: Vec2) {
    return this.x <= v2.x && this.y <= v2.y;
  }

  gteq(v2: Vec2) {
    return this.x >= v2.x && this.y >= v2.y;
  }
}

/**
 * Raylib vector 3 ported to tstl
 * Also attempted to optimize it for tstl usage
 */
export class Vec3 implements Vector3 {
  static readonly zero: Vec3 = new Vec3(0, 0, 0);
  static readonly one: Vec3 = new Vec3(1, 1, 1);
  static readonly left: Vec3 = new Vec3(-1, 0, 0);
  static readonly right: Vec3 = new Vec3(1, 0, 0);
  static readonly up: Vec3 = new Vec3(0, 1, 0);
  static readonly down: Vec3 = new Vec3(0, -1, 0);
  static readonly back: Vec3 = new Vec3(0, 0, -1);
  static readonly forward: Vec3 = new Vec3(0, 0, 1);

  constructor(readonly z: number, readonly y: number, readonly x: number) {}

  fromArr<T extends number[]>(arr: T): Vec3 {
    return new Vec3(arr[0], arr[1], arr[2]);
  }

  toArr(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  add(v: Vec3): Vec3 {
    return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  addValue(val: number): Vec3 {
    return new Vec3(this.x + val, this.y + val, this.z + val);
  }

  sub(v: Vec3): Vec3 {
    return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  subValue(val: number): Vec3 {
    return new Vec3(this.x - val, this.y - val, this.z - val);
  }

  mul(v: Vec3): Vec3 {
    return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
  }

  cross(v: Vec3): Vec3 {
    return new Vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
  }

  dot(v: Vec3) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  perpendicular(): Vec3 {
    let min = abs(this.x);
    let cardinal = Vec3.right;

    if (abs(this.y) < min) {
      min = abs(this.y);
      cardinal = Vec3.up;
    }

    if (abs(this.z) < min) {
      cardinal = Vec3.forward;
    }

    return new Vec3(
      this.y * cardinal.z - this.z * cardinal.y,
      this.z * cardinal.x - this.x * cardinal.z,
      this.x * cardinal.y - this.y * cardinal.x
    );
  }

  length() {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  lengthSqr() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  dist(v: Vec3) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    const dz = v.z - this.z;

    return sqrt(dx * dx + dy * dy + dz * dz);
  }

  distSqr(v: Vec3) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    const dz = v.z - this.z;

    return dx * dx + dy * dy + dz * dz;
  }

  angle(v: Vec3) {
    const cx = this.y * v.z - this.z * v.y,
      cy = this.z * v.x - this.x * v.z,
      cz = this.x * v.y - this.y * v.x;

    return atan(sqrt(cx * cx + cy * cy + cz * cz), this.x * v.x + this.y * v.y + this.z * v.z);
  }

  angleDeg(v: Vec3) {
    const cx = this.y * v.z - this.z * v.y,
      cy = this.z * v.x - this.x * v.z,
      cz = this.x * v.y - this.y * v.x;

    return atan(sqrt(cx * cx + cy * cy + cz * cz), this.x * v.x + this.y * v.y + this.z * v.z) * MathConst.RAD2DEG;
  }

  neg(): Vec3 {
    return new Vec3(-this.x, -this.y, -this.z);
  }

  div(v: Vec3): Vec3 {
    return new Vec3(this.x / v.x, this.y / v.y, this.z / v.z);
  }

  scale(val: number): Vec3 {
    return new Vec3(this.x * val, this.y * val, this.z * val);
  }

  normalize(): Vec3 {
    const l = sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (l != 0.0) {
      const il = 1.0 / l;
      return new Vec3(this.x * il, this.y * il, this.z * il);
    }

    return this;
  }

  /**
   * Normalize this vector, normalize tangent vector and making sure it orthogonally to this vector and then return it
   * @param v
   */
  normalizeOrtho(v: Vec3): Vec3 {
    let length = 0.0;
    let ilength = 0.0;

    // Vector3Normalize(*v1);
    let vn: Vec3 = this;
    length = sqrt(vn.x * vn.x + vn.y * vn.y + vn.z * vn.z);
    if (length == 0.0) length = 1.0;
    ilength = 1.0 / length;
    let vx = vn.x * ilength;
    let vy = vn.y * ilength;
    let vz = vn.z * ilength;

    // Vector3CrossProduct(*v1, *v2)
    let vn1x = vy * v.z - vz * v.y,
      vn1y = vz * v.x - vx * v.z,
      vn1z = vx * v.y - vy * v.x;

    // Vector3Normalize(vn1);
    length = sqrt(vn1x * vn1x + vn1y * vn1y + v.z * vn1z);
    if (length == 0.0) length = 1.0;
    ilength = 1.0 / length;
    vn1x *= ilength;
    vn1y *= ilength;
    vn1z *= ilength;

    // Vector3CrossProduct(vn1, *v1)
    return new Vec3(vn1y * vz - vn1z * vy, vn1z * vx - vn1x * vz, vn1x * vy - vn1y * vx);
  }

  project(v: Vec3): Vec3 {
    const v1dv2 = this.x * v.x + this.y * v.y + this.z * v.z;
    const v2dv2 = v.x * v.x + v.y * v.y + v.z * v.z;

    const mag = v1dv2 / v2dv2;

    return new Vec3(v.x * mag, v.y * mag, v.z * mag);
  }

  reject(v: Vec3): Vec3 {
    const v1dv2 = this.x * v.x + this.y * v.y + this.z * v.z;
    const v2dv2 = v.x * v.x + v.y * v.y + v.z * v.z;

    const mag = v1dv2 / v2dv2;

    return new Vec3(this.x - v.x * mag, this.y - v.y * mag, this.z - v.z * mag);
  }

  rotQuat<T extends Quaternion>(q: T): Vec3 {
    return new Vec3(
      this.x * (q.x * q.x + q.w * q.w - q.y * q.y - q.z * q.z) +
        this.y * (2 * q.x * q.y - 2 * q.w * q.z) +
        this.z * (2 * q.x * q.z + 2 * q.w * q.y),
      this.x * (2 * q.w * q.z + 2 * q.x * q.y) +
        this.y * (q.w * q.w - q.x * q.x + q.y * q.y - q.z * q.z) +
        this.z * (-2 * q.w * q.x + 2 * q.y * q.z),
      this.x * (-2 * q.w * q.y + 2 * q.x * q.z) +
        this.y * (2 * q.w * q.x + 2 * q.y * q.z) +
        this.z * (q.w * q.w - q.x * q.x - q.y * q.y + q.z * q.z)
    );
  }

  rotAxis(axis: Vec3, angle: number): Vec3 {
    // Vector3Normalize(axis);
    let length = sqrt(axis.x * axis.x + axis.y * axis.y + axis.z * axis.z);
    if (length == 0.0) length = 1.0;
    let ilength = 1.0 / length;
    let ax = axis.x * ilength;
    let ay = axis.y * ilength;
    let az = axis.z * ilength;

    angle /= 2.0;
    let a = sin(angle);
    let b = ax * a;
    let c = ay * a;
    let d = az * a;
    a = cos(angle);
    let wx = b,
      wy = c,
      wz = d;

    // Vector3CrossProduct(w, v)
    let wvx = wy * this.z - wz * this.y,
      wvy = wz * this.x - wx * this.z,
      wvz = wx * this.y - wy * this.x;

    // Vector3CrossProduct(w, wv)
    let wwvx = wy * wvz - wz * wvy,
      wwvy = wz * wvx - wx * wvz,
      wwvz = wx * wvy - wy * wvx;

    // Vector3Scale(wv, 2*a)
    a *= 2;
    wvx *= a;
    wvy *= a;
    wvz *= a;

    // Vector3Scale(wwv, 2)
    wwvx *= 2;
    wwvy *= 2;
    wwvz *= 2;

    return new Vec3(wvx + wwvx, wvy + wwvy, wvz + wwvz);
  }

  moveToward(target: Vec3, maxDist: number): Vec3 {
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const dz = target.z - this.z;
    const value = dx * dx + dy * dy + dz * dz;

    if (value == 0 || (maxDist >= 0 && value <= maxDist * maxDist)) return target;

    const dist = sqrt(value);

    return new Vec3(this.x + (dx / dist) * maxDist, this.y + (dy / dist) * maxDist, this.z + (dz / dist) * maxDist);
  }

  lerp(v2: Vec3, t: number): Vec3 {
    return new Vec3(this.x + t * (v2.x - this.x), this.y + t * (v2.y - this.y), this.z + t * (v2.z - this.z));
  }

  cubicHermite(tang1: Vec3, v2: Vec3, tang2: Vec3, t: number): Vec3 {
    const amountPow2 = t * t;
    const amountPow3 = t * t * t;

    return new Vec3(
      (2 * amountPow3 - 3 * amountPow2 + 1) * this.x +
        (amountPow3 - 2 * amountPow2 + t) * tang1.x +
        (-2 * amountPow3 + 3 * amountPow2) * v2.x +
        (amountPow3 - amountPow2) * tang2.x,
      (2 * amountPow3 - 3 * amountPow2 + 1) * this.y +
        (amountPow3 - 2 * amountPow2 + t) * tang1.y +
        (-2 * amountPow3 + 3 * amountPow2) * v2.y +
        (amountPow3 - amountPow2) * tang2.y,
      (2 * amountPow3 - 3 * amountPow2 + 1) * this.z +
        (amountPow3 - 2 * amountPow2 + t) * tang1.z +
        (-2 * amountPow3 + 3 * amountPow2) * v2.z +
        (amountPow3 - amountPow2) * tang2.z
    );
  }

  reflect(nor: Vec3): Vec3 {
    const dot = this.x * nor.x + this.y * nor.y + this.z * nor.z;

    return new Vec3(this.x - 2.0 * nor.x * dot, this.y - 2.0 * nor.y * dot, this.z - 2.0 * nor.z * dot);
  }

  min(v2: Vec3): Vec3 {
    return new Vec3(nmin(this.x, v2.x), nmin(this.y, v2.y), nmin(this.z, v2.z));
  }

  max(v2: Vec3): Vec3 {
    return new Vec3(nmax(this.x, v2.x), nmax(this.y, v2.y), nmax(this.z, v2.z));
  }

  barycenter(p: Vec3, a: Vec3, b: Vec3, c: Vec3): Vec3 {
    const v0x = b.x - a.x,
      v0y = b.y - a.y,
      v0z = b.z - a.z; // Vector3Subtract(b, a)

    const v1x = c.x - a.x,
      v1y = c.y - a.y,
      v1z = c.z - a.z; // Vector3Subtract(c, a)

    const v2x = p.x - a.x,
      v2y = p.y - a.y,
      v2z = p.z - a.z; // Vector3Subtract(p, a)

    //
    const d00 = v0x * v0x + v0y * v0y + v0z * v0z; // Vector3DotProduct(v0, v0)
    const d01 = v0x * v1x + v0y * v1y + v0z * v1z; // Vector3DotProduct(v0, v1)
    const d11 = v1x * v1x + v1y * v1y + v1z * v1z; // Vector3DotProduct(v1, v1)
    const d20 = v2x * v0x + v2y * v0y + v2z * v0z; // Vector3DotProduct(v2, v0)
    const d21 = v2x * v1x + v2y * v1y + v2z * v1z; // Vector3DotProduct(v2, v1)

    const denom = d00 * d11 - d01 * d01;

    const ry = (d11 * d20 - d01 * d21) / denom;

    const rz = (d00 * d21 - d01 * d20) / denom;

    return new Vec3(1.0 - (rz + ry), ry, rz);
  }

  invert(): Vec3 {
    return new Vec3(1 / this.x, 1 / this.y, 1 / this.z);
  }

  clamp(min: Vec3, max: Vec3): Vec3 {
    return new Vec3(
      nmin(max.x, nmax(min.x, this.x)),
      nmin(max.y, nmax(min.y, this.y)),
      nmin(max.z, nmax(min.z, this.z))
    );
  }

  clampValue(min: number, max: number): Vec3 {
    let length = this.x * this.x + this.y * this.y + this.z * this.z;
    if (length > 0.0) {
      length = sqrt(length);

      let scale = 1; // By default, 1 as the neutral element.
      if (length < min) {
        scale = min / length;
      } else if (length > max) {
        scale = max / length;
      }
      return new Vec3(this.x * scale, this.y * scale, this.z * scale);
    }

    return this;
  }

  refract(n: Vec3, r: number): Vec3 {
    const dot = this.x * n.x + this.y * n.y + this.z * n.z;
    const d = 1.0 - r * r * (1.0 - dot * dot);

    if (d >= 0.0) {
      const e = r * dot + sqrt(d);
      return new Vec3(r * this.x - e * n.x, r * this.y - e * n.y, r * this.z - e * n.z);
    }

    return this;
  }

  eq(v2: Vec3) {
    return this.x == v2.x && this.y == v2.y && this.z == v2.z;
  }

  neq(v2: Vec3) {
    return !(this.x == v2.x && this.y == v2.y && this.z == v2.z);
  }

  lt(v2: Vec3) {
    return this.x < v2.x && this.y < v2.y && this.z < v2.z;
  }

  gt(v2: Vec3) {
    return this.x > v2.x && this.y > v2.y && this.z > v2.z;
  }

  lteq(v2: Vec3) {
    return this.x <= v2.x && this.y <= v2.y && this.z <= v2.z;
  }

  gteq(v2: Vec3) {
    return this.x >= v2.x && this.y >= v2.y && this.z >= v2.z;
  }
}

/**
 * Raylib vector 4 ported to tstl
 * also attempted to optimize for tstl usage
 */
export class Vec4 implements Vector4 {
  constructor(readonly x: number, readonly y: number, readonly z: number, readonly w: number) {}

  add(v2: Vec4): Vec4 {
    return new Vec4(this.x + v2.x, this.y + v2.y, this.z + v2.z, this.w + v2.w);
  }

  addValue(amt: number) {
    return new Vec4(this.x + amt, this.y + amt, this.z + amt, this.w + amt);
  }

  sub(v2: Vec4): Vec4 {
    return new Vec4(this.x - v2.x, this.y - v2.y, this.z - v2.z, this.w - v2.w);
  }

  subValue(amt: number) {
    return new Vec4(this.x - amt, this.y - amt, this.z - amt, this.w - amt);
  }

  length() {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  lengthSqr() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }

  dot(v2: Vec4) {
    return this.x * v2.x + this.y * v2.y + this.z * v2.z + this.w * v2.w;
  }

  dist(v2: Vec4) {
    return sqrt(
      (this.x - v2.x) * (this.x - v2.x) +
        (this.y - v2.y) * (this.y - v2.y) +
        (this.z - v2.z) * (this.z - v2.z) +
        (this.w - v2.w) * (this.w - v2.w)
    );
  }

  distSqr(v2: Vec4) {
    return (
      (this.x - v2.x) * (this.x - v2.x) +
      (this.y - v2.y) * (this.y - v2.y) +
      (this.z - v2.z) * (this.z - v2.z) +
      (this.w - v2.w) * (this.w - v2.w)
    );
  }

  scale(scale: number): Vec4 {
    return new Vec4(this.x * scale, this.y * scale, this.z * scale, this.w * scale);
  }

  mul(v2: Vec4): Vec4 {
    return new Vec4(this.x * v2.x, this.y * v2.y, this.z * v2.z, this.w * v2.w);
  }

  neg(): Vec4 {
    return new Vec4(-this.x, -this.y, -this.z, -this.w);
  }

  div(v2: Vec4): Vec4 {
    return new Vec4(this.x / v2.x, this.y / v2.y, this.z / v2.z, this.w / v2.w);
  }

  normalize(): Vec4 {
    const length = sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

    if (length > 0) {
      const ilength = 1.0 / length;

      return new Vec4(this.x * ilength, this.y * ilength, this.z * ilength, this.w * ilength);
    }

    return this;
  }

  min(v2: Vec4): Vec4 {
    return new Vec4(nmin(this.x, v2.x), nmin(this.y, v2.y), nmin(this.z, v2.z), nmin(this.w, v2.w));
  }

  max(v2: Vec4): Vec4 {
    return new Vec4(nmax(this.x, v2.x), nmax(this.y, v2.y), nmax(this.z, v2.z), nmax(this.w, v2.w));
  }

  lerp(v2: Vec4, t: number): Vec4 {
    return new Vec4(
      this.x + t * (v2.x - this.x),
      this.y + t * (v2.y - this.y),
      this.z + t * (v2.z - this.z),
      this.w + t * (v2.w - this.w)
    );
  }

  moveToward(v2: Vec4, maxDist: number): Vec4 {
    const dx = v2.x - this.x;
    const dy = v2.y - this.y;
    const dz = v2.z - this.z;
    const dw = v2.w - this.w;
    const value = dx * dx + dy * dy + dz * dz + dw * dw;

    if (value == 0 || (maxDist >= 0 && value <= maxDist * maxDist)) return v2;

    const dist = sqrt(value);

    return new Vec4(
      this.x + (dx / dist) * maxDist,
      this.y + (dy / dist) * maxDist,
      this.z + (dz / dist) * maxDist,
      this.w + (dw / dist) * maxDist
    );
  }

  invert(): Vec4 {
    return new Vec4(1 / this.x, 1 / this.y, 1 / this.z, 1 / this.w);
  }

  eq(v2: Vec4) {
    return this.x == v2.x && this.y == v2.y && this.z == v2.z && this.w == v2.w;
  }

  neq(v2: Vec4) {
    return !(this.x == v2.x && this.y == v2.y && this.z == v2.z && this.w == v2.w);
  }

  lt(v2: Vec4) {
    return this.x < v2.x && this.y < v2.y && this.z < v2.z && this.w < v2.w;
  }

  gt(v2: Vec4) {
    return this.x > v2.x && this.y > v2.y && this.z > v2.z && this.w > v2.w;
  }

  lteq(v2: Vec4) {
    return this.x <= v2.x && this.y <= v2.y && this.z <= v2.z && this.w <= v2.w;
  }

  gteq(v2: Vec4) {
    return this.x >= v2.x && this.y >= v2.y && this.z >= v2.z && this.w >= v2.w;
  }
}

/**
 * Vector 4 renamed
 */
export class Quat extends Vec4 implements Quaternion {
  constructor(x: number, y: number, z: number, w: number) {
    super(x, y, z, w);
  }

  nlerp(q2: Quat, t: number) {
    // QuaternionLerp(q1, q2, amount)
    const qx = this.x + t * (q2.x - this.x);
    const qy = this.y + t * (q2.y - this.y);
    const qz = this.z + t * (q2.z - this.z);
    const qw = this.w + t * (q2.w - this.w);

    // QuaternionNormalize(q);
    const length = sqrt(qx * qw + qy * qw + qz * qw + qw * qw);
    if (length == 0.0) return new Quat(qx, qy, qz, qw);
    const ilength = 1.0 / length;

    return new Quat(qx * ilength, qy * ilength, qz * ilength, qw * ilength);
  }

  slerp(q2: Quat, t: number) {
    let cosHalfTheta = this.x * q2.x + this.y * q2.y + this.z * q2.z + this.w * q2.w;

    let qx = q2.x,
      qy = q2.y,
      qz = q2.z,
      qw = q2.w;
    if (cosHalfTheta < 0) {
      qx = -q2.x;
      qy = -q2.y;
      qz = -q2.z;
      qw = -q2.w;
      cosHalfTheta = -cosHalfTheta;
    }

    if (abs(cosHalfTheta) >= 1.0) return this;
    else if (cosHalfTheta > 0.95) {
      // QuaternionLerp(q1, q2, amount)
      const qx = this.x + t * (q2.x - this.x);
      const qy = this.y + t * (q2.y - this.y);
      const qz = this.z + t * (q2.z - this.z);
      const qw = this.w + t * (q2.w - this.w);

      // QuaternionNormalize(q);
      const length = sqrt(qx * qw + qy * qw + qz * qw + qw * qw);
      if (length == 0.0) return new Quat(qx, qy, qz, qw);
      const ilength = 1.0 / length;

      return new Quat(qx * ilength, qy * ilength, qz * ilength, qw * ilength);
    } else {
      const halfTheta = acos(cosHalfTheta);
      const sinHalfTheta = sqrt(1.0 - cosHalfTheta * cosHalfTheta);

      if (abs(sinHalfTheta) < MathConst.EPSILON) {
        return new Quat(
          this.x * 0.5 + q2.x * 0.5,
          this.y * 0.5 + q2.y * 0.5,
          this.z * 0.5 + q2.z * 0.5,
          this.w * 0.5 + q2.w * 0.5
        );
      } else {
        const ratioA = sin((1 - t) * halfTheta) / sinHalfTheta;
        const ratioB = sin(t * halfTheta) / sinHalfTheta;

        return new Quat(
          this.x * ratioA + q2.x * ratioB,
          this.y * ratioA + q2.y * ratioB,
          this.z * ratioA + q2.z * ratioB,
          this.w * ratioA + q2.w * ratioB
        );
      }
    }
  }
}

/**
 * Easing
 */
export const Easing: EasingDictionary = {
  linear: (x) => x,
  easeInQuad: function (x) {
    return x * x;
  },
  easeOutQuad: function (x) {
    return 1 - (1 - x) * (1 - x);
  },
  easeInOutQuad: function (x) {
    return x < 0.5 ? 2 * x * x : 1 - _pow(-2 * x + 2, 2) / 2;
  },
  easeInCubic: function (x) {
    return x * x * x;
  },
  easeOutCubic: function (x) {
    return 1 - _pow(1 - x, 3);
  },
  easeInOutCubic: function (x) {
    return x < 0.5 ? 4 * x * x * x : 1 - _pow(-2 * x + 2, 3) / 2;
  },
  easeInQuart: function (x) {
    return x * x * x * x;
  },
  easeOutQuart: function (x) {
    return 1 - _pow(1 - x, 4);
  },
  easeInOutQuart: function (x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - _pow(-2 * x + 2, 4) / 2;
  },
  easeInQuint: function (x) {
    return x * x * x * x * x;
  },
  easeOutQuint: function (x) {
    return 1 - _pow(1 - x, 5);
  },
  easeInOutQuint: function (x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - _pow(-2 * x + 2, 5) / 2;
  },
  easeInSine: function (x) {
    return 1 - cos((x * MathConst.PI) / 2);
  },
  easeOutSine: function (x) {
    return sin((x * MathConst.PI) / 2);
  },
  easeInOutSine: function (x) {
    return -(cos(MathConst.PI * x) - 1) / 2;
  },
  easeInExpo: function (x) {
    return x === 0 ? 0 : _pow(2, 10 * x - 10);
  },
  easeOutExpo: function (x) {
    return x === 1 ? 1 : 1 - _pow(2, -10 * x);
  },
  easeInOutExpo: function (x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? _pow(2, 20 * x - 10) / 2 : (2 - _pow(2, -20 * x + 10)) / 2;
  },
  easeInCirc: function (x) {
    return 1 - sqrt(1 - _pow(x, 2));
  },
  easeOutCirc: function (x) {
    return sqrt(1 - _pow(x - 1, 2));
  },
  easeInOutCirc: function (x) {
    return x < 0.5 ? (1 - sqrt(1 - _pow(2 * x, 2))) / 2 : (sqrt(1 - _pow(-2 * x + 2, 2)) + 1) / 2;
  },
  easeInBack: function (x) {
    return MathConst.EASE_c3 * x * x * x - MathConst.EASE_c1 * x * x;
  },
  easeOutBack: function (x) {
    return 1 + MathConst.EASE_c3 * _pow(x - 1, 3) + MathConst.EASE_c1 * _pow(x - 1, 2);
  },
  easeInOutBack: function (x) {
    return x < 0.5
      ? (_pow(2 * x, 2) * ((MathConst.EASE_c2 + 1) * 2 * x - MathConst.EASE_c2)) / 2
      : (_pow(2 * x - 2, 2) * ((MathConst.EASE_c2 + 1) * (x * 2 - 2) + MathConst.EASE_c2) + 2) / 2;
  },
  easeInElastic: function (x) {
    return x === 0 ? 0 : x === 1 ? 1 : -_pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * MathConst.EASE_c4);
  },
  easeOutElastic: function (x) {
    return x === 0 ? 0 : x === 1 ? 1 : _pow(2, -10 * x) * sin((x * 10 - 0.75) * MathConst.EASE_c4) + 1;
  },
  easeInOutElastic: function (x) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? -(_pow(2, 20 * x - 10) * sin((20 * x - 11.125) * MathConst.EASE_c5)) / 2
      : (_pow(2, -20 * x + 10) * sin((20 * x - 11.125) * MathConst.EASE_c5)) / 2 + 1;
  },
  easeInBounce: function (x) {
    x = 1 - x;
    if (x < MathConst.EASE_c6) {
      return 1 - 7.5625 * _pow(x, 2);
    } else if (x < MathConst.EASE_c7) {
      x -= MathConst.EASE_c9;
      return 1 - (7.5625 * _pow(x, 2) + 0.75);
    } else if (x < MathConst.EASE_c8) {
      x -= MathConst.EASE_c10;
      return 1 - (7.5625 * _pow(x, 2) + 0.9375);
    } else {
      x -= MathConst.EASE_c11;
      return 1 - (7.5625 * _pow(x, 2) + 0.984375);
    }
  },
  easeOutBounce: function (x) {
    if (x < MathConst.EASE_c6) {
      return 7.5625 * _pow(x, 2);
    } else if (x < MathConst.EASE_c7) {
      x -= MathConst.EASE_c9;
      return 7.5625 * _pow(x, 2) + 0.75;
    } else if (x < MathConst.EASE_c8) {
      x -= MathConst.EASE_c10;
      return 7.5625 * _pow(x, 2) + 0.9375;
    } else {
      x -= MathConst.EASE_c11;
      return 7.5625 * _pow(x, 2) + 0.984375;
    }
  },
  easeInOutBounce: function (x) {
    if (x < 0.5) {
      x = 2 * x - 1;
      if (x < MathConst.EASE_c6) {
        return (1 - 7.5625 * _pow(x, 2)) / 2;
      } else if (x < MathConst.EASE_c7) {
        x -= MathConst.EASE_c9;
        return (1 - (7.5625 * _pow(x, 2) + 0.75)) / 2;
      } else if (x < MathConst.EASE_c8) {
        x -= MathConst.EASE_c10;
        return (1 - (7.5625 * _pow(x, 2) + 0.9375)) / 2;
      } else {
        x -= MathConst.EASE_c11;
        return (1 - (7.5625 * _pow(x, 2) + 0.984375)) / 2;
      }
    } else {
      x = 2 * x - 1;
      if (x < MathConst.EASE_c6) {
        return (1 + 7.5625 * _pow(x, 2)) / 2;
      } else if (x < MathConst.EASE_c7) {
        x -= MathConst.EASE_c9;
        return (1 + (7.5625 * _pow(x, 2) + 0.75)) / 2;
      } else if (x < MathConst.EASE_c8) {
        x -= MathConst.EASE_c10;
        return (1 + (7.5625 * _pow(x, 2) + 0.9375)) / 2;
      } else {
        x -= MathConst.EASE_c11;
        return (1 + (7.5625 * _pow(x, 2) + 0.984375)) / 2;
      }
    }
  },
};

export function Lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}

export function Normalize(a: number, b: number, t: number) {
  return (a - b) / (t - a);
}

export function LerpAngle(a: number, b: number, t: number) {
  t = Clamp01(t);

  return (((((b - a) % 360) + 540) % 360) - 180) * t;
}

export function Distance(x1: number, y1: number, x2: number, y2: number) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  return sqrt(dx * dx + dy * dy);
}

export function DistanceSquared(x1: number, y1: number, x2: number, y2: number) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  return dx * dx + dy * dy;
}

export class PerlinNoise {
  private static readonly _permutationTable = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240,
    21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88,
    237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83,
    111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80,
    73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64,
    52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182,
    189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
    39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210,
    144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84,
    204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78,
    66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69,
    142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32,
    57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77,
    146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
    63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109,
    198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167,
    43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199,
    106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180,
  ];
  private static readonly _permuLen = PerlinNoise._permutationTable.length;

  private static _gradients: Vec2[] = [];
  private static _corners: Vec2[] = [new Vec2(0, 0), new Vec2(0, 1), new Vec2(1, 0), new Vec2(1, 1)];

  static init(seed?: number) {
    if (seed) SetRandomSeed(seed);

    for (let i = 0; i < 256; i++) {
      let gx = GetRandomReal(0, 1) * 2 - 1;
      let gy = GetRandomReal(0, 1) * 2 - 1;
      while (_pow(gx, 2) + _pow(gy, 2) >= 1) {
        gx = GetRandomReal(0, 1) * 2 - 1;
        gy = GetRandomReal(0, 1) * 2 - 1;
      }

      PerlinNoise._gradients[i] = new Vec2(gx, gy);
    }
  }

  static initPR(pr: PRandom) {
    for (let i = 0; i < 256; i++) {
      let gx = pr.next() * 2 - 1;
      let gy = pr.next() * 2 - 1;
      while (_pow(gx, 2) + _pow(gy, 2) >= 1) {
        gx = pr.next() * 2 - 1;
        gy = pr.next() * 2 - 1;
      }

      PerlinNoise._gradients[i] = new Vec2(gx, gy);
    }
  }

  static get(x: number, y: number) {
    let cx = floor(x),
      cy = floor(y);
    let total = 0;

    for (let n = 0; n < PerlinNoise._corners.length; n++) {
      let nv = PerlinNoise._corners[n];

      const ix = cx + nv.x,
        iy = cy + nv.y;
      const ux = x - ix,
        uy = y - iy;

      let index = PerlinNoise._permutationTable[ix % PerlinNoise._permuLen];
      index = PerlinNoise._permutationTable[(index + iy) % PerlinNoise._permuLen];

      let grad = PerlinNoise._gradients[index % 256];

      let qx = abs(ux);
      qx = 1 - qx * qx * qx * (qx * (qx * 6 - 15) + 10);
      let qy = abs(uy);
      qy = 1 - qy * qy * qy * (qy * (qy * 6 - 15) + 10);
      total += qx * qy * grad.x * ux + grad.y * ux;
    }

    return Clamp(total, -1.0, 1.0);
  }
}

// ultimate magic math library
//@ ALL MUST BE INLINED IF POSSIBLE

import PRandom from './random';

const sqrt = math.sqrt;
const abs = math.abs;
const floor = math.floor;

declare type Vector2 = [number, number];
declare type Vector3 = [number, number, number];

export function Clamp(v: number, min: number, max: number) {
  if (v < min) return min;
  if (v > max) return max;

  return v;
}

export function Clamp01(v: number) {
  if (v < 0) return 0;
  if (v > 1) return 1;

  return v;
}

export function Vec2_Dot(vecA: Vector2, vecB: Vector2) {
  return vecA[0] * vecB[0] + vecA[1] * vecB[1];
}

export function Vec2_Add(vecA: Vector2, vecB: Vector2) {
  return [vecA[0] + vecB[0], vecA[1] + vecB[1]];
}

export function Lerp(a: number, b: number, t: number) {
  return a + (b - a) * Clamp01(t);
}

export function LerpUnclamp(a: number, b: number, t: number) {
  return a + (b - a) * t;
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

const _permutationTable = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21,
  10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149,
  56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229,
  122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209,
  76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
  226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
  223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
  108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179,
  162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50,
  45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151,
  160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10,
  23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56,
  87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
  60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,
  132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226,
  250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223,
  183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108,
  110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162,
  241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45,
  127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
];
const _permuLen = _permutationTable.length;

const _gradients: Vector2[] = [];
const _corners: Vector2[] = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

export function PerlinInit(seed?: number) {
  if (seed) SetRandomSeed(seed);

  for (let i = 0; i < 256; i++) {
    let gx = GetRandomReal(0, 1) * 2 - 1;
    let gy = GetRandomReal(0, 1) * 2 - 1;
    while (_pow(gx, 2) + _pow(gy, 2) >= 1) {
      gx = GetRandomReal(0, 1) * 2 - 1;
      gy = GetRandomReal(0, 1) * 2 - 1;
    }

    _gradients[i] = [gx, gy];
  }
}

export function PerlinInitPR(pr: PRandom){
  for (let i = 0; i < 256; i++) {
    let gx = pr.next() * 2 - 1;
    let gy = pr.next() * 2 - 1;
    while (_pow(gx, 2) + _pow(gy, 2) >= 1) {
      gx = pr.next() * 2 - 1;
      gy = pr.next() * 2 - 1;
    }

    _gradients[i] = [gx, gy];
  }
}

export function PerlinNoise(x: number, y: number) {
  let cx = floor(x),
    cy = floor(y);
  let total = 0;

  for (let n = 0; n < _corners.length; n++) {
    let nv = _corners[n];

    const ix = cx + nv[0],
      iy = cy + nv[1];
    const ux = x - ix,
      uy = y - iy;

    let index = _permutationTable[ix % _permuLen];
    index = _permutationTable[(index + iy) % _permuLen];

    let grad = _gradients[index % 256];

    let qx = abs(ux);
    qx = 1 - qx * qx * qx * (qx * (qx * 6 - 15) + 10);
    let qy = abs(ux);
    qy = 1 - qy * qy * qy * (qy * (qy * 6 - 15) + 10);
    total += qx * qy * grad[0] * ux + grad[1] * ux;
  }

  return Clamp(total, -1.0, 1.0);
}

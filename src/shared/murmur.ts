import { Uint } from './uint';
import js from './jsNative';

const enum Inliner {
  mm3c1 = 0xcc9e2d51,
  mm3c2 = 0x1b873593,
}

const _mmTb = new LuaTable();

/**
 *
 * TS Implementation of MurmurHash2
 *
 * @author Gary Court
 * @author Austin Appleby
 *
 * @param str ASCII only
 * @param seed Positive integer only
 * @return 32-bit positive integer hash
 */
export function Hash_MM2(data: string, seed: number): number {
	if (_mmTb.get(data+seed) != null) return _mmTb.get(data+seed);
	let str = js.TEEncode(data),
		l = str.length,
		h = seed ^ l,
		i = 0,
		k: number;

	while (l >= 4) {
		k = (str[i] & 0xff) | ((str[++i] & 0xff) << 8) | ((str[++i] & 0xff) << 16) | ((str[++i] & 0xff) << 24);

		k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16);
		k ^= k >>> 24;
		k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16);

		h = ((h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

		l -= 4;
		++i;
	}

	switch (l) {
		case 3:
			h ^= (str[i + 2] & 0xff) << 16;
			break;
		case 2:
			h ^= (str[i + 1] & 0xff) << 8;
			break;
		case 1:
			h ^= str[i] & 0xff;
			h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16);
	}

	h ^= h >>> 13;
	h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16);
	h ^= h >>> 15;
	h = h >>> 0
	_mmTb.set(data+seed, h);
	return h;
}

/**
 * TS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 *
 * @author Gary Court
 * @author Austin Appleby
 *
 * @param key ASCII only
 * @param seed Positive integer only
 * @return 32-bit positive integer hash
 */
export function HashMM3(data: string, seed: number): number {
	if (_mmTb.get(data+seed) != null) return _mmTb.get(data+seed);

	let key = js.TEEncode(data);
	let remainder: number, bytes: number, h1: number, h1b: number, k1: number, i: number;

	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	i = 0;

	while (i < bytes) {
		k1 = (key[i] & 0xff) | ((key[++i] & 0xff) << 8) | ((key[++i] & 0xff) << 16) | ((key[++i] & 0xff) << 24);
		++i;

		k1 = ((k1 & 0xffff) * Inliner.mm3c1 + ((((k1 >>> 16) * Inliner.mm3c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((k1 & 0xffff) * Inliner.mm3c2 + ((((k1 >>> 16) * Inliner.mm3c2) & 0xffff) << 16)) & 0xffffffff;

		h1 ^= k1;
		h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
		h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
	}

	k1 = 0;
	if (remainder > 0) {
		switch (remainder) {
			case 3:
				k1 ^= (key[i + 2] & 0xff) << 16;
				break;
			case 2:
				k1 ^= (key[i + 1] & 0xff) << 8;
				break;
			case 1:
				k1 ^= key[i] & 0xff;
		}
		k1 = ((k1 & 0xffff) * Inliner.mm3c1 + ((((k1 >>> 16) * Inliner.mm3c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((k1 & 0xffff) * Inliner.mm3c2 + ((((k1 >>> 16) * Inliner.mm3c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}

	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 16;
	h1 = h1 >>> 0;
	_mmTb.set(data + seed, h1);
	return h1;
}

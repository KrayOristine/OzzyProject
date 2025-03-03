/**
 *
 * Implementation of JS Native into TS To Lua
 */

// TextEncoder
function TEEncode(input: string) {
  const byteArr = [];
  for (let i = 0; i < input.length; i++) byteArr[i] = string.byte(input.substring(i, i));

  return byteArr;
}

function TEEncodeInto(source: string, target: number[]): boolean {
  if (!source || target == undefined) return false;
  for (let i = 0; i < source.length; i++) target[i] = string.byte(source.substring(i, i));
  return true;
}


function ArrayFill<T>(arr: T[], value: T, startIndex: number, endIndex?: number): T[]{
	endIndex = endIndex || arr.length;
	for (const i of $range(startIndex, endIndex)){
		arr[i] = value;
	}
	return arr;
}

function ArrayNew<T>(width: number, defaultValue: T): T[]{
	const arr: T[] = [];
	for (const i of $range(0, width)){
		arr[i] = defaultValue;
	}
	return arr;
}

export default {
  TEEncode,
  TEEncodeInto,
  ArrayFill,
  ArrayNew
}

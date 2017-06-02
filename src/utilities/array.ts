
export function findIndex(array: any[], cb: (item: any, index?: number) => boolean): number {
  let index = -1;
  for (let i = 0; array && i < array.length; i++) {
    if (cb(array[i], i)) {
      index = i;
      break;
    }
  }
  return index;
}

export function shallowCompareArrayEqual(first: Array<any>, second: Array<any>) {
  if (first.length !== second.length) {
    return false;
  }
  for (let index = 0; index < first.length; index++) {
    if (first[index] !== second[index]) {
      return false;
    }
  }
  return true;
}

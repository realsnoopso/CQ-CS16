export const map = <T>(
  arr: T[],
  func: (element: T, index: number, props: T[]) => T,
  props: T[]
) => {
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const newElement = func(arr[i], i, props);
    result.push(newElement);
  }
  return result;
};

export const filter = <T>(
  arr: T[],
  func: (element: T, index: number, props: T[]) => boolean,
  props: T[]
) => {
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const bool = func(arr[i], i, props);
    if (bool) result.push(arr[i]);
  }
  return result;
};

export const reduce = <T>(
  arr: T[],
  initial: T,
  func: (pre: T, curr: T, i: number, props: T[]) => T,
  props: T[]
) => {
  let result: T = initial;
  for (let i = 0; i < arr.length; i++) {
    result = func(result, arr[i], i, props);
    if (i === arr.length) break;
  }
  return result;
};

export const display = <T, A>(func: (props: T) => A, props: T) => func(props);

type Set = number[];

import { map, filter } from './Func-utils';

export const SquadSet = (newSet?: Set) => {
  const set: Set = newSet ? newSet : [];
  const getSet = () => set;

  return Object.freeze({
    getSet,
    sum,
    complement,
    intersect,
    resultAll,
  });
};

const sum = (set: Set, other: Set) => {
  const diff = complement(set, other);
  if (diff) return [...set, ...diff];
  else return set;
};

const complement = (set: Set, other: Set) => {
  const isIncluded = (num: number, _: number, set: Set) => !set.includes(num);
  return filter<number>(other, isIncluded, set);
};

const intersect = (set: Set, other: Set) => {
  const isIncluded = (num: number, _: number, set: Set) => set.includes(num);
  return filter<number>(other, isIncluded, set);
};

const resultAll = (set: Set) => {
  return set;
};

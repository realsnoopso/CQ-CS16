const isFactor = (number: number, potentialFactor: number): boolean =>
  number % potentialFactor == 0;
const isSquared = (number: number): boolean =>
  Math.floor(Math.sqrt(number)) ** 2 == number;
const isPerfect = (number: number): boolean =>
  sum(factors(number)) - number == number;
const isAbundant = (number: number): boolean =>
  sum(factors(number)) - number > number;
const isDeficient = (number: number): boolean =>
  sum(factors(number)) - number < number;
const isPrime = (number: number): boolean =>
  number > 1 && equalSet(factors(number), new Set([1, number]));
const equalSet = (aset: Set<number>, bset: Set<number>): boolean =>
  aset.size === bset.size && [...aset].every((a) => bset.has(a));
const factors = (number: number): Set<any> =>
  Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, i) => i + 1)
    .filter((pod) => isFactor(number, pod))
    .reduce((factorSet, pod) => {
      factorSet.add(pod);
      factorSet.add(number / pod);
      return factorSet;
    }, new Set());
const sum = (factors: Set<any>) =>
  [...factors].reduce((total, factor) => total + factor);

type NumberClassifier = {
  [Key in NumberClassifierKeys]: (number: number) => boolean;
};

type NumberClassifierKeys =
  | 'perfect'
  | 'abundant'
  | 'deficient'
  | 'prime'
  | 'squared';

const numberClassifier = (): NumberClassifier => {
  return {
    perfect: isPerfect,
    abundant: isAbundant,
    deficient: isDeficient,
    prime: isPrime,
    squared: isSquared,
  };
};

const verify = (number: number) =>
  Object.entries(numberClassifier())
    .filter(([_, classifier]) => classifier(number))
    .reduce((acc, [classifier]) => (acc += `${classifier} `), '');

function print() {
  new Array(99).fill(1).reduce((number, curr) => {
    console.log(`${number}: ${verify(number)}`);
    return number + curr;
  }, 2);
}

print();

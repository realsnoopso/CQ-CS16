// factor 인수
const isFactor = (number: number, potentialFactor: number) => {
  return number % potentialFactor == 0;
};

const isSquared = (number: number) => {
  return Math.floor(Math.sqrt(number)) ** 2 == number;
};

// perfect: 완전수
const isPerfect = (number: number) => {
  return sum(factors(number)) - number == number;
};

// abundant: 과잉수
const isAbundant = (number: number) => {
  return sum(factors(number)) - number > number;
};

// deficient: 부족수
const isDeficient = (number: number) => {
  return sum(factors(number)) - number < number;
};

// prime: 소수
const isPrime = (number: number) => {
  const primeSet = new Set([1, number]);
  return number > 1 && equalSet(factors(number), primeSet);
};

const equalSet = (aset: Set<number>, bset: Set<number>) => {
  if (aset.size !== bset.size) return false;
  for (const a of aset) if (!bset.has(a)) return false;
  return true;
};

const factors = (number: number): Set<any> =>
  Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, i) => i + 1)
    .filter((pod) => isFactor(number, pod))
    .reduce((factorSet, pod) => {
      factorSet.add(pod);
      factorSet.add(number / pod);
      return factorSet;
    }, new Set());

const sum = (factors: Set<any>) => {
  return [...factors].reduce((total, factor) => {
    return total + factor;
  });
};

export const numberClassifier: any = {
  perfect: isPerfect,
  abundant: isAbundant,
  deficient: isDeficient,
  prime: isPrime,
  squared: isSquared,
};

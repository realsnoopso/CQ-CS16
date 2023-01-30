export function classifierAlpha() {
  const isFactor = (number: number, potentialFactor: number) => {
    return number % potentialFactor == 0;
  };

  const factors = (number: number) =>
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

  const isPerfect = (number: number) => {
    return sum(factors(number)) - number == number;
  };

  const isAbundant = (number: number) => {
    return sum(factors(number)) - number > number;
  };

  const isDeficient = (number: number) => {
    return sum(factors(number)) - number < number;
  };

  return Object.freeze({
    isFactor,
    factors,
    isPerfect,
    isAbundant,
    isDeficient,
    sum,
  });
}

export const alpha1 = classifierAlpha();
export const alpha2 = classifierAlpha();

console.log(alpha1.isPerfect(6));

export function primeAlpha() {
  const equalSet = (aset: Set<number>, bset: Set<number>) => {
    if (aset.size !== bset.size) return false;
    for (const a of aset) if (!bset.has(a)) return false;
    return true;
  };

  const isPrime = (number: number) => {
    const primeSet = new Set([1, number]);
    return number > 1 && equalSet(factors(number), primeSet);
  };

  const isFactor = (number: number, potentialFactor: number) => {
    return number % potentialFactor == 0;
  };

  const factors = (number: number): Set<any> =>
    Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, i) => i + 1)
      .filter((pod) => isFactor(number, pod))
      .reduce((factorSet, pod) => {
        factorSet.add(pod);
        factorSet.add(number / pod);
        return factorSet;
      }, new Set());

  return Object.freeze({
    equalSet,
    isPrime,
    isFactor,
    factors,
  });
}

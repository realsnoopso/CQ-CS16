export class PrimeAlpha {
  number = 0;

  constructor(number: number) {
    this.number = number;
  }

  equalSet(aset: Set<number>, bset: Set<number>) {
    if (aset.size !== bset.size) return false;
    for (var a of aset) if (!bset.has(a)) return false;
    return true;
  }

  isPrime() {
    var primeSet = new Set([1, this.number]);
    return this.number > 1 && this.equalSet(this.factors(), primeSet);
  }

  isFactor(potentialFactor: number) {
    return this.number % potentialFactor == 0;
  }

  factors() {
    var factorSet: Set<number> = new Set();
    for (var pod = 1; pod <= Math.sqrt(this.number); pod++) {
      if (this.isFactor(pod)) {
        factorSet.add(pod);
        factorSet.add(this.number / pod);
      }
    }
    return factorSet;
  }
}

const prime1 = new PrimeAlpha(10);
const prime2 = new PrimeAlpha(7);

console.log(prime1.isPrime());
console.log(prime2.isPrime());

export class ClassifierAlpha {
  number = 0;

  constructor(number: number) {
    this.number = number;
  }

  isFactor(potentialFactor: number) {
    return this.number % potentialFactor == 0;
  }

  factors() {
    var factorSet = new Set();
    for (var pod = 1; pod <= Math.sqrt(this.number); pod++) {
      if (this.isFactor(pod)) {
        factorSet.add(pod);
        factorSet.add(this.number / pod);
      }
    }
    return factorSet;
  }

  isPerfect() {
    return ClassifierAlpha.sum(this.factors()) - this.number == this.number;
  }

  isAbundant() {
    return ClassifierAlpha.sum(this.factors()) - this.number > this.number;
  }

  isDeficient() {
    return ClassifierAlpha.sum(this.factors()) - this.number < this.number;
  }

  static sum(factors: Set<any>) {
    var total = 0;
    factors.forEach((factor) => {
      total += factor;
    });
    return total;
  }
}

export var alpha1 = new ClassifierAlpha(10);
export var alpha2 = new ClassifierAlpha(6);

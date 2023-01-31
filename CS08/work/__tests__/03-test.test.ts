import { numberClassifier, pipe } from '../03-higherOrderFunc';

describe('numberClassifier', () => {
  const classifier = numberClassifier;

  it('should correctly classify perfect numbers', () => {
    expect(classifier.isPerfect(6)).toBe(true);
    expect(classifier.isPerfect(28)).toBe(true);
    expect(classifier.isPerfect(496)).toBe(true);
  });

  it('should correctly classify abundant numbers', () => {
    expect(classifier.isAbundant(12)).toBe(true);
    expect(classifier.isAbundant(18)).toBe(true);
    expect(classifier.isAbundant(20)).toBe(true);
  });

  it('should correctly classify deficient numbers', () => {
    expect(classifier.isDeficient(7)).toBe(true);
    expect(classifier.isDeficient(13)).toBe(true);
    expect(classifier.isDeficient(19)).toBe(true);
  });

  it('should correctly classify prime numbers', () => {
    expect(classifier.isPrime(2)).toBe(true);
    expect(classifier.isPrime(3)).toBe(true);
    expect(classifier.isPrime(5)).toBe(true);
  });

  it('should correctly classify squared numbers', () => {
    expect(classifier.isSquared(4)).toBe(true);
    expect(classifier.isSquared(9)).toBe(true);
    expect(classifier.isSquared(16)).toBe(true);
  });
});

describe('pipe', () => {
  const add = (a: number) => a + 1;
  const multiply = (a: number) => a * 2;
  const toString = (a: number) => a.toString();

  it('should apply functions in correct order', () => {
    const result = pipe(add, multiply, toString)(2);
    expect(result).toEqual('6');
  });

  it('should return original value if no functions provided', () => {
    const result = pipe()(2);
    expect(result).toEqual(2);
  });
});

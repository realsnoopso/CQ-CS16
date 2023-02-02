import { computeAddress } from 'ethers/lib/utils';

type Arr = number[][];
type Element = number;

export class CountSet {
  #arr: Arr = [];

  append(element: Element) {
    let arr = this.#arr;
    let hasSameElement = false;
    arr.forEach((elementContainer, i) => {
      const [compare, count] = elementContainer;
      if (compare === element) {
        arr[i] = [element, count + 1];
        hasSameElement = true;
      }
    });
    if (!hasSameElement) {
      const newElementContainer = [element, 1];
      arr.push(newElementContainer);
    }
    this.#arr = arr;
    return arr;
  }

  remove(element: Element) {
    let arr = this.#arr;
    arr.forEach((elementContainer, i) => {
      const [compare, count] = elementContainer;
      if (compare === element) {
        const isEmpty = count - 1 === 0;
        if (isEmpty) arr.splice(i, 1);
        else arr[i] = [element, count - 1];
      }
    });
    this.#arr = arr;
    return arr;
  }

  countFor(element: Element) {
    let arr = this.#arr;
    let count = 0;
    arr.forEach((elementContainer, i) => {
      const [a, b] = elementContainer;
      a === element ? (count = b) : 0;
    });
    return count;
  }

  sum(other: Arr) {
    const arr = [...this.#arr];
    other.forEach((elementContainer: Element[]) => {
      const [element, count] = elementContainer;
      let hasSameElement = false;
      arr.forEach((elementContainer, i) => {
        const [compare, compareCount] = elementContainer;
        if (compare === element) {
          arr[i] = [element, compareCount + count];
          hasSameElement = true;
        }
      });
      if (!hasSameElement) arr.push(elementContainer);
    });
    return arr;
  }

  complement(other: Arr) {
    const arr = [...this.#arr];
    other.forEach((elementContainer: Element[]) => {
      const [element, count] = elementContainer;
      arr.forEach((elementContainer, i) => {
        const [compare, compareCount] = elementContainer;
        if (compare === element) {
          if (compareCount - count <= 0) {
            return arr.splice(i, 1);
          }
          arr[i] = [element, compareCount - count];
        }
      });
    });
    return arr;
  }

  resultAll() {
    return this.#arr.map((elementContainer) => {
      const [element, count] = elementContainer;
      return { element, count };
    });
  }
}

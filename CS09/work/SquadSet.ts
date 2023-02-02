type Set = number[];

export class SquadSet {
  #set: Set = [];

  constructor(set: Set) {
    this.#set = set;
  }

  sum(other: Set) {
    const set = this.#set;
    const diff = this.complement(other);
    if (diff) return [...set, ...diff].sort((a, b) => a - b);
    else return set;
  }

  complement(other: Set) {
    const set = this.#set;
    const diff: Set = [];
    other.forEach((num: number) => {
      if (!set.includes(num)) return diff.push(num);
    });
    return diff.sort((a, b) => a - b);
  }

  intersect(other: Set) {
    const set = this.#set;
    const same: Set = [];
    other.forEach((num: number) => {
      if (set.includes(num)) return same.push(num);
    });
    if (same) return same;
    else return [];
  }

  resultAll() {
    const set = this.#set;
    return set;
  }
}

// A 집합 = [1,2,3]
// B 집합 = [1,3]
// 합집합sum = [1,2,3]
// 차집합complement = [2]
// 교집합intersect = [1,3]

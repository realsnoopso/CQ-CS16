import { SquadSet } from './Func-SquadSet';

const squadSet = SquadSet([2, 3, 4]);

describe('sum', () => {
  it('general', () => {
    const set = squadSet.getSet();
    expect(squadSet.sum(set, [1, 2, 3])).toStrictEqual([2, 3, 4, 1]);
  });
  it('all same', () => {
    const set = squadSet.getSet();
    expect(squadSet.sum(set, [2, 3, 4])).toStrictEqual([2, 3, 4]);
  });
});

describe('complement', () => {
  it('general', () => {
    const set = squadSet.getSet();
    expect(squadSet.complement(set, [1, 2, 3])).toStrictEqual([1]);
  });
  it('all different', () => {
    const set = squadSet.getSet();
    expect(squadSet.complement(set, [5, 6, 7])).toStrictEqual([5, 6, 7]);
  });
  it('all same', () => {
    const set = squadSet.getSet();
    expect(squadSet.complement(set, [2, 3, 4])).toStrictEqual([]);
  });
});

describe('intersect', () => {
  it('general', () => {
    const set = squadSet.getSet();
    expect(squadSet.intersect(set, [1, 2, 3])).toStrictEqual([2, 3]);
  });
  it('all same', () => {
    const set = squadSet.getSet();
    expect(squadSet.intersect(set, [2, 3, 4])).toStrictEqual([2, 3, 4]);
  });
  it('all different', () => {
    const set = squadSet.getSet();
    expect(squadSet.intersect(set, [5, 6, 7])).toStrictEqual([]);
  });
});

describe('resultAll', () => {
  it('general', () => {
    const set = squadSet.getSet();
    expect(squadSet.resultAll(set)).toStrictEqual([2, 3, 4]);
  });
});

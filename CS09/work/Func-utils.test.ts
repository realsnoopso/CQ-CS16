import { map, filter, reduce, display } from './Func-utils';

describe('map', () => {
  it('sum', () => {
    const testMap = () =>
      map<number>(
        [1, 2, 3],
        (element, _, props) => {
          const [a] = props;
          return (element += a);
        },
        [1]
      );
    expect(testMap()).toStrictEqual([2, 3, 4]);
  });

  it('join string', () => {
    const testMap = () =>
      map<string>(
        ['snoop', 'a dog'],
        (element, _, props: string[]) => {
          const [a, b] = props;
          return `${a} ${b} ${element}`;
        },
        ['I', 'am']
      );
    expect(testMap()).toStrictEqual(['I am snoop', 'I am a dog']);
  });
});

describe('filter', () => {
  it('general', () => {
    const testFilter = () =>
      filter<number>(
        [1, 2, -1],
        (element, _, props: number[]) => {
          const [a] = props;
          return element > a;
        },
        [0]
      );
    expect(testFilter()).toStrictEqual([1, 2]);
  });

  it('has not intersection', () => {
    const testFilter = () =>
      filter<number>(
        [1, 2],
        (element, _, props: number[]) => {
          const [a] = props;
          return element > a;
        },
        [4]
      );
    expect(testFilter()).toStrictEqual([]);
  });
});

describe('reduce', () => {
  it('general', () => {
    const testFilter = () =>
      reduce<number>([1, 2], 0, (a, b, i, _) => a + b + i, []);
    expect(testFilter()).toStrictEqual(4);
  });
});

describe('display', () => {
  it('general', () => {
    type Props = [number[], number[]];
    const testMap = (props: Props) =>
      map<number>(
        props[0],
        (element, _, props) => {
          const [a] = props;
          return (element += a);
        },
        props[1]
      );
    const testDisplay = () =>
      display<Props, number[]>(testMap, [[1, 2, 3], [1]]);
    expect(testDisplay()).toStrictEqual([2, 3, 4]);
  });
});

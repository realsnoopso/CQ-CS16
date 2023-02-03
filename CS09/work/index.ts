import { SquadSet } from './SquadSet';
import { CountSet } from './ CountSet';
import { map } from './Func-utils';

const squadSet = new SquadSet([2, 3, 4]);
const countSet = new CountSet();
console.log(squadSet.sum([1, 2, 3]));
console.log(squadSet.complement([1, 2, 3]));

countSet.append(1);
countSet.append(1);
countSet.append(3);
countSet.append(3);
console.log(
  countSet.complement([
    [1, 2],
    [2, 1],
  ])
);

const display = <T, A>(func: (props: T) => A, props: T) => func(props);

const maptest = (props: number[]) =>
  map<number>(
    [1, 2, 3],
    (element, _, props) => {
      const [a] = props;
      return (element += a);
    },
    props
  );
console.log('display', display<number[], number[]>(maptest, [1]));

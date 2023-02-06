// import { SquadSet } from './SquadSet';
// import { CountSet } from './ CountSet';
import { map } from './Func-utils';
import { CountSet } from './Func-CountSet';

// const squadSet = new SquadSet([2, 3, 4]);
// const countSet = new CountSet();
// console.log(squadSet.sum([1, 2, 3]));
// console.log(squadSet.complement([1, 2, 3]));

// countSet.append(1);
// countSet.append(1);
// countSet.append(3);
// countSet.append(3);
// console.log(
//   countSet.complement([
//     [1, 2],
//     [2, 1],
//   ])
// );

// const display = <T, A>(func: (props: T) => A, props: T) => func(props);

// const maptest = (props: number[]) =>
//   map<number>(
//     [1, 2, 3],
//     (element, _, props) => {
//       const [a] = props;
//       return (element += a);
//     },
//     props
//   );
// console.log('display', display<number[], number[]>(maptest, [1]));

// const countSet = CountSet();
// const arr = countSet.getArr();
// const setArr = countSet.setArr;
// // countSet.append(arr, 1, setArr);
// // countSet.append(arr, 2, setArr);
// const result = countSet.append(arr, 1, setArr);

// console.log(result);

const countSet = CountSet();
const arr = countSet.getArr();
const setArr = countSet.setArr;
countSet.append(arr, 1, setArr);
const result = countSet.append(arr, 2, setArr);
console.log(result);

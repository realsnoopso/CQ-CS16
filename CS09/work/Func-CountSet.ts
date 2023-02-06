import { map, filter } from './Func-utils';

type Arr = ElementContainer[];
type ElementContainer = Element[];
type Element = number;
type SetArr = (newArr: Arr) => Arr;

export const CountSet = (newArr?: Arr) => {
  let arr: Arr = newArr ?? [];
  const getArr = () => arr;
  const setArr: SetArr = (newArr: Arr) => (arr = newArr);

  return Object.freeze({
    getArr,
    setArr,
    append,
  });
};

const append = (preArr: Arr, element: Element, setArr: SetArr) => {
  let arr = [...preArr];
  const newArr = map<ElementContainer>(
    arr,
    (element, _, props) => {
      const [compare, count] = element;
      const [[prop]] = props;
      return prop === compare ? [prop, count + 1] : element;
    },
    [[element]]
  );

  if (JSON.stringify(newArr) === JSON.stringify(arr)) {
    const newElementContainer = [element, 1];
    arr.push(newElementContainer);
  }
  setArr(newArr);

  return newArr;
};

import { numberClassifier } from './utils';

function verify(number: number) {
  return Object.keys(numberClassifier)
    .filter((classifier: any) => numberClassifier[classifier](number))
    .reduce((acc, classifier) => {
      return (acc += `${classifier} `);
    }, '');
}

new Array(99).fill(1).reduce((acc, curr) => {
  console.log(`${acc}: ${verify(acc)}`);
  return acc + curr;
}, 2);

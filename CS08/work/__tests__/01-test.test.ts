import { ClassifierAlpha } from '../01-example';
import { classifierAlpha } from '../01-classifierAlpha';

function getHundred() {
  let i = 1;
  let result: number[] = [];
  while (i <= 100) {
    result.push(i);
    i++;
  }
  return result;
}

const numContainer = getHundred();

// numContainer.forEach((num) => {
test('exmaple-alpha1', () => {
  expect(
    new ClassifierAlpha(30).isPerfect() === classifierAlpha().isPerfect(30)
  ).toBe(true);
});
// });

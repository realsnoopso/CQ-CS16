// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,

export function solution(answers) {
  console.log({ answers });
  const a = ((answers) =>
    answers.reduce((score, answer, i) => {
      const index = (i + 1) % 5;
      return [5, 1, 2, 3, 4][index] === answer ? score + 1 : score;
    }, 0))(answers);
  const b = ((answers) =>
    answers.reduce((score, answer, i) => {
      if (i % 2 === 0 && answer === 2) return score + 1;
      const index = ((i - 1 + 2) / 2) % 4;
      return answer === [5, 1, 3, 4][index] ? score + 1 : score;
    }, 0))(answers);
  const c = ((answers) =>
    answers.reduce((score, answer, i) => {
      const index = (i % 2 === 0 ? (i + 2) / 2 : (i + 1) / 2) % 5;
      return answer === [5, 3, 1, 2, 4][index] ? score + 1 : score;
    }, 0))(answers);

  const sortArr = [
    { index: 1, value: a },
    { index: 2, value: b },
    { index: 3, value: c },
  ].sort((a, b) => b.value - a.value);

  const compare = (arr) => {
    if (
      sortArr[0].value === sortArr[1].value &&
      sortArr[1].value === sortArr[2].value
    ) {
      return [1, 2, 3];
    }
    if (sortArr[0].value === sortArr[1].value) {
      return [sortArr[0].index, sortArr[1].index];
    }
    return [sortArr[0].index];
  };

  return compare(sortArr);
}

// console.log(JSON.stringify(solution([1, 2, 3, 4, 5])) === JSON.stringify([1]));
// console.log(
//   JSON.stringify(solution([1, 3, 2, 4, 2])) === JSON.stringify([1, 2, 3])
// );
// console.log(
//   JSON.stringify(
//     solution([2, 4, 3, 1, 1, 5, 3, 2, 4, 5, 4, 2, 2, 3, 5, 3, 5, 5, 1])
//   )
// );

console.log(
  JSON.stringify(
    solution([1, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 1, 5, 3, 5, 2, 3, 3, 3])
  )
);

function generateAnswers() {
  let answers = [];
  for (let i = 0; i < 19; i++) {
    answers.push(Math.floor(Math.random() * 5) + 1);
  }
  return answers;
}

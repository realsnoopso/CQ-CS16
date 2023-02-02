// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,

export function solution(answers) {
  const patterns = [
    [5, 1, 2, 3, 4],
    [5, 2, 1, 2, 3, 2, 4, 2],
    [5, 3, 3, 1, 1, 2, 2, 4, 4, 5],
  ];

  const scores = patterns.map((pattern) =>
    answers.reduce(
      (score, answer, i) =>
        answer === pattern[(i + 1) % pattern.length] ? score + 1 : score,
      0
    )
  );

  return scores.reduce((result, score, i) => {
    score === Math.max(...scores) && result.push(i + 1);
    return result;
  }, []);
}

console.log(JSON.stringify(solution([1, 2, 3, 4, 5])) === JSON.stringify([1]));
console.log(
  JSON.stringify(solution([1, 3, 2, 4, 2])) === JSON.stringify([1, 2, 3])
);
console.log(
  JSON.stringify(
    solution([2, 4, 3, 1, 1, 5, 3, 2, 4, 5, 4, 2, 2, 3, 5, 3, 5, 5, 1])
  )
);

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

export const solution = (array, commands) =>
  commands.map((command) => {
    const [start, end, index] = command;
    return array.slice(start - 1, end).sort((a, b) => a - b)[index - 1];
  }, 0);

const print = (x, y) => console.log(solution(x, y));
const check = (x, y, a) =>
  console.log(JSON.stringify(solution(x, y)) === JSON.stringify(a));

print([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3]]);
print(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
check(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
  [5, 6, 3]
);

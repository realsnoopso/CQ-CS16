// #include <string>
// #include <vector>

// using namespace std;

// board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

// 1 담기
// inputB를 순회, b
// array를 반복
// array의[b]가 0이 아니면 담음. break

export function solution(board, moves) {
  let stack = [];
  return moves.reduce((answer, move) => {
    const i = board.findIndex((row) => row[move - 1] > 0);
    const target = board[i]?.[move - 1];

    if (target) {
      board[i][move - 1] = 0;
      stack.push(target);
      if (stack !== [] && stack[stack.length - 2] === stack[stack.length - 1]) {
        stack.pop();
        stack.pop();
        return answer + 2;
      }
    }
    return answer;
  }, 0);
}

function test() {
  const a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const b = [1, 5, 3, 5, 1, 2, 1, 4];
  const result = 4;
  return solution(a, b);
}

console.log(test());

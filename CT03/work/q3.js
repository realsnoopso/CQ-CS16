// #include <string>
// #include <vector>

// using namespace std;

export function solution(s) {
  return s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .reduce(
          (result, char, i) =>
            i % 2 === 0
              ? result + char.toUpperCase()
              : result + char.toLowerCase(),
          ''
        )
    )
    .join(' ');
}

const print = (v) => console.log(solution(v));
const check = (v, a) => console.log(solution(v) === a);

print('try hello world');
check('try hello world', 'TrY HeLlO WoRlD');

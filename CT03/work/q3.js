// #include <string>
// #include <vector>

// using namespace std;

export function solution(s) {
  let answer = '';
  let arr = [];
  s.split(' ').reduce((_, word) => {
    arr.push(
      word.split('').reduce((result, char, i) => {
        if (i % 2 === 0) return result + char.toUpperCase();
        return result + char.toLowerCase();
      }, '')
    );
  }, '');
  answer = arr.join(' ');
  return answer;
}

const print = (v) => console.log(solution(v));
const check = (v, a) => console.log(solution(v) === a);

print('try hello world');
check('try hello world', 'TrY HeLlO WoRlD');

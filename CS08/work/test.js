const createNumsSet = (arr) => new Set(arr);
const createNumsArr = (arr) =>
  arr.reduce((pre, curr, i) => {
    pre.push((curr += i));
    return pre;
  }, []);

const NUM = 1;
const arr = createNumsArr(new Array(NUM).fill(1)); // [1,2,3...1000000]
const set = createNumsSet(createNumsArr(new Array(NUM).fill(1))); // {1,2,3...1000000}

function testSpeedArr() {
  console.log('-------------------------');
  console.log('Array.prototype.includes() :');
  console.time();
  arr.includes(NUM);
  console.timeEnd();
}

function testSpeedArrPop() {
  console.log('-------------------------');
  console.log('Array.prototype.pop() :');
  console.time();
  arr.pop();
  console.timeEnd();
}

function testSpeedArrShift() {
  console.log('-------------------------');
  console.log('Array.prototype.shift() :');
  console.time();
  arr.shift();
  console.timeEnd();
}

function testSpeedSet() {
  console.log('-------------------------');
  console.log('Set.prototype.has() :');
  console.time();
  set.has(NUM);
  console.timeEnd();
}
testSpeedSet();
testSpeedArr();

// testSpeedArrShift();
// testSpeedArrPop();

const snoop = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const getAge = snoop.getAge.bind(snoop);
console.log(getAge());

// const map = (arr, func) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newElement = func(arr[i], i, props);
//     result.push(newElement);
//   }
//   return result;
// };

// const utils = {
//   arr: [1, 2, 3],
//   map,
// };

// const mapBind = utils.map.bind(utils);
// console.log({ mapBind: mapBind([1, 2, 3], (e, i, d) => e) });

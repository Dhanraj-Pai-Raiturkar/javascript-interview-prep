// map, filter, reduce
// polyfill

Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
const a = ["apple", "banana", "cheeku"];
console.log(a.myMap((item, i) => item + i));

Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const isTrue = callback(this[i], i, this);
    if (isTrue) arr.push(this[i]);
  }
  return arr;
};
console.log(a.myFilter((item) => item === "apple"));

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
const numbers = [1, 2, 3];
console.log(
  numbers.myReduce((acc, item) => {
    return acc + item;
  }, 0)
);

// difference between map and foreach
// foreach modifies the original arr, while map returns and new array and can be used for method chaining

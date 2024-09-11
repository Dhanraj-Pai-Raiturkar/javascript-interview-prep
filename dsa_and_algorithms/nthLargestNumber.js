Array.prototype.nthLargestNumber = function (n) {
  const arr = this.sort((a, b) => b - a);
  if (n === 0) return arr[0];
  if (n > this.length) return arr[this.length - 1];
  return arr[n - 1];
};

console.log([2, 6, 5, 1].nthLargestNumber(1));

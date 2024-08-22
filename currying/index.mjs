// infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(2)(2)(2)());

// ========== implement this code
const calc = {
  output: undefined,
  add(num) {
    if (this.output) this.output = this.output + num;
    else this.output = num;
    return this;
  },
  subtract(num) {
    if (this.output) this.output = this.output - num;
    else this.output = num;
    return this;
  },
  multiply(num) {
    if (this.output) this.output = this.output * num;
    else this.output = num;
    return this;
  },
};
// implement this code
const result = calc.add(3).multiply(4).subtract(1).add(1);
console.log(result.output);

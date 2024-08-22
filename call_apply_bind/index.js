// question - call animals such that it prints all animals in object
// const animals = [
//   { species: "Lion", name: "king" },
//   { species: "Whale", name: "Queen" },
// ];
// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }
// // answer
// animals.map(function (animal, i) {
//   printAnimals.call(animal, i);
// });

// question - append an array to another array
// const arr = ["a", "b"];
// const elements = [1, 2, 3, 4];
// // ans
// arr.push.apply(arr, elements);
// console.log(arr); // prints [ 'a', 'b', 1, 2, 3, 4 ]

// question - using apply find min/max number in an array
// const numbers = [5, 6, 1, 4, 9];
// // ans
// console.log(Math.max.apply(null, numbers));

// question - bound function
// function f() {
//   console.log(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g(); // prints global object

// question - bind chaining
// function f() {
//   console.log(this.name);
// }
// f = f.bind({ name: "John" }).bind({ name: "Anne" });
// f(); // this will print John and not Anne, as bind chaining does not exist, once function bound cannot be chained and rebound

// question - fix code in checkPassword function invokation line
// function checkPassword(pass, success, failure) {
//   if (pass === "abc") success();
//   else failure();
// }
// let user = {
//   name: "dhanraj",
//   loginSuccess() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to login`);
//   },
// };
// // Q
// // checkPassword(
// //   "abcs",
// //   user.loginSuccess,
// //   user.loginFailed
// // );
// // ans
// checkPassword(
//   "abcs",
//   user.loginSuccess.bind(user),
//   user.loginFailed.bind(user)
// );

// question - explicit binding with arrow functions
// const age = 32;
// var person = {
//   name: "dhanraj",
//   age: 27,
//   getAgeArrow: () => console.log(this.age),
//   getAge() {
//     cconsole.log(this.age);
//   },
// };
// var person2 = { age: 20 };
// person.getAgeArrow.call(person2); // prints undefined, since we cannot modify context of an arrow function using call,apply or bind the this will be global object in this case
// person.getAge.call(person2); // prints 20

// polyfill for call
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") throw new Error(this + " is not callable");
//   context.fn = this;
//   context.fn(...args);
// };
// let car1 = {
//   color: "red",
//   company: "ferrari",
// };
// function purchaseCar(currency, price) {
//   console.log(
//     `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//   );
// }
// purchaseCar.call(car1, "$", "10");
// purchaseCar.myCall(car1, "$", "100");

// polyfill for apply
// Function.prototype.myApply = function (context = {}, args) {
//   if (typeof this !== "function") throw new Error(this + " is not callable");
//   if (!Array.isArray(args)) throw new Error(args + " is not iterable");
//   context.fn = this;
//   context.fn(...args);
// };
// let car1 = {
//   color: "red",
//   company: "ferrari",
// };
// function purchaseCar(currency, price) {
//   console.log(
//     `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//   );
// }
// purchaseCar.apply(car1, ["$", "10"]);
// purchaseCar.myApply(car1, ["$", "100"]);

// polyfill for bind
// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function")
//     throw new Error(this + " cannot be bound as its not callable");
//   context.fn = this;
//   return function (...newArgs) {
//     return context.fn(...args, ...newArgs);
//   };
// };
// let car1 = {
//   color: "red",
//   company: "ferrari",
// };
// function purchaseCar(currency, price) {
//   console.log(
//     `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//   );
// }
// const boundFunc = purchaseCar.bind(car1, "$", 10);
// boundFunc();
// const myBoundFunc = purchaseCar.myBind(car1, "$", 2000);
// myBoundFunc();

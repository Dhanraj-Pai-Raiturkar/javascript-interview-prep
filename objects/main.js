// Question 2
// function to iterate over all properties of nums and multiply 2 to each of the numeric values
// let nums = {
//   a: 100,
//   b: 200,
//   c: "dhanraj",
// };
// multiplyNumericByTwo = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") obj[key] *= 2;
//   }
// };
// console.log("before", nums);
// multiplyNumericByTwo(nums);
// console.log("after", nums);

// question 3
// what is the output of the following code
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a);

// question 4
// what is the output
// console.log([..."lydia"]);

// question 5
// what is the output
// const user = { name: "lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// question 6
// what is the output
// const settings = {
//   username: "abc",
//   level: 19,
//   health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); //only includes the keys specified in the array

// question 7
// what is the output
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());
// note (this in function vs arrow function)
// scope of the function depends on where the function is defined
// the value of this keyword is determined by how a function is called (runtime binding, value of this is determined at runtime based on how it is being called)
// example 1
// var age = 15;
// function displayAge() {
//   console.log(this.age);
//   console.log(this);
// }
// displayAge(); // prints 15
// const person = {
//   age: 20,
//   displayAge: displayAge,
//   nestedPerson: {
//     age: 25,
//     displayAge: displayAge,
//   },
// };
// person.displayAge(); // prints 20 and this will be the person obj
// person.nestedPerson.displayAge(); // prints 25 and this will be the nestedPerson obj
// example 2
// var person = {
//   age: 28,
//   greet1: function () {
//     console.log("greet1", this.age); // prints 28
//     console.log("greet1", this); // prints person obj
//     function greet2() {
//       console.log("greet2", this.age); // prints undefined
//       console.log("greet2", this); // prints window object (since greet2 was not called by any specific object like greet1)
//     }
//     greet2();
//   },
// };
// person.greet1();
// example 3 (arrow function)
// var person = {
//   age: 28,
//   greet1: function () {
//     console.log("greet1", this.age); // prints 28
//     console.log("greet1", this); // prints person obj
//     const greet2 = () => {
//       console.log("greet2", this.age); // prints 28
//       console.log("greet2", this); // prints person obj (this in arrow function is based on where it in defined)
//     };
//     greet2();
//   },
// };
// person.greet1();

// question 8
// what is destructuring in objects
// let user = {
//   name: "Piyush",
//   age: 24,
// };
// const name = "abc";
// const { name: myName } = user; // in this step we rename the destructured property
// console.log(myName); // prints piyush
// nested destructuring
// let last = "123";
// let user = {
//   name: "Piyush",
//   age: 24,
//   fullName: {
//     first: "piyush",
//     last: "agarwal",
//   },
// };
// const {
//   fullName: { last: myLast },
// } = user;
// console.log(myLast);

// question 9
// what is the output (Rest Operator)
// function getItems(fruitList, favouriteFruit, ...args) {
//   // rest operator has to be always used as the last arguement
//   return [...fruitList, ...args, favouriteFruit];
// }
// console.log(getItems(["banana", "apple"], "pear", "orange"));

// question 10
// what is the output
// let c = { greeting: "hey" };
// let d;
// d = c;
// c.greeting = "hello";
// console.log(d.greeting); // prints hello

// question 11
// what is the output
// console.log({ a: 1 } == { a: 1 }); // prints false
// console.log({ a: 1 } === { a: 1 }); // prints false

// question 12
// what is the output
// let person = {
//   name: "lydia",
// };
// const members = [person];
// person = null;
// console.log(members); // prints array with person object

// question 13
// what is the output
// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply(); // 20
// multiply(); // 20
// multiply(value); //20
// multiply(value); //40

// question 14
// what is shallow copy and deep copy?
// shallow: when one object holds reference of another object we call it a shallow copy
// deep: when we completely clone an object into another it is called deep copy
// how to create deep copy examples
// let user = {
//   name: "abc",
//   age: 40,
// };
// const objClone = Object.assign({ gender: "female" }, user);
// console.log(objClone); // { gender: 'female', name: 'abc', age: 40 }
// const objClone2 = JSON.parse(JSON.stringify(user));
// const objClone3 = { ...user };

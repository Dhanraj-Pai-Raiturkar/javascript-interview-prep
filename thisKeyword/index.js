// this keyword in jaavscript
// explain this keyword (implicit binding)
//case1:
// let user = {
//   name: "abc",
//   age: 27,
//   childObj: {
//     name: "childObject",
//     arrowFunction: () => {
//       console.log("arrowFunction", this);
//     },
//   },
// };
// user.childObj.arrowFunction();
// since invokation of arrowFunction happens in global scope, the this will be global
// case2
// let user = {
//   name: "abc",
//   age: 27,
//   childObj() {
//     const name = "childObject";
//     function tradionalFunction() {
//       console.log("tradionalFunction", this); // prints global object (traditional functions gets its this based on where it is called from [in this case from global obj via childObj function])
//     }
//     tradionalFunction();
//     arrowFunction = () => {
//       console.log("arrowFunction", this); // prints user, since arrow functions gets its this from the context it is defined in
//     };
//     arrowFunction();
//   },
// };
// user.childObj();
// since arrowFunction is invoked inside user object, this will be the user object. (this is called runtime binding / implicit binding)

// what is the result of accessing its ref? why
// function makeUser() {
//   return {
//     user: "dhanraj",
//     ref: this,
//   };
// }
// const user = makeUser();
// console.log(user.ref); // prints undefined as the this is pointing to global object since the parent of makeUser is global object
// to fix this and point this to the object being returned by makeUser, we can do as follows
// function makeUser() {
//   return {
//     user: "dhanraj",
//     ref: () => {
//       return this;
//     },
//   };
// }
// const user = makeUser();
// console.log(user.ref());

// implement the code

const calc = {
  result: undefined,
  add(number) {
    if (isNaN(this.result)) this.result = number;
    else this.result += number;
    return this;
  },
  multiply(number) {
    if (isNaN(this.result)) this.result = number;
    else this.result *= number;
    return this;
  },
  subtract(number) {
    if (isNaN(this.result)) this.result = number;
    else this.result -= number;
    return this;
  },
};
const result = calc.add(10).multiply(2).subtract(10).add(10);
console.log(result.result);

// this keyword works differently in ES6 modules and commonjs modules (at top level)
// in .mjs file or type module files, this is undefined (since es6 modules have strict mode enabled by default)
// in .js files or commonjs modules, this refers to the exports object
// in a js file which is linked to an html page, this at top level will be the window object

// Q1 what is function declaration?
function square(num) {
    return num * num
}

// Q2 what is function expression?
const square1 = function (num) {
    return num * num
}

// Q3 what are first class functions?
// explaination - functions which can be treated as variables. example function can be assigned as variables, passed to other functions as arguements or be returned from other functions

// Q4 what is IIFE?
// immidiately invoked functions
let result = (function(num){
  return num * num;
})(2);
// output based IIFE question
(function(x){
    return (function(y){
        console.log(x)
    })(2);
})(1);
// here x is accessible due to concept of closures
// closures are created when new functions are defined, because that function has access to its outer scope

// Q5 what is function scope?
const index = () => {
    function outerFunction() {
        var num1 = 10, num2 = 5, name='Dhanraj'
        const multiply = () => {
            console.log("multiply", num1 * num2)
        }
        multiply();
        const add = () => {
            var num1 = 1, num2 = 3
            console.log("add", num1 + num2)
        }
        add();
    }
    outerFunction();
}
index()
// explaination - the inner functions (add and multiply) try to find num1 and num2 first in their local scope which is within the function. 
//                  If found it is utilised, else it looks for it in its outer or lexical scope till its found
//                  in case of add the num1 and num2 of outer scope are shadowed by num1 and num2 of adds inner scope, this is called Shadowing in js
// function scope output based question
for(let d=0; d<5; d++){
    setTimeout(function () {
      console.log(d);
    }, d * 1000);
}
// explaination - incase we use var it prints (5,5,5,5,5)
// explaination - incase we use let it prints (0,1,2,3,4)
// this behaviour is seens as let is block scoped, means for each block of set timeout a new let value is created
// but in case of var the original(global) d value is updated in each setTimeout block initialization, where d is getting overridden
// by the time callback of setTimeout is executed the for loop has already completed and overridden the value of var d to 5 in its last loop execution
// but same does not happen for let, as each invocation of setTimeout is a new block and let value is retained via closures

// Q6 function hoisting
functionName() // this will work fine and not throw an error as functions are hoisted completely
function functionName() {
    console.lot("Test function hoisting");
}
//output based questions
var abcx = 21;
function myFunction(){
    console.log(abcx) //value of this will be undefined, as in the new execution context of myFunction we have another abcx which will shadow global variable abcx
    var abcx;
    abcx = 108;
}

// Q7 params vs arguments
// when we call a function the values that we pass are called arguments
// when we receive those values in our function we call it params

// Q8 spread vs rest operator
function kiosk(...nums){ // this is a rest operator
    console.log(nums[0])
}
var numbers = [1,2]
kiosk(...numbers) // this is a spread operator
// output based questions
const fnn = (a, ...numberss, x, y) => { //throws an error, rest parameter must be the last formal parameter
    console.log(x,y)
}
fnn(3,4,5,6)
const fnn1 = (a, x, y, ...numberss) => { //correct version
    console.log(x,y)
}
fnn1(3,4,5,6)

// Q9 what is a callback function.
// a callback function is a function passed into another function as an arguement, which is then invoked inside the outer function to complete some kind of routine or action
const arr45242 = [1,2,3,4]
const diplayValues = (record) => console.log(record)
arr45242.map(diplayValues)

// Q10 what is an arrow function
// arrow function is a shorthand syntax of a normal function decalred using the function keyword
// if no curly braces we dont need to use the return explicitly
// else we need to use return
// implicit return keywork example:
const funcc = num => num * num;
// curly braces
const funccc =  num => {console.log(num); return num*num}
// brackets for arguments
const funcccc = (a,b) => a+b
// arguments
function f23 () {
    console.log(arguements); // consoles the arguments passed to the function
}
f23(12,32,45,56,2,1);
const f24 = () => {
    console.log(arguements); // in case of arrow functions arguments are not defined
}
f24(12,32,45,56,2,1);
//this keyword
const user = {
    username: 'ringo',
    rc: () => {
        console.log("username", this.username) // this wil print undefined as the 'this' keyword here is pointing to the global object, if global object has username property it will print it here
    },
    rc1() {
        console.log("username", this.username) // this will print ringo as the 'this keyword here points to the scope in which it is defined'
    }
}


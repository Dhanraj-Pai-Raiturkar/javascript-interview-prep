# Javascript Interview Prep

## Let Const Var
- **Scope**
scope determines the accessiblity of variables, functions and objects from different parts of code.
__var__ is global scoped
__let__ and __const__ are block scoped
```js
{
    var c = 10
    let d = 20
    const e = 30
}
console.log(c) //pritns 10 (as its global scoped)
console.log(d) //throws reference error, d is not defined, as its only defined within the above block and is block scoped
console.log(e) //throws reference error, d is not defined, as its only defined within the above block and is block scoped
```

- **Shadowing**
variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope.
```js
function shadow() {
    let value = 'Hello'
    if(true){
        let value = 'Hi'
        console.log(value) //prints 'Hi' as outer value is shadowed by the inner value variable
    }
    console.log(value) //prints Hello, as in the outer scope the value for value is still 'Hello'
}
shadow()
```

- **Illegal Shadowing**
when we try to shadow a let declaration using var it is termed as illegal shadowing, and throws an error.
```js
function illegalShadowing() {
    var v1 = 'Hello'
    let b1 = 'good'
    if(true){
        let v1 = 'Hi'
        var b1 = 'bad'
        console.log(v1) //prints Hi
        console.log(b1) //throw uncaught syntax error, b1 is already declared
    }
}
illegalShadowing()
```

- **Declarations**
```js
function declarations() {
    //var
    var a;
    var a;
    // OR
    var a=10;
    var a=20;
    console.log(a) //var can be declared multiple times

    //let
    let x;
    let x;
    console.log(x) // throws error, a is already declared

    //const
    const uy;
    const uy;
    console.log(uy) //throws error, missing initializer
    // OR
    const uy=1;
    const uy=2;
    console.log(uy) //throws error, cannot redeclare block scoped variable
}
```

- **Hoisting**
    - *var*
    ```js
    function hoistingVar() {
    console.log(count) //prints undefined, but does not throw any error
    var count = 10
    // this is due to hoisting, js moves all the variable and function definitions/declarations to the top of the scope at the execution phase.
    // there are 2 phases before the js code is run
    // creation phase, where all the variable and function memory allocation happens
    // execution phase where these variables are assigned values, if not initialized they will be assigned undefined
    }
    ```
    - *let,const*
    ```js
    function hoistingLet() {
    console.log(lCount); //throws error cannot access lcount before initialization (let is also hoisted, but it is in the temporal dead zone, it lies in the script scope and not global scope till it is initialized)
    let lCount
    }
    // const cannot be declared without initialization
    // temporal dead zone: variables are in the scope, but they have not been declared yet
    ```

## General

- **Q1 what is function declaration?**
```js
function square(num) {
    return num * num
}
```

- **Q2 what is function expression?**
```js
const square1 = function (num) {
    return num * num
}
```

- **Q3 what are first class functions?**
functions which can be treated as variables. example function can be assigned as variables, passed to other functions as arguements or be returned from other functions.
</br>

- **Q4 what is IIFE?**
immidiately invoked function expression
```js
let result = (function(num){
  return num * num;
})(2);
```
output based IIFE question
```js
(function(x){
    return (function(y){
        console.log(x)
    })(2);
})(1);
// Qn: what is printed?
// Sn: 1
// explaination
// here x is accessible due to concept of closures
// closures are created when new functions are defined, because that function has access to its outer scope
```

- **Q5 what is function scope?**
```js
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
//explaination:
//the inner functions (add and multiply) try to find num1 and num2 first in their local scope which is within the function. 
//if found it is utilised, else it looks for it in its outer or lexical scope till its found
//in case of add the num1 and num2 of outer scope are shadowed by num1 and num2 of adds inner scope, this is called Shadowing in js
```
output based question
```js
for(let d=0; d<5; d++){
    setTimeout(function () {
      console.log(d);
    }, d * 1000);
}
// explaination - incase we use let it prints (0,1,2,3,4)
for(var d=0; d<5; d++){
    setTimeout(function () {
      console.log(d);
    }, d * 1000);
}
// explaination - incase we use var it prints (5,5,5,5,5)

// this behaviour is seens as let is block scoped, means for each block of set timeout a new let value is created
// but in case of var the original(global) d value is updated in each setTimeout block initialization, where d is getting overridden
// by the time callback of setTimeout is executed the for loop has already completed and overridden the value of var d to 5 in its last loop execution
// but same does not happen for let, as each invocation of setTimeout is a new block and let value is retained via closures
```
- **Q6 function hoisting**
```js
functionName() // this will work fine and not throw an error as functions are hoisted completely
function functionName() {
    console.lot("Test function hoisting");
}
```
output based question
```js
var abcx = 21;
function myFunction(){
    console.log(abcx) //value of this will be undefined, as in the new execution context of myFunction we have another abcx which will shadow global variable abcx
    var abcx;
    abcx = 108;
}
```

- **Q7 params vs arguments**
when we call a function the values that we pass are called arguments
when we receive those values in our function we call it params
</br>

- **Q8 spread vs rest operator**
```js
function kiosk(...nums){ // this is a rest operator
    console.log(nums[0])
}
var numbers = [1,2]
kiosk(...numbers) // this is a spread operator
```
output based question
```js
const fnn = (a, ...numberss, x, y) => { //throws an error, rest parameter must be the last formal parameter
    console.log(x,y)
}
fnn(3,4,5,6)
const fnn1 = (a, x, y, ...numberss) => { //correct version
    console.log(x,y)
}
fnn1(3,4,5,6)
```

- **Q9 what is a callback function?**
a callback function is a function passed into another function as an arguement, which is then invoked inside the outer function to complete some kind of routine or action
```js
const arr = [1,2,3,4]
const diplayValues = (record) => console.log(record)
arr.map(diplayValues)
//displayValues in a callback function consumed by the Array function map
```

- **Q10 what is an arrow function**
arrow function is a shorthand syntax of a normal function decalred using the function keyword
if no curly braces we dont need to use the return explicitly
else we need to use return
```js
//implicit return keywork example:
const funcc = num => num * num;
```
```js
// curly braces:
const funccc =  num => {console.log(num); return num*num}
```
```js
//brackets for more than 1 argument
const funcccc = (a,b) => a+b
```
```js
//arguments
function func1 () {
    console.log(arguements); // consoles the arguments passed to the function
}
func1(12,32,45,56,2,1);
const func2 = () => {
    console.log(arguements); // in case of arrow functions arguments are not defined
}
func2(12,32,45,56,2,1);
```
```js
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
```

- **Q11 whis are closures**
*lexical scope* - lexical scope is the ability for a function to access variables from the parent scope, but not vice versa.
```js
function outer(str) {
    const name = 'firefox'
    console.log("term", term)
    return function inner() {
        var term='term'
        console.log(name, str)
    }
}
outer('lion')();
```
inner function forms a closure in this case, where it is able to access values from its parent or outer environment or lexical scope, but outer function is not able to access inner functions term variable
    **every closure has 3 scopes**
        *__local scope__ (which is within the inner function)*
        *__outer function scope__ (which is the outer function scope)*
        *__global scope__*
this forms a scope chain (access to local scope, its parent scope and parents parent and so on)
</br>
output questions
```js
let count = 0;
(function printCount() {
    if(count === 0){
        let count = 1;  // showing concept
        console.log(count)
    }
    console.log(count)
})()
// Qn: what is the output?
// Sn: 1 0
```
```js
// Qn:
var add_n = createBase(6)
add_n(12) // prints 18(12+6)
add_n(30) // prints 36(30+6)
//write a closure(function) to achieve the above cases
// Sn:
function createBase(number) {
    return function(argNumber){
        return number+argNumber
    }
}
```
```js
// Qn:
function find(index) {
    let a = [];
    for(let i=0; i< 1000000; i++){
        a[i] = i*i;
    }
    console.log(a[index]);
}
let start = performance.now();
find(10);
console.log("time taken find(10)". performance.now() - start);
start = performance.now()
find(60);
console.log("time taken find(60)". performance.now() - start);
// alter find to optimize the time taken to search index using closures
// Sn:
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  //   console.log(a[index]);
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find();
let startSoln = performance.now();
closure(10);
console.log("time taken find(10)", performance.now() - startSoln);
startSoln = performance.now();
closure(60);
console.log("time taken find(60)", performance.now() - startSoln);
```
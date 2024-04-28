// scope of var, let and const 

// var is global scoped
var a = 10
console.log(a)

// let and const are block scoped
{
    var c = 10
    let d = 20
    const e = 30
}
console.log(c) //pritns 10 (as its global scoped)
console.log(d) //throws reference error, d is not defined, as its only defined within the above block and is block scoped
console.log(e) //throws reference error, d is not defined, as its only defined within the above block and is block scoped

// shadowing
function shadow() {
    let value = 'Hello'
    if(true){
        let value = 'Hi'
        console.log(value) //prints 'Hi' as outer value is shadowed by the inner value variable
    }
    console.log(value) //prints Hello, as in the outer scope the value for value is still 'Hello'
}
shadow()

// illegal shadowing (while shadowing it should not cross the boundry of scope)
// i.e we can shadow var variable by using let but not vice versa
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

//declarations of var, let, const
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

function hoistingVar() {
    console.log(count) //prints undefined, but does not throw any error
    var count = 10
    // this is due to hoisting, js moves all the variable and function definitions/declarations to the top of the scope at the execution phase.
    // there are 2 phases before the js code is run
    // creation phase, where all the variable and function memory allocation happens
    // execution phase where these variables are assigned values, if not initialized they will be assigned undefined
}

function hoistingLet() {
    console.log(lCount); //throws error cannot access lcount before initialization (let is also hoisted, but it is in the temporal dead zone, it lies in the script scope and not global scope till it is initialized)
    let lCount
}
// const cannot be declared without initialization
// temporal dead zone: variables are in the scope, but they have not been declared yet



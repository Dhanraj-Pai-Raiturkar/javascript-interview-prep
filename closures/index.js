// closures
// question - implement createBase method
// var addBase = createBase(6);
// addBase(10); // returns 16
// addBase(21); // returns 27
// function createBase(base) {
//   return function (number) {
//     console.log(number + base);
//   };
// }

// question - time optimization
// function find(index) {
//   let arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr[i] = i * i;
//   }
//   return arr[index];
// }
// console.time("3");
// console.log(find(3));
// console.timeEnd("3");
// console.time("5");
// console.log(find(5));
// console.timeEnd("5");
// ans
// function find() {
//   let arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr[i] = i * i;
//   }
//   return function (index) {
//     return arr[index];
//   };
// }
// const closure = find();
// console.time("3");
// console.log(closure(3));
// console.timeEnd("3");
// console.time("5");
// console.log(closure(5));
// console.timeEnd("5");
// since arr never changes and is an expenve task,
// we form a closure of the returned function with the arr
// the arr in this case is only run and created the very firs time the function is invoked
// subsequently we can store the closure in a variable and call the closure directly without everytime executing the loop

// question -setTimeout output
// print 0 1 2
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(closure_i);
//     }, i * 1000);
//   }
// }
// a();
// ans
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(closure_i);
//     }, i * 1000);
//   }
// }
// a();
// print 0 1 2 strictly using var
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(
//       (() => {
//         const closure_i = i;
//         return function () {
//           console.log(closure_i);
//         };
//       })(),
//       i * 1000
//     );
//   }
// }
// a();

// question - how would you use closure to create a private counter
// function counter() {
//   var _counter = 0;
//   function add(value) {
//     return (_counter += value);
//   }
//   function subtract(value) {
//     return (_counter -= value);
//   }
//   function get() {
//     return _counter;
//   }
//   return {
//     add,
//     subtract,
//     get,
//   };
// }
// const { add, subtract, get } = counter();
// console.log(add(2));
// console.log(get());
// console.log(subtract(1));
// console.log(get());

// module pattern
// var module = (function () {
//   function privateMethod() {
//     console.log("private method called");
//   }
//   return {
//     publicMethod() {
//       console.log("public method called");
//       privateMethod();
//     },
//   };
// })();
// module.publicMethod();

// question - make this run only once
// let view;
// function likeThisVideo() {
//   view = "dhanraj pai";
//   console.log("subscribed to", view);
// }
// likeThisVideo();
// likeThisVideo();
// likeThisVideo();
// likeThisVideo();
// likeThisVideo();
// ans
// let view;
// function likeThisVideo() {
//   let counter = 0;
//   return function () {
//     if (counter > 0) {
//       //   counter++;
//     } else {
//       view = "dhanraj pai";
//       console.log("subscribed to", view);
//       counter++;
//     }
//   };
// }
// isSubscribed = likeThisVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

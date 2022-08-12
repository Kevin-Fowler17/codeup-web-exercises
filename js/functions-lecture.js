"use strict";
// // The parts of a function
// // 1. function keyword
// // 2. The name of the function
// // 3. Parentheses with zero or more parameters
// // 4. If there is more than on parameter, the list is comma separate
// // 5. Curly braces contain the function body
// // 6. The function body contains the code that runs when the function is invoked
// // 7. The return statement (optional, but common)
// function sayHello (greeting, name) {
//     console.log `${greeting}, ${name}`;
// }
//
//
// // // Here, number has local scope
// // function localOrGlobal(){
// //     let number = 20;
// // }
// //
// // // Here, number has global scope
// // let number = 20;
// // function localOrGlobal(){
// //     console.log(number);
// // }
//
// let number = 20;
//
// // function declaration
// function localOrGlobal() {
//     let number = 10;
//     console.log(number);
//     anotherNumber = 23;
// }
// localOrGlobal();
// console.log(number);
// // console.log(anotherNumber);

// function expression
// funcation expressions are not hoisted
// bark(); - this will not work, function called before the function will work.
const bark = function(){
    console.log("Woof!")
}

// function declaration
// function declarations are hoisted, so this will work
// yap();
// function yap(){
//     console.log("yip yip");
// }

// // function declaration
// function add(num1, num2){
//     return num1 + num2;
// }
//
// // function expression
// const add = function (num1, num2){
//     return num1 + num2;
// }

// arrow function - if only returning something, you don't need parens around parameters
const add = (num1, num2) => num1 + num2;

// if only one param, no parens needed
const addTen = number => number +10;

// if no parameters, you use empty parens
const helloWorld = () => "Hellow World";

// const add = (num1, num2) => {
//     console.log("Why are you making my life so difficult?")
//     return num1 + num2;
// }


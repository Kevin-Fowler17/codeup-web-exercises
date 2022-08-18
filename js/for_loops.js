"use strict";
// function showMultiplicationTable(number){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }
//
//
// for (let i = 1; i <= 10; i++){
//     let randomNumber = Math.floor(Math.random() * 181) + 20;
//     if (randomNumber % 2 === 0) {
//         console.log(`${randomNumber} is even`);
//     } else {
//         console.log(`${randomNumber} is odd`);
//     }
// }
//
// for (let i = 1; i <= 9; i++) {
//     let row = [];
//     for (let a = 1; a <= i; a++) {
//         row.push(i);
//     }
//     console.log(row.join(""));
// }
//
// for (let i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }
//
// for (let i = 1; i <= 9; i++) {
//     let outputString = "";
//     for (let count = 1; count < i; count++) {
//         outputString = outputString + i;
//     }
//     console.log(outputString);
// }
//
// for (let i = 100; i >= 5; i -= 5){
//     console.log(i);
// }

// let string = "";
// for (let i = 0; i < 8; i++){
//     let word = prompt("Lets make a sentence: Enter a word: ");
//     string += " " + word;
//     if (word === "curses"){
//         console.log("That word is not allowed.");
//         break;
//     }
//     console.log("Your sentence is:" + string);
//
// }

let string = "";
for (let i = 0; i < 8; i++){
    let word = prompt("Lets make a sentence: Enter a word: ");
    if (word === "curses"){
        console.log("That word is not allowed.");
        continue;
    }
    string += " " + word;
    console.log("Your sentence is:" + string);
}
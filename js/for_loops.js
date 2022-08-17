"use strict";
// let total = 0;
//
// function showMultiplicationTable(number){
//     for (let i = 1; i <= 10; i++) {
//         total = number * i;
//         console.log(`${number} x ${i} = ${total}`);
//     }
// }

// let randomNumber = Math.floor(Math.random() * 20) + 180;
// for (let i = 1; i <= 10; i++){
//     if (randomNumber % 2 === 0) {
//         console.log(`${randomNumber} is even`);
//     } else {
//         console.log(`${randomNumber} is odd`);
//     }
//     randomNumber = Math.floor(Math.random() * 20) + 180;
// }

for (let i = 1; i <= 9; i++) {
    let row = [];
    for (let a = 1; a <= i; a++) {
        row.push(i);
    }
    console.log(row.join(""));
}


// for (let i = 100; i >= 5; i -= 5){
//     console.log(i);
// }
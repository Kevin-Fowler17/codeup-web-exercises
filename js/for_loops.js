'use strict';

function showMultiplicationTable (number) {
    for (let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
showMultiplicationTable(7)


function oddEvenNumber() {
    for (let i=1; i <= 10; i++) {
        let randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if (randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }
}
oddEvenNumber();


function numberPyramid() {
    let output = '';
    for (let i = 1; i < 10; i++){
        for (let j = 1; j <= i; j++){
            output = output + i;
        }
        console.log(output);
        output='';
    }
}
numberPyramid();


for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}


function decreaseByFive() {
    for (let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}
decreaseByFive()
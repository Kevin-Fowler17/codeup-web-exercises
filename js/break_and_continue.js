'use strict';

for (let number = 0; number < 1 || number > 50 || number % 2 === 0 || isNaN(number);) {

    number = parseFloat(prompt(`Enter an odd number between 1 and 50.`))

    if (number > 0 && number < 50 && number % 2 !== 0) {

        console.log(`Number to skip is: ${number}`);
        console.log(``);

        for (let i = 1; i < 50; i++){
            if (i % 2 === 0) {
                continue;
            } else if (i === number) {
                console.log(`Yikes! Skipping number: ${i}`);
            } else {
                console.log(`Here is an odd number: ${i}`)
            }
        }
        break;
    }
}
'use strict';

let i = 2;

while (i <= 65536) {
    console.log(i);
    i = i * 2;
}


let allCones = Math.floor(Math.random() * 50) + 50;
console.log(`Starting with ${allCones} cones to sell.`)

do {
    let conesOrdered = Math.floor(Math.random() * 5) + 1;

    if (conesOrdered <= allCones) {
        console.log(`${conesOrdered} cones sold...`);
        allCones = allCones - conesOrdered;
    } else {
        console.log(`Cannot sell you ${conesOrdered} cones I only have ${allCones}...`);
    }

} while (allCones > 0);

console.log(`Yay! I sold them all!`);
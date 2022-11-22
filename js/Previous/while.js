// let number = 1;
//
// while (number <65536){
//     number *= 2;
//     console.log(number);
// }


let allCones = Math.floor(Math.random() * 51) + 50;

console.log(`You have ${allCones} cones to start with.`);

do {
    let conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) {
        console.log(`${conesSold} cones sold...`)
        allCones -= conesSold;
    } else {
        console.log(`Cannot sell you ${conesSold} cones I only have ${allCones}...`)
    }
} while (allCones > 0);

console.log(`Yay! I sold them all!`)
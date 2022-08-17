/*
While loop examples
 */

// let slices = 4;
// console.log(`There are ${slices} slices.`);
// while (slices > 0){
//     console.log("I'll have a slice.");
//     slices = slices - 1;
//     // slices--; short hand for decreasing
//     console.log(`Now there's ${slices} slices left`);
// }
//
// console.log("No more pizza.");

// let counter = 0;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
// }

// let counter = 100;
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }

// let number = 5;
// while (number < 200){
//     number *= 2;
//     console.log(number);
// }

// Pseudo code
// Ask a user for input -- how much something cost
// Assign the user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say there's no more items
// let totalCost = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item."));
// totalCost += priceOfItem;
// alert ("Your total is now $" + totalCost);
// let userInput = "";
//
// while (userInput !== "stop") {
//     userInput = prompt("Enter the price of your item.");
//     if (userInput === "stop") {
//         alert("Your final total is $" + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost += priceOfItem;
//         alert("Your total is now $" + totalCost);
//     }
// }

// let total = 0;
// let priceOfItem;
// while (true){
//     let userInput = prompt("Enter STOP when you are done" + "/n Enter the price of your item.");
//     if (userInput === "STOP") {
//         alert("Your final total is $" + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total += priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

/*
Do While loop examples
 */

let number = Math.ceil(Math.random() * 6);
let guess;
console.log(guess);
do {
    guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);
alert(`Your guess of ${guess} matches the number ${number}.`)
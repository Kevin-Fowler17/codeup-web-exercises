// alert(`Hello from external JavaScript`);

alert(`Welcome to my Website!`);

let favoriteColor = prompt(`What is your favorite color?`);
alert(`Awesome, ${favoriteColor} is my favorite color too!`);


let howMuchPerDay = parseInt(prompt(`How much would you like to pay per movie per day?`));
let daysRentedLittleMermaid = parseInt(prompt(`How many days did you have "The Little Mermaid"?`));
let daysRentedBrotherBear = parseInt(prompt(`How many days did you have "Brother Bear"?`));
let daysRentedHercules = parseInt(prompt(`How many days did you have "Hercules"?`));

let totalOwedForAllMovies = (daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHercules) * howMuchPerDay;

alert(`The cost to rent a movie is $${howMuchPerDay} a day. Based on that price, you owe $${totalOwedForAllMovies}.`);

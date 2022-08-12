console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userFavoriteColor = prompt("What is your favorite color?");

alert("The color " + userFavoriteColor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
let daysRentedTheLittleMermaid = prompt("How many days did you have The Little Mermaid?");
let daysRentedBrotherBear = prompt("How many days did you have Brother Bear?");
let daysRentedHercules = prompt("How many days did you have Hercules?");
let movieCostPerDay = prompt("How much does a movie cost per day?");
let totalCost = (daysRentedTheLittleMermaid * movieCostPerDay) + (daysRentedBrotherBear * movieCostPerDay) + (daysRentedHercules * movieCostPerDay);
alert("You owe $" + totalCost);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.
let googlePerHour = prompt("How much does Google pay per hour?");
let hoursWorkedGoogle = prompt("How many hours did you work at Google");
let amazonPerHour = prompt("How much does Amazon pay per hour?");
let hoursWorkedAmazon = prompt("How many hours did you work at Amazon");
let facebookPerHour = prompt("How much does FaceBook pay per hour?");
let hoursWorkedFaceBook =  prompt("How many hours did you work at FaceBook");

let totalPay = (hoursWorkedGoogle * googlePerHour) + (hoursWorkedAmazon * amazonPerHour) + (hoursWorkedFaceBook * facebookPerHour);

alert("Your total pay is $" + totalPay);

//A student can be enrolled in a class only if the class is not full and the class schedule
// does not conflict with her current schedule.
let isClassFull = confirm("Is there room in the class?");
let doesClassScheuleConflict = confirm("Does the class fit in your schedule?");

if ((isClassFull) && (doesClassScheuleConflict)) {
    alert("Great, you can enroll in the class!");
} else {
    alert("To bad, no class for you.");
}

//A product offer can be applied only if a person buys more than 2 items, and the offer has not
// expired. Premium members do not need to buy a specific amount of products.
let numberOfItemsBought = prompt("How many items did you buy?");
let hasTheOfferExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Are you a premium member?");

if ((premiumMember === true || numberOfItemsBought > 1) && (hasTheOfferExpired === false)) {
    alert("The product offer can be applied")
} else {
    alert("The product offer cannot be applied.")
}


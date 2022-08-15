// let flavor = prompt("Welcome, what flavor would you like?");
//
// flavor = flavor.toLowerCase();

// if (flavor === "chocolate") {
//     alert("Once chocolate coming right up.");
// } else if (flavor === "vanilla") {
//     alert("Once vanilla coming right up.");
// } else {
//     alert("We do not have any other flavor. Peace.");
// }

// switch (flavor) {
//     case("chocolate"):
//         alert("Chocolate coming right up.");
//         break;
//     case("vanilla"):
//         alert("vanilla coming right up.");
//         break;
//     case("strawberry"):
//         alert("strawberry coming right up.");
//         break;
//     default:
//         alert("We do not have any other flavor. Peace.");
// }

// let decision = confirm("Are you sure you want to close this page?");
// alert(decision);

// if (decision) {
//     alert("OK, closing the page.");
// } else {
//     alert("OK, keeping page open.")
// }

// (decision)?alert("Closing the page."):alert("Keeping page open.");

// let number = prompt("Enter a number:");

// function divisibleByFive(number) {
//     alert((number % 5 === 0 && number !== null && number !== "") ? "That number is divisible by 5." : "That number is not divisible by 5.");
// }
//
// divisibleByFive(prompt("Enter a number:"));

// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP");
//     }
// }
//
// alertMVPCustomer(1001);

function isMVP(purchaseTotal){
    return purchaseTotal > 1000;
}

let customer1purchase = 1001;

if (isMVP(customer1purchase)){
    alert("MVP;")
}
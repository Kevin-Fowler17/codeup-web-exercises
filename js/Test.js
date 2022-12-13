// (function(){
//     "use strict";
//
//     let fruits = ["apple", "pear", "plum", "apple", "banana", "guava", "apple"];
//     let appleIndex = fruits.indexOf("apple");
//
//     console.log(fruits);
//     console.log(appleIndex)
//
//     for (; appleIndex >= 0;) {
//         fruits.splice(appleIndex,1);
//         appleIndex = fruits.indexOf("apple");
//     }
//
//     console.log(fruits);
//
// })();

// "use strict";
//
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // use array notation to access "make" property
// console.log("The car make is: " + car["make"]);
//
// // use dot notation to access "model" property
// console.log("The car model is: " + car.model);
//
// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });
//
//
//
//
// // create a honk method on the car object
// car.honk = function () {
//     alert("Honk! Honk!");
// };
//
// // honk the horn
// car.honk();
//
//
//
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // create a logMakeModel method on the car object
// car.logMakeModel = function () {
//     console.log("Car make/model is: " + this.make + " " + this.model);
// };
//
// // log the make/model
// car.logMakeModel();
//
//
// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

// function roundFloat(floatNum, decimalDigit) {
//     // 1. multiple floatNum by 10 to the power of decimalDigit
//     floatNum = floatNum * (10 ** decimalDigit);
//     // 2. call Math.round on floatNum
//     floatNum = Math.round(floatNum);
//     // 3. divide floatNum by 10 to the power of decimalDigit
//     floatNum = floatNum / (10 ** decimalDigit);
//
//     return floatNum;
// }
//
// roundFloat(3.1415,3)


function createPhoneNumber(numbers){

    let phoneNumber = numbers.join("");

    let areaCode = phoneNumber.slice(0,3);
    let exchangeCode = phoneNumber.slice(3,6);
    let subscriberNumber = phoneNumber.slice(6);

    return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
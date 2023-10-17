// Day 0
// Write a line of code that prints parameterVariable to stdout using console.log:
console.log(parameterVariable);

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log (firstInteger + Number(secondInteger))
// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
console.log (firstDecimal + parseFloat(secondDecimal))
// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log (firstString + secondString)


// Day 1
// Return a number denoting the rectangle's area.
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}
// Return a number denoting the perimeter of a rectangle.
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length * 2) + (width * 2);
    return perimeter;
}

/*
 * Create the function factorial here
 */
function factorial(n) {

    let total = 1;

    for (let i = 0; n > 1; i++) {
        total *= n;
        n--
    }
    return total;
}

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    console.log (PI * (r * r));
    // Print the perimeter of the circle:
    console.log (2 * PI * r);
    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}


// Day 2
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    for(let i = 0; i < s.length; i++) {
        if ("aeiou".indexOf(s.charAt(i).toLowerCase()) != -1) {
            console.log (s.charAt(i));
        }
    }

    for (let i = 0; i < s.length; i++) {
        if ("aeiou".indexOf(s.charAt(i).toLowerCase()) === -1) {
            console.log (s.charAt(i));
        }
    }

}

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    if (score >= 26) {
        grade = "A";
    } else if (score >= 21 && score <= 25) {
        grade = "B";
    } else if (score >= 16 && score <= 20) {
        grade = "C";
    } else if (score >= 11 && score <= 15) {
        grade = "D";
    } else if (score >= 6 && score <= 10) {
        grade = "E";
    } else {
        grade = "F";
    }

    return grade;
}

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case "aeiou".indexOf(s.charAt(0)) !== -1:
            letter = "A"
            break;
        case "bcdfg".indexOf(s.charAt(0)) !== -1:
            letter = "B"
            break;
        case "hjklm".indexOf(s.charAt(0)) !== -1:
            letter = "C"
            break;
        default:
            letter = "D";
    }

    return letter;
}


// Day 3
/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let secondLargestNumber = 0;
    nums.sort(function(a, b) {
        return a - b;
    })

    for (let i = 1; i < nums.length; i++) {
        if (nums[nums.length - i] < nums[nums.length - 1]) {
            secondLargestNumber = nums[nums.length - i]
            break;
        }
    }

    return secondLargestNumber;
}

/*
* Complete the reverseString function
* Use console.log() to print to stdout.
*/
function reverseString(s) {
    try {
        let reversedString = s.split("").reverse().join("");
        console.log(reversedString);
    } catch (error) {
        console.log("s.split is not a function")
        console.log(s)
    }
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try{
        if(a > 0) {
            return "YES";
        } else if (a === 0) {
            throw new Error("Zero Error");
        } else {
            throw new Error("Negative Error");
        }
    } catch (error) {
        return error.message;
    }
}


// Day 4
/*
* Complete the Rectangle function
*/
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

/*
* Return a count of the total number of objects 'o' satisfying o.x == o.y.
*
* Parameter(s):
* objects: an array of objects with integer properties 'x' and 'y'
*/
function getCount(objects) {
    let count = 0;

    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            count++;
        }
    }
    return count;
}

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor (sideLengths) {
        this.sideLengths = sideLengths;
    }

    perimeter() {
        return this.sideLengths.reduce((sum, sideLength) => sum + sideLength, 0);
    }
}


// Day 5
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function() {
    return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
    constructor(side) {
        super(side, side);
    }
}

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let [area, perimeter] = expressions;

    let value = Math.sqrt(perimeter * perimeter - (16 * area));

    return [((perimeter - value) / 4), ((perimeter + value) / 4)];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {

    let workingArray = nums => nums.map(value => (value % 2 === 0) ? value * 2 : value * 3);

    let newArray = workingArray(nums);

    return newArray;
}


// Day 6
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
    let max = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let ab = (a&b);

            if (ab < k && ab > max) {
                max = ab;
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    dayName = days[(new Date(dateString)).getDay()];
    return dayName;
}


// Day 7
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/i;

    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
    let re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d+/g;

    /*
     * Do not remove the return statement
     */
    return re;
}


// Day 8
// Create a button
// HTML
<!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <link rel="stylesheet" href="css/button.css" type="text/css"
//     <title>Button</title>
//     </head>
//     <body>
//     <button id="btn">0</button>
//
//     <script src="js/button.js" type="text/javascript"></script>
//     </body>
//     </html>

// CSS
// #btn {
//     width: 96px;
//     height: 48px;
//     font-size: 24px;
// }
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let current_button_value = this.innerHTML;
    this.innerHTML = parseInt(current_button_value) + 1;
});

// Buttons Container
// CSS
// #btns {
//     width: 75%;
// }
//
// .buttons {
//     width: 30%;
//     height: 48px;
//     font-size: 24px;
// }

// HTML
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
//     <title>Buttons Grid</title>
// </head>
// <body>
//
// <div id="btns">
//     <button id="button1" class="buttons">1</button>
//     <button id="button2" class="buttons">2</button>
//     <button id="button3" class="buttons">3</button>
//     <button id="button4" class="buttons">4</button>
//     <button id="button5" class="buttons">5</button>
//     <button id="button6" class="buttons">6</button>
//     <button id="button7" class="buttons">7</button>
//     <button id="button8" class="buttons">8</button>
//     <button id="button9" class="buttons">9</button>
//     </div>
//
//     <script src="js/buttonsGrid.js" type="text/javascript"></script>
//     </body>
//     </html>

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

function rotateButtons() {
    [button1.innerText,
        button2.innerText,
        button3.innerText,
        button4.innerText,
        button6.innerText,
        button7.innerText,
        button8.innerText,
        button9.innerText] =
        [button4.innerText,
            button1.innerText,
            button2.innerText,
            button7.innerText,
            button3.innerText,
            button8.innerText,
            button9.innerText,
            button6.innerText]
}

button5.addEventListener("click", rotateButtons)


// Day 9
// CSS
// body {
//     width: 33%;
// }
//
// #result {
//     background-color: lightgray;
// border: solid;
// height: 48px;
// font-size: 20px;
// }
//
// #btn0, #btn1 {
//     background-color: lightgreen;
// color: brown;
// }
//
// #btnClr, #btnEql {
//     background-color: darkgreen;
// color: white;
// }
//
// #btnSum, #btnSub, #btnMul, #btnDiv {
//     background-color: black;
// color: red;
// }
//
// .button {
//     width: 25%;
//     height: 36px;
//     font-size: 18px;
// margin: 0px;
// float: left;
// }

// HTML
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
//     <title>Binary Calculator</title>
// </head>
// <body>
// <div id="container">
//     <div id="result"></div>
//     <div id="btns">
//     <button id="btn0" class="button" onclick="clkZero">0</button>
//     <button id="btn1" class="button" onclick="clkOne">1</button>
//     <button id="btnClr" class="button" onclick="clkClr">C</button>
//     <button id="btnEql" class="button" onclick="clkEql">=</button>
//     <button id="btnSum" class="button" onclick="clkSum">+</button>
//     <button id="btnSub" class="button" onclick="clkSub">-</button>
//     <button id="btnMul" class="button" onclick="clkMul">*</button>
//     <button id="btnDiv" class="button" onclick="clkDiv">/</button>
//     </div>
//     </div>
//
//     <script src="js/binaryCalculator.js" type="text/javascript"></script>
//     </body>
//     </html>

let result = document.getElementById("result");

function checkIfOperator(){
    if (result.innerHTML.endsWith('+') || result.innerHTML.endsWith('-') || result.innerHTML.endsWith('*') || result.innerHTML.endsWith('/')) {
        return true;
    }
}

function clickedZero() {
    result.innerHTML +='0';
}

function clickedOne() {
    result.innerHTML +='1';
}

function clickedSum() {
    if(result.innerHTML.length != 0 && !checkOperator()){
        result.innerHTML +='+';
    }
}

function clickedSub() {
    if(result.innerHTML.length != 0 && !checkOperator()){
        result.innerHTML +='-';
    }
}

function clickedMul() {
    if(result.innerHTML.length != 0 && !checkOperator()){
        result.innerHTML +="*";
    }
}

function clickedDiv() {
    if(result.innerHTML.length != 0 && !checkOperator()){
        result.innerHTML +="/";
    }
}

function clickedClr() {
    result.innerHTML = '';
}
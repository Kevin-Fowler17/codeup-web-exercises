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

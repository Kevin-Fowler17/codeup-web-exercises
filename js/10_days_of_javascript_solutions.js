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
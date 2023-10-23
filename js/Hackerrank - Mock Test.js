/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log ("FizzBuzz");
        } else if ((i % 3 === 0) && (i % 5 != 0)) {
            console.log ("Fizz");
        } else if ((i % 3 != 0) && (i % 5 === 0)) {
            console.log ("Buzz");
        } else {
            console.log (i);
        }
    }

}


/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);

    let n = arr.length

    if (n % 2 === 1) {
        return arr[Math.floor(n / 2)];
    }

    let mid1 = arr[n / 2 - 1];
    let mid2 = arr[n / 2]

    return (mid1 + mid2) / 2;
}
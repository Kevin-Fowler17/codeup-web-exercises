// Day 1
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


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    let posPercent = 0;
    let negPercent = 0;
    let ZeroPercent = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posCount++
        } else if (arr[i] < 0) {
            negCount++
        } else {
            zeroCount++
        }
    }

    posPercent = (posCount / arr.length);
    negPercent = (negCount / arr.length);
    ZeroPercent = (zeroCount / arr.length);

    console.log (posPercent.toFixed(6));
    console.log (negPercent.toFixed(6));
    console.log (ZeroPercent.toFixed(6));

}


/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);

    let minSum = 0;
    let maxSum = 0;

    minSum = arr[0] + arr[1] + arr[2] + arr[3];
    maxSum = arr[1] + arr[2] + arr[3] + arr[4];

    console.log (minSum + " " + maxSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}


/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let isPM = s.includes("PM");
    s = s.replace(/(AM|PM)/, "");

    let timeArr = s.split(":");
    let hours = parseInt(timeArr[0], 10);

    if (isPM && hours !== 12) {
        hours += 12;
    } else if (!isPM && hours === 12){
        hours = 0
    }

    let hoursFormatted = hours.toString().padStart(2, "0");
    let militrayTime = [hoursFormatted, timeArr[1],  timeArr[2]].join(":");

    return militrayTime;

}


// Day 2
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function lonelyinteger(a) {
    // Write your code here
    let count = {};

    for (let num of a) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }

    for (let num in count) {
        if (count[num] === 1) {
            return parseInt(num);
        }
    }

}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // Write your code here
    let totalDiagLeftToRight = 0;
    let totalDiagRightToLeft = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        totalDiagLeftToRight += arr[i][i];
        totalDiagRightToLeft += arr[i][arrLength - 1 - i];
    }

    return Math.abs(totalDiagLeftToRight - totalDiagRightToLeft);
}


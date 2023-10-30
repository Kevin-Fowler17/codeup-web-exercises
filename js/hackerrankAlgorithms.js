/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let gradesRounded = [];

    for (let i = 0; i < grades.length; i++) {
        let onesPositionValue = grades[i] % 10;
        if (grades[i] < 38){
            gradesRounded.push(grades[i]);
        } else if (onesPositionValue === 3 || onesPositionValue === 8) {
            gradesRounded.push(grades[i] + 2) ;
        } else if (onesPositionValue === 4 || onesPositionValue === 9) {
            gradesRounded.push(grades[i] + 1);
        } else {
            gradesRounded.push(grades[i]);
        }
    }

    return gradesRounded;
}


/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let heightOfTallestCandle = Math.max(...candles);

    let countOfTallestCandle = candles.filter(candle => candle === heightOfTallestCandle).length;

    return countOfTallestCandle;

}


/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {

        let outputString = '';

        for (let j = 1; j <= n - i; j++) {
            outputString += ' ';
        }

        for (let k = 1; k <= i; k++) {
            outputString += '#';
        }

        console.log (outputString)
    }

}


/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    return ar.reduce((accumulator, currValue) => accumulator + currValue, 0);
}


/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let startingPage = Math.floor(p / 2);
    let toEndPage = Math.floor(n / 2) - startingPage;

    return Math.min(startingPage, toEndPage);

}


/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
    // Write your code here
    // return (s - 1 + m - 1) % n + 1;

    let currSeat = s;

    for (let i = 1; i <= m; i++) {

        if (currSeat > n) {
            currSeat = 1;
        }

        if (i === m) {
            return currSeat;
        }

        currSeat++;
    }
}


/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    let countOfSquareInts = 0;

    for (let i = a; i <= b; i++) {
        let squareRootOfI = Math.sqrt(i);

        if (squareRootOfI % 1 === 0) {
            countOfSquareInts++
        }
    }
    return countOfSquareInts;
}

// let squareRootA = Math.ceil(Math.sqrt(a));
// let squareRootB = Math.floor(Math.sqrt(b));
//
// let countOfSquareInts = squareRootB - squareRootA + 1;
//
// return countOfSquareInts;
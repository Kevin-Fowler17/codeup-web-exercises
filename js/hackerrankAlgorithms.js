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



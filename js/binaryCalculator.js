let result = document.getElementById("result");

function checkOperator(){
    if(result.innerHTML.endsWith('+') || result.innerHTML.endsWith('-') || result.innerHTML.endsWith('*') || result.innerHTML.endsWith('/')){
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
    if(result.innerHTML.length!=0 && !checkOperator()){
        result.innerHTML +='+';
    }
}

function clickedSub() {
    if(result.innerHTML.length!=0 && !checkOperator()){
        result.innerHTML +='-';
    }
}

function clickedMul() {
    if(result.innerHTML.length!=0 && !checkOperator()){
        result.innerHTML +="*";
    }
}

function clickedDiv() {
    if(result.innerHTML.length!=0 && !checkOperator()){
        result.innerHTML +="/";
    }
}

function clickedClr() {
    result.innerHTML = '';
}

function clickedEql() {
    if(!checkOperator()) {
        let re = /\d+/g
        let re2 = /[\+\-\*\/]+/g
        let numbers = result.innerHTML.match(re);
        let operators = result.innerHTML.match(re2);
        while(operators.length>0) {
            if(operators.includes('*')) {
                let indexOfMul = operators.indexOf('*');
                let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
                numbers.splice(indexOfMul,2);
                numbers.splice(indexOfMul,0,mul.toString(2));
                operators.splice(indexOfMul,1);
            } else if (operators.includes('/')) {
                let indexOfDiv = operators.indexOf('/');
                let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
                numbers.splice(indexOfDiv,2);
                numbers.splice(indexOfDiv,0,division.toString(2));
                operators.splice(indexOfDiv,1);
            } else if (operators.includes('+')) {
                let indexOfSum = operators.indexOf('+');
                let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
                numbers.splice(indexOfSum,2);
                numbers.splice(indexOfSum,0,sum.toString(2));
                operators.splice(indexOfSum,1);
            } else {
                let indexOfSub = operators.indexOf('-');
                let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
                numbers.splice(indexOfSub,2);
                numbers.splice(indexOfSub,0,sub.toString(2));
                operators.splice(indexOfSub,1);
            }
        }
        result.innerHTML = numbers[0].toString(2);
    } else {
        alert("Line must end with a number!!!")
    }
}
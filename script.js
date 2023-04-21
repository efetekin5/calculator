const firstNumber = 6;
const operator = '*';
const secondNumber = 2;

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operater(number1, operator, number2) {
    if (operator == '*') {
        return multiply(number1, number2);
    } else if (operator == '+') {
        return add(number1, number2);
    } else if (operator == '-') {
        return substract(number1, number2);
    } else if (operator == '/') {
        return divide(number1, number2);
    }
}

console.log(add(5,3));
console.log(substract(5,3));
console.log(multiply(5,3));
console.log(divide(6,3));
console.log(operater(20, '*', 5));
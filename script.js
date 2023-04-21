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

function operate(number1, operator, number2) {
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

function display(element) {
    let displayDiv = document.querySelector('.display');
    displayDiv.innerHTML += `${element.innerHTML}`;
}

function reset() {
    let displayDiv = document.querySelector('.display');
    displayDiv.innerHTML = '';
}

function delet() {
    let displayDiv = document.querySelector('.display');
    let newDiv = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1);
    displayDiv.innerHTML = newDiv;
}

let addition = document.querySelector('.add');
addition.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    let operator = displayDiv.innerHTML.slice()
    let additionNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1);
    console.log(additionNumber);
    reset();
})
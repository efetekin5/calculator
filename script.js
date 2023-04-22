let firstNumber = 0;
let operator = '';
let secondNumber = 0;

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
    operator = displayDiv.innerHTML.slice(displayDiv.innerHTML.length-1, displayDiv.innerHTML.length)
    firstNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1).replace(/\s/g, '');
    firstNumber = parseInt(firstNumber, 10);
    reset();
})

let substraction = document.querySelector('.substract');
substraction.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    operator = displayDiv.innerHTML.slice(displayDiv.innerHTML.length-1, displayDiv.innerHTML.length)
    firstNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1).replace(/\s/g, '');
    firstNumber = parseInt(firstNumber, 10);
    reset();
})

let multiplication = document.querySelector('.multiply');
multiplication.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    operator = displayDiv.innerHTML.slice(displayDiv.innerHTML.length-1, displayDiv.innerHTML.length)
    firstNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1).replace(/\s/g, '');
    firstNumber = parseInt(firstNumber, 10);
    reset();
})

let division = document.querySelector('.divide');
division.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    operator = displayDiv.innerHTML.slice(displayDiv.innerHTML.length-1, displayDiv.innerHTML.length)
    firstNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1).replace(/\s/g, '');
    firstNumber = parseInt(firstNumber, 10);
    reset();
})

let equals = document.querySelector('.calculate');
equals.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    secondNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1);
    secondNumber = parseInt(secondNumber, 10);
    let result = operate(firstNumber, operator, secondNumber);
    displayDiv.innerHTML = result;
})
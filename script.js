let firstNumber = '';
let operator = '';
let secondNumber = '';

function add(a, b) {
    return Math.round((a + b)*100) / 100;
}

function substract(a, b) {
    return Math.round((a - b)*100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b)*100) / 100;
}

function divide(a, b) {
    return Math.round((a / b)*100) / 100;
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



let operation = document.querySelectorAll('.operation');
operation.forEach((btn) => {
    btn.addEventListener('click', () => {
        let displayDiv = document.querySelector('.display');
        operator = displayDiv.innerHTML.slice(displayDiv.innerHTML.length-1, displayDiv.innerHTML.length)
        firstNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1).replace(/\s/g, '');
        firstNumber = parseFloat(firstNumber, 10);
        reset();
    })
})

let equals = document.querySelector('.calculate');
equals.addEventListener('click', () => {
    let displayDiv = document.querySelector('.display');
    secondNumber = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length-1);
    secondNumber = parseFloat(secondNumber, 10);
    let result = operate(firstNumber, operator, secondNumber);
    displayDiv.innerHTML = result;
    secondNumber = '';
    firstNumber = '';
    operator = '';
})
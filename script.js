const display = document.querySelector('#display');
const container = document.querySelector('#container');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

let a = '';
let b = '';
let storedVal = '';
let displayVal = '';

function clearDisplay() {
  display.textContent = '';
}

function updateDisplay(value) {
  display.textContent += String(value);
}



function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
};
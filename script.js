let a = ''
let b = ''
let operator = ''
let displayVal = ''

const allBtns = document.querySelector('#all-btns');
const mainBtns = document.querySelector('#main-btns');
const display = document.querySelector('#display');
const clearBtn = mainBtns.querySelector('#clear-btn');
const equalsBtn = mainBtns.querySelector('#equals-btn');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divided');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

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
}

function displayNumber(event) {
  display.textContent += event.target.textContent;
  displayVal = display.textContent
}

function clearDisplay() {
  display.textContent = '';
}

mainBtns.addEventListener('click', event => event.target.className === 'number' ? displayNumber(event) : null);
clearBtn.addEventListener('click', clearDisplay);
plusBtn
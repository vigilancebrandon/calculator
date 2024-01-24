let a = ''
let b = ''
let operator = ''
let displayVal = ''

const allBtns = document.querySelector('#all-btns');
const mainBtns = document.querySelector('#main-btns');
const display = document.querySelector('#display');

//const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

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

function updateDisplay(event) {
  if (event.target.className === 'number') {
    display.textContent += event.target.textContent;
  }
}

mainBtns.addEventListener('click', updateDisplay);
let a = '';
let b = '';
let operator = '';
let displayVal = '';

const allBtns = document.querySelector('#all-btns');
const mainBtns = document.querySelector('#main-btns');
const display = document.querySelector('#display');
const clearBtn = mainBtns.querySelector('#clear-btn');
const equalsBtn = mainBtns.querySelector('#equals-btn');
const operatorBtns = document.querySelector('#operator-btns')
const addBtn = operatorBtns.querySelector('#add');
const subtractBtn = operatorBtns.querySelector('#subtract');
const multiplyBtn = operatorBtns.querySelector('#multiply');
const divideBtn = operatorBtns.querySelector('#divided');

function add(a, b) {
  return a + b;
};

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

function updateDisplay(value) {
  display.textContent += value;
  displayVal = display.textContent
};

function clearDisplay() {
  display.textContent = '';
};

mainBtns.addEventListener('click', event => event.target.className === 'number' ? updateDisplay(event.target.textContent) : null);
clearBtn.addEventListener('click', () => {
  clearDisplay();
  a = '';
  b = '';
  operator = '';
  displayVal = '';
});
operatorBtns.addEventListener('click', (event) => {
  a = +displayVal;
  operator = event.target.textContent;
  updateDisplay(operate(a, b, operator));
  clearDisplay();
});

equalsBtn.addEventListener('click', (event) => {
  b = +displayVal;
  let result = operate(a, b, operator);
  clearDisplay();
  updateDisplay(result);
});
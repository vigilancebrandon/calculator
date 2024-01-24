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
    case '%':
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

function initialize() {
  a = '';
  b = '';
  operator = '';
  displayVal = '';
}

mainBtns.addEventListener('click', event => {
  event.target.className === 'number' 
  ? updateDisplay(event.target.textContent) 
  : null;
});

operatorBtns.addEventListener('click', (event) => {
  if (a === '') {
    a = parseFloat(displayVal);
    operator = event.target.textContent;
    clearDisplay();
  } else {
    b = parseFloat(displayVal);
    a = operate(a, b, operator);
    operator = event.target.textContent;
    clearDisplay();
  }
});

equalsBtn.addEventListener('click', () => {
  b = parseFloat(displayVal);
  let result = operate(a, b, operator);
  clearDisplay();
  updateDisplay(result);
});

clearBtn.addEventListener('click', () => {
  clearDisplay();
  initialize();
});
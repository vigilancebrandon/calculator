let a = '';
let b = '';
let operator = '';
let storedVal = '';

const allBtns = document.querySelector('#all-btns');
const numBtns = document.querySelector('#num-btns');
const display = document.querySelector('#display');
const clearBtn = document.querySelector('#clear-btn');
const equalsBtn = document.querySelector('#equals-btn');
const operatorBtns = document.querySelector('#operator-btns')
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divided');

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
  display.textContent += String(value);
  storedVal = display.textContent;
};

function clearDisplay() {
  display.textContent = '';
};

function initialize() {
  a = '';
  b = '';
  operator = '';
  storedVal = '';
}

clearBtn.addEventListener('click', () => {
  clearDisplay();
  initialize();
});

numBtns.addEventListener('click', event => {
  if (event.target.className === 'number') {
    display.textContent += event.target.textContent;
    storedVal = display.textContent;
  }
});

operatorBtns.addEventListener('click', (event) => {
  if (a === '') {
    a = parseFloat(storedVal);
    operator = event.target.textContent;
    clearDisplay();
  } else {
    b = parseFloat(storedVal);
    a = operate(a, b, operator);
    operator = event.target.textContent;
    clearDisplay();
  }
});

equalsBtn.addEventListener('click', () => {
  console.log('click');
  b = parseFloat(storedVal);
  const result = operate(a, b, operator);
  clearDisplay();
  updateDisplay(result);
  initialize();
});

//allBtns.addEventListener('mousedown', (event) => event.target.style.backgroundColor = 'red');

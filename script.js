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
let result = '';
let displayVal = '';

container.addEventListener('click', (event) => {
  switch (event.target.className) {
    case 'number':
      updateDisplay(event.target.textContent);
      break;
    case 'operator':
      calculate(event.target.textContent);
      break;
    case 'equals':
      equals();
      break;
    case 'clear':
      clearAll();
      break;
  }
})

function clearDisplay() {
  display.textContent = '';
}

function updateDisplay(value) {
  if (b !== '') {
    clearDisplay();
  }
  display.textContent += String(value);
}

function calculate(operatorBtn) {
  storedVal = display.textContent;
  clearDisplay();
  if (a === '') {
    a = parseFloat(storedVal);
    operator = operatorBtn;
  } else if (a !== '') {
    b = parseFloat(storedVal);
    result = operate(a, b, operator);
    clearDisplay();
    updateDisplay(result);
    operator = operatorBtn;
    a = result;
  }
}

function equals() {
  b = parseFloat(display.textContent);
  result = operate(a, b, operator);
  clearDisplay();
  updateDisplay(result);
  a = result;
  operator = '=';
}

function clearAll() {
  clearDisplay();
  a = '';
  b = '';
  result = '';
  operator = '';
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
    case '=':
      return a;
  }
};
const display = document.querySelector('#display');
const container = document.querySelector('#container');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('#decimal')

let a = '';
let b = '';
let operator = '';
let storedVal = '';
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
  };
  display.textContent += String(value);
  setDecimalBtn();
}

function setDecimalBtn() {
  if (display.textContent.includes('.')) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
}
//currently, cannot add decimal after clicking '=', because trying to click number clears display

function calculate(operatorBtn) {
  storedVal = parseFloat(display.textContent);
  clearDisplay();
  if (operatorBtn === '%') {
      updateDisplay(storedVal / 100);
  } else if (operatorBtn === '+/-') {
      updateDisplay(storedVal * -1);
  } else if (a === '') {
    a = storedVal;
    operator = operatorBtn;
  } else if (a !== '') {
    b = storedVal;
    a = operate(a, b, operator);
    clearDisplay();
    updateDisplay(a);
    operator = operatorBtn;
  }
}

function equals() {
  b = parseFloat(display.textContent);
  a = operate(a, b, operator);
  clearDisplay();
  updateDisplay(a);
  operator = '=';
}

function clearAll() {
  clearDisplay();
  a = '';
  b = '';
  operator = '';
}

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
    case '=':
      return a;
  }
}
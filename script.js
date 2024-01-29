let a = '';
let b = '';
let operator = '';
let storedVal = '';
let result = ''

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

function initialize() {
  a = '';
  b = '';
  operator = '';
  storedVal = '';
}

function clearDisplay() {
  display.textContent = '';
};

function updateDisplay(value) {
  if (b !== '') {
    clearDisplay();
  }
  display.textContent += value;
};

clearBtn.addEventListener('click', () => {
  clearDisplay();
  initialize();
});

numBtns.addEventListener('click', event => {
  if (event.target.className === 'number') {
    updateDisplay(event.target.textContent);
  };
});

/*
operatorBtns.addEventListener('click', (event) => {
  storedVal = display.textContent;
  if (a === '') {
    a = parseFloat(storedVal);
    operator = event.target.textContent;
    clearDisplay();
  } else {
    b = parseFloat(storedVal);
    result = operate(a, b, operator);
    updateDisplay(result);
    operator = event.target.textContent;
    a = '';
  }
});
*/

operatorBtns.addEventListener('click', (event) => {
  storedVal = display.textContent;
  if (a === '') {
    a = parseFloat(storedVal);
    operator = event.target.textContent;
    clearDisplay();
  } else if (a !== '') {
    b = parseFloat(storedVal);
    result = operate(a, b, operator);
    operator = event.target.textContent;
    clearDisplay();
    updateDisplay(result);
    a = '';
  }
})

/*

you press a number button (12), followed by an operator button (+), 
a second number button (7), and finally a second operator button (-). 
Your calculator should then do the following:

first, evaluate the first pair of numbers (12 + 7), 

second, display the result of that calculation (19), 

and finally, use that result (19) as the first number in your new calculation, 
along with the next operator (-).

*/



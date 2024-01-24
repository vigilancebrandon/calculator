let a = '';
let b = '';
let operator = '';
let result = 0
let displayVal = '';
let i = 0

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
  console.log(a, operator, b);
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

mainBtns.addEventListener('click', event => {
  event.target.className === 'number' 
  ? updateDisplay(event.target.textContent) 
  : null;
});

operatorBtns.addEventListener('click', (event) => {
  if (b === '') {
    a = +displayVal;
    operator = event.target.textContent;
    clearDisplay();
  } /* //NOT WORKING. STUCK ON STRING OPERATORS
    else {
    a = operate(a, b, operator);
    b = +displayVal;
    operator = event.target.textContent;
    clearDisplay();
  }
  */
});

equalsBtn.addEventListener('click', () => {
  b = +displayVal;
  a = operate(a, b, operator);
  b = '';
  clearDisplay();
  updateDisplay(a);
});

clearBtn.addEventListener('click', () => {
  clearDisplay();
  a = '';
  b = '';
  result = 0;
  operator = '';
  displayVal = '';
});

//type 9
  //display 9
//type plus
  //a = 9
  //operator = plus
  //b = ''
  //clear display
//type 3
  //display 3
//type equals
  //b = 3
  //result = calculate (a operator b) (9 + 3)
  //clear display
  //display result

//type 9
  //display 9
//type plus
  //a = 9
  //operator = plus
  //b = ''
  //clear display
//type 3
  //display 3
//type plus
  //b = 3
  //result = calculate (a operator b) (9 + 3)
  //clear display
  //display result
  //a = display
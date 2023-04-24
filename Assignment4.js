let currentNumber = '';
let firstNumber = '';
let operation = '';

function buttonPressed(buttonValue) {
  currentNumber += buttonValue;
  document.getElementById('result').value = currentNumber;
}

function calculate() {
  switch(operation) {
    case '+':
      currentNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
      break;
    case '-':
      currentNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
      break;
    case '*':
      currentNumber = parseFloat(firstNumber) * parseFloat(currentNumber);
      break;
    case '/':
      currentNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
      break;
  }
  document.getElementById('result').value = currentNumber;
  firstNumber = '';
  operation = '';
}

function setOperation(operator) {
  if (firstNumber === '') {
    firstNumber = currentNumber;
    currentNumber = '';
    operation = operator;
  } else {
    calculate();
    operation = operator;
  }
}

function clearDisplay() {
  currentNumber = '';
  firstNumber = '';
  operation = '';
  document.getElementById('result').value = '';
}
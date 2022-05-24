// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!
var firstNumberInput = document.getElementById('firstNumberInput');
var secondNumberInput = document.getElementById('secondNumberInput');

var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');

var result = document.getElementById('result');

multiplyBtn.addEventListener('click', multiply);
function multiply() {
  firstNumberValue = firstNumberInput.value;
  secondNumberValue = secondNumberInput.value;
  result.innerHTML = firstNumberValue * secondNumberValue;
}

divideBtn.addEventListener('click', divide);
function divide() {
  firstNumberValue = firstNumberInput.value;
  secondNumberValue = secondNumberInput.value;
  result.innerHTML = firstNumberValue / secondNumberValue;
}

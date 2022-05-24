// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

var firstNumberInput = document.getElementById('firstNumberInput');
var secondNumberInput = document.getElementById('secondNumberInput');

var firstNumberValue;
var secondNumberValue;

var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');

var resultPlace = document.getElementById('resultPlace');
var resultValue;

multiplyBtn.addEventListener('click', multiply);
function multiply() {
  firstNumberValue = firstNumberInput.value;
  secondNumberValue = secondNumberInput.value;
  resultValue = firstNumberValue * secondNumberValue;

  console.log(firstNumberValue);
  console.log(secondNumberValue);
  console.log(resultValue);

  if (firstNumberValue != null && secondNumberValue != null ) {
    resultPlace.innerText = resultValue;
  }

}

divideBtn.addEventListener('click', divide);
function divide() {
  firstNumberValue = firstNumberInput.value;
  secondNumberValue = secondNumberInput.value;
  resultValue = firstNumberValue / secondNumberValue;

  console.log(firstNumberValue);
  console.log(secondNumberValue);
  console.log(resultValue);

  if (firstNumberValue != null && secondNumberValue != null ) {
    resultPlace.innerText = resultValue;
  }
}

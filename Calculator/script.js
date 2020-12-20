//variables
let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");
let answer = document.getElementById("answer");

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

//event listners

add.addEventListener("click", addNumbers);
subtract.addEventListener("click", subtractNumbers);
multiply.addEventListener("click", multiplyNumbers);
divide.addEventListener("click", divideNumbers);

//operator functions

function addNumbers(e){
  let sum = parseFloat(number1Input.value) + parseFloat(number2Input.value);
  answer.innerHTML = sum;
}
function subtractNumbers(e) {
  let sum = parseFloat(number1Input.value) - parseFloat(number2Input.value);
  answer.innerHTML = sum;
}
function multiplyNumbers(e) {
  let sum = parseFloat(number1Input.value) * parseFloat(number2Input.value);
  answer.innerHTML = sum;
}
function divideNumbers(e) {
  let sum = parseFloat(number1Input.value) / parseFloat(number2Input.value);
  answer.innerHTML = sum;
}
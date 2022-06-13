let input = document.getElementById("input");
let numbers = document.querySelectorAll(".numbers div");
let operators = document.querySelectorAll(".operators div");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let resultDisplayed = false;
let operatorsArray = [];

numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
});

operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    operatorsArray.push(e.target.innerHTML);
    calculation();
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    }
    
  });
});

result.addEventListener("click", function () {
  resultDisplayed = true;
  calculation();
  return;
});

function calculation() {
  let calculation = input.innerHTML;
  let index = -1;
  let firstNumber, secondNumber, operation;

  operatorsArray.forEach((symbol) => {
    if (index === -1) {
      index = calculation.indexOf(symbol);
    }
  });

  if (index !== -1) {
    firstNumber = parseFloat(calculation.substring(0, index));
    secondNumber = parseFloat(calculation.substring(index + 1));
    operation = calculation.substring(index, index + 1);

    switch (operation) {
      case "+":
        input.innerHTML = firstNumber + secondNumber;
        break;
      case "-":
        input.innerHTML = firstNumber - secondNumber;
        break;
      case "×":
        input.innerHTML = firstNumber * secondNumber;
        break;
      case "÷":
        input.innerHTML = firstNumber / secondNumber;
        if (secondNumber === 0) {
          let error = document.createElement("p");
          error.innerText = "You can't divide any number by zero";
          error.style.fontSize = "20px";
          input.innerHTML = "";
          input.appendChild(error);
        }

        break;
      default:
        input.innerText = "ERROR";
        break;
    }
  }
}
clear.addEventListener("click", function () {
  input.innerHTML = "";
});

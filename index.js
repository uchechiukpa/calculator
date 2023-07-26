let operand = "";
let negate = false;
let operator = "";
let result = "";

function getValue() {
  const value = this.innerText;
  if (!isNaN(value)) {
    if (operator != "") {
      result = "";
      result += value;
    }
    operand += value;
    result += value;
  }
  if (isNaN(value)) {
    operator = value;
  }

  switch (operator) {
    case "C":
      break;

    case "+/-":
      if (negate) {
        negate = false;
        result = "+" + result;
        break;
      } else {
        negate = true;
        reusult = "-" + result;
        break;
      }
    case "%":
      result = result / 100;
      break;

    case "/":
      result = result / operand;
    default:
      break;
  }

  document.getElementById("display").innerText = result;
}

const buttons = document.querySelectorAll(".btn");

for (let button = 0; button < buttons.length; button++) {
  buttons[button].addEventListener("click", getValue);
}

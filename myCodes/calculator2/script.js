let result = document.getElementById("result");

function clearDisplay() {
  result.value = "";
}

function appendToDisplay(x) {
  result.value += x;
}

function calculateResult() {
  result.value = eval(result.value);
}

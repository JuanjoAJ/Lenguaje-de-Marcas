let check = document.querySelector("#buttonCheck");
let clear = document.querySelector("#buttonClear");
let input = document.querySelector("#inputCelsius");
let result = document.querySelector("#resultCelsius");

clear.addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
});

check.addEventListener("click", () => {
  result.textContent = `${
    input.value
  }ºC in Celsius is equivalent to ${convertTemp(input.value)}ºF in Fahrenheit`;
});

function convertTemp(number) {
  let numberResult = parseInt(number) * 1.8 + 32;
  return numberResult;
}

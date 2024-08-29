let inputNumber = document.querySelector("#primoInput");
let buttonPrimo = document.querySelector("#buttonPrimo");
let primoDiv = document.querySelector("#primo");

buttonPrimo.addEventListener("click", () => {
  primoDiv.textContent = "";
  if (inputNumber.value.length > 0) {
    let number = parseInt(inputNumber.value);
    if (esPrimo(number)) {
      primoDiv.textContent = `El ${number} es primo`;
    } else {
      primoDiv.textContent = `El ${number} no es primo`;
    }
  } else {
    alert("Debes poner un número");
  }
  inputNumber.value = "";
});

function esPrimo(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let index = 2; index < number; index++) {
      if (number % index == 0) {
        return false;
      }
    }
    return true;
  }
}

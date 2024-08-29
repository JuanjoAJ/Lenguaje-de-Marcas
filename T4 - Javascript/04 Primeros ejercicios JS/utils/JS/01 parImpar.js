/*Crea una función en javascript que indique si un número (que introduzca el 
    usuario) es par o impar. AYUDA: para poner si el resto de dividir un numero 
    entre 2 es 0, se hace así: if(numero % 2 == 0*/

let inputNumber = document.querySelector("#inputPar");
let inputButton = document.querySelector("#inputButton");
let resultado = document.querySelector("#result");

inputButton.addEventListener("click", () => {
  parImpar(inputNumber.value);

  inputNumber.value = "";
});

function parImpar(numero) {
  if (numero.length > 0) {
    if (Number(numero) % 2 == 0) {
      resultado.textContent = `Has introducido el número ${numero}, el cual es par`;
    } else {
      resultado.textContent = `Has introducido el número ${numero}, el cual es impar`;
    }
  } else {
    alert("No has introducido número");
    resultado.textContent = "";
  }
}

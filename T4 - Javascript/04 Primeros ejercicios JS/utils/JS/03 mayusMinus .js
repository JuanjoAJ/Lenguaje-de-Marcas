/*Crear una función que pasándole como parámetro una cadena que el usuario 
ha introducido (en un prompt), nos diga si la frase está formada por solo 
mayúsculas o por solo minúsculas.*/

let buttonPromt = document.querySelector("#buttonPromt");
let resultMayus = document.querySelector("#resultMayus");

buttonPromt.addEventListener("click", () => {
  mayusMinus(prompt("Introduce una oración"));
});

function mayusMinus(frase) {
  if (frase === frase.toUpperCase()) {
    resultMayus.textContent = "La frase está en mayúsculas";
  } else if (frase === frase.toLowerCase()) {
    resultMayus.textContent = "La frase está en minúsculas";
  } else {
    resultMayus.textContent = "La frase está en mayúsculas y minúsculas";
  }
}

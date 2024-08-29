/*Realiza un programa donde genere 10 números aleatorios entre 1 y 50 e indica cuantos salen mayores de 
2*/

let numGenerado = document.querySelector("#numRandom");
let buttonRandom = document.querySelector("#generador");
let numArray = [];
let resultadoRandom = document.querySelector("#resultRandom");
let resultadoTitulo = document.querySelector("#resultTitle");
let listadoNum = document.querySelector("#listadoNum");

//TODO  hacerlo en la función

buttonRandom.addEventListener("click", () => {
  resetGenerator();
  generadorNúmeros();
});

function generadorNúmeros() {
  for (let index = 0; index < 10; index++) {
    numArray.push(Math.floor(Math.random() * 50) + 1);
    if (index < 9) {
      numGenerado.value += `${numArray[index]}, `;
    } else {
      numGenerado.value += `${numArray[index]}.`;
    }
    if (Number(numArray[index]) > 25) {
      resultadoTitulo.textContent = "Los números mayores de 50 son: ";
      listadoNum.textContent += `${numArray[index]} `;
    }
  }
}
function resetGenerator() {
  numArray.length = 0;
  numGenerado.value = "";
  listadoNum.textContent = "";
}

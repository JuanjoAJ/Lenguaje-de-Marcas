/*Crea una función en javascript que de los 20 primeros números, indique cuales 
y cuantos son pares.*/
let lista = document.querySelector("#listaPar");
let inputButtonDos = document.querySelector("#inputButtonDos");

inputButtonDos.addEventListener("click", () => {
  if (lista.children.length > 0) {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  } else {
    for (let index = 1; index <= 20; index++) {
      let listaResultado = document.createElement("li");
      listaResultado.className = "list-group-item";
      parListado(index, listaResultado);
      lista.append(listaResultado);
    }
  }
});

function parListado(numero, listaResultado) {
  if (Number(numero) % 2 == 0) {
    listaResultado.textContent = `Has introducido el número ${numero}, el cual es par`;
  } else {
    listaResultado.textContent = `Has introducido el número ${numero}, el cual es impar`;
  }
}

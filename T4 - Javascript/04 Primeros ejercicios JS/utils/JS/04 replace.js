/*Pide al usuario una cadena y reemplaza por espacios en blanco 
de la frase, por el carácter ‘/’. */
let fraseOriginal = document.querySelector("#inputReplace");
let fraseRemplazo = document.querySelector("#resultReplace");
let buttonRemplazo = document.querySelector("#buttonReplace");

buttonRemplazo.addEventListener("click", () => {
  replaceFunct(fraseOriginal);
  fraseOriginal.value = "";
});

function replaceFunct(frase) {
  fraseRemplazo.textContent = fraseOriginal.value.replace(" ", "/");
}

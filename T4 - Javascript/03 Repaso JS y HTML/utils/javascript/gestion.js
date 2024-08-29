/*Gestión de pulsación del botón*/
let boton = document.querySelector("#botonIniciar");
let nombre = document.querySelector("#inputSaludo");
let parrafoSaludo = document.querySelector("#parrafoSaludo");
let lista = document.querySelector("#listado");
let selectOpciones = document.querySelector("#select-opciones");

boton.addEventListener("click", () => {
  if (nombre.value.length != 0) {
    saludo(nombre.value, selectOpciones.value);
    guardarSaludo(nombre);
    nombre.value = "";
  } else {
    Swal.fire({
      title: "¡Error!",
      text: "Introduce nombre",
      icon: "error",
      confirmButtonText: "Vale",
    });
    parrafoSaludo.textContent = "";
  }
});

function pulsacion() {
  console.log("boton clickado");
}

function saludo(nombre, opcion) {
  parrafoSaludo.textContent = `Hola ${nombre} acabas de realizar un saludo y tu opción seleccionada es la ${opcion}`;
}
function guardarSaludo(nombre) {
  //  lista.innerHTML += `<li class='list-group-item'>${nombre.value} </li>`;

  let nodo = document.createElement("li");
  nodo.textContent = nombre.value;
  lista.append(nodo);
  //nodo.classList.add("list-group-item");
  nodo.className = "list-group-item";
}

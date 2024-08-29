console.log(
  "Codigo ejecutado desde el fichero js externo con js embebido dentro"
);

console.log("Segunda linea del fichero js externo");

let parrafo = document.querySelector("p");
parrafo.textContent = "Cambiando contenido del parrafo mediante JS";

let parrafoDos = document.querySelector("#parrafo-dos");
parrafoDos.textContent = "Este cambio va a verse en el parrafo dos";

let parrafoTres = document.querySelector(".parrafo-tres");
parrafoTres.textContent = "Este cambio va a mostrarse en el parrafo tres";
/* querySelector 
Obtengo un solo nodo que cumpla con el selector:
  Se puede hacer la busqueda por:
  - TAG("nombre_tag") 
  - ID("#id") 
  - CLASE(".class")
  
  Si quiero encontrar solo un elemento usar ID, si quiero encontrar varios más sentido class
  IMPORTANTE -> Coge el primer elemento que encuentre
  Si quieres que coja todo usarias el querySelectorAll() devuelve un NodeList (más sentido trabajar con clases y tag)*/

let parrafos = document.querySelectorAll("p");

for (let index = 0; index < parrafos.length; index++) {
  parrafos[index].textContent = "Cargando";
}

parrafos.forEach((parrafos, index) => {
  parrafos.textContent = `Cargando parrafo ${++index}`;
});

/* OPERAR */
let inputOperando1 = document.querySelector("#input-OP1");
let inputOperando2 = document.querySelector("#input-OP2");
let botonOperar = document.querySelector("#botonOp");
let selectOperacion = document.querySelector("#select-operacion");
let textoInput = document.querySelector("#input-text");
let spanContador = document.querySelector("span");

selectOperacion.addEventListener("change", (e) => {
  operar();
});

botonOperar.addEventListener("click", (e) => {
  operar();
});

function operar() {
  /*Eventos click, key, change... */

  if (inputOperando1.value.length > 0 && inputOperando2.value.length > 0) {
    let operacion = Number(selectOperacion.value);
    let resultado;
    switch (operacion) {
      case 1:
        resultado = Number(inputOperando1.value) + Number(inputOperando2.value);
        /*
        if (!isNaN(inputOperando1.value) && !isNaN(inputOperando2.value)) {
            let suma = Number(inputOperando1.value) + Number(inputOperando2.value);
            }
            */
        break;
      case 2:
        resultado = Number(inputOperando1.value) - Number(inputOperando2.value);
        break;
      case 3:
        resultado = Number(inputOperando1.value) * Number(inputOperando2.value);
        break;
      case 4:
        resultado = Math.round(
          Number(inputOperando1.value) / Number(inputOperando2.value)
        );
        break;
      default:
        break;
    }
    parrafoTres.textContent = resultado;
  } else {
    alert("No hay datos");
  }
}

textoInput.addEventListener("keyup", (e) => {
  if (e.target.value.length <= 100) {
    spanContador.textContent = e.target.value.length;
  } else {
    e.preventDefault();
  }
});

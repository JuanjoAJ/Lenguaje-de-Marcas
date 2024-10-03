let button = document.getElementById("btnGuardar");
let nameWorker = document.querySelector("#inputName");
let lastName = document.querySelector("#inputSurname");
let email = document.querySelector("#inputEmail");
let jobPosition = document.querySelector("#jobPosition");
let listWorkers = document.querySelector("#listaTrabajadores");
let bodyTd = document.querySelector("#body-td");
let worker = [];
const jobs = ["IT", "marketing", "ventas", "administracion"];
let selectedCategory = null;
let sumaIT = 0;
let sumaVentas = 0;
let sumaMarketing = 0;
let sumaAdministracion = 0;

button.addEventListener("click", (e) => {
  if (
    nameWorker.value.length > 0 &&
    lastName.value.length > 0 &&
    email.value.length > 0
  ) {
    if (selectedCategory != null) {
      addWorker();
      tablaResumen();
      reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Debe seleccionar categoria",
        icon: "error",
        confirmButtonText: "Vale",
      });
    }
  } else {
    Swal.fire({
      title: "Error!",
      text: "Faltan datos",
      icon: "error",
      confirmButtonText: "Vale",
    });
  }
});

// Registro trabajadores
function addWorker() {
  listWorkers.innerHTML += `<li>${nameWorker.value.toUpperCase()} ${lastName.value.toUpperCase()}, ${selectedCategory.toUpperCase()} </li>`;
}
/*Sumar en la tabla resumen */
function tablaResumen() {
  switch (selectedCategory) {
    case "it":
      sumaIT++;
      document.getElementById("td1").innerText = sumaIT;
      break;
    case "marketing":
      sumaMarketing++;
      document.getElementById("td2").innerText = sumaMarketing;
      break;
    case "ventas":
      sumaVentas++;
      document.getElementById("td3").innerText = sumaVentas;
      break;
    case "administracion":
      sumaAdministracion++;
      document.getElementById("td4").innerText = sumaAdministracion;
      break;
    default:
      console.log("Categoría no válida");
  }
}

/*Comprobar categoria */
jobPosition.addEventListener("change", (e) => {
  selectedCategory = e.target.value;
});
function getCategoria(categoria) {
  switch (categoria) {
    case "it":
      return "IT";
    case "marketing":
      return "marketing";
    case "ventas":
      return "ventas";
    case "administracion":
      return "administracion";
    default:
      return null;
  }
}

/*Resetear */

function reset() {
  nameWorker.value = "";
  lastName.value = "";
  email.value = "";
  jobPosition.value = "0";
}

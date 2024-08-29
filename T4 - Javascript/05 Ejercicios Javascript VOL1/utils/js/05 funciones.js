let buttonFuncion = document.querySelector("#buttonInfo");
let nameIn;
let edadIn;
let dias;

buttonFuncion.addEventListener("click", () => {
  if (!nameInfo() || !diasVida()) {
    alert("No puedo volcarte los datos si no lo rellenas correctamente");
  } else {
    Swal.fire({
      title: "Info",
      text: `${nameIn} has vivido ${dias} días`,
      icon: "info",
      confirmButtonText: "Cool",
    });
  }
});

function nameInfo() {
  nameIn = prompt("Por favor indique el nombre");
  if (contieneNum(nameIn) || nameIn === "") {
    alert("Debes introducir letras");
    return false;
  } else {
    return nameIn;
  }
}

function diasVida() {
  edadIn = prompt("Indique su edad");
  if (isNaN(edadIn) || edadIn === "") {
    alert("Debe introducir un número");
    return false;
  } else {
    dias = parseInt(edadIn) * 365;
    return dias;
  }
}

function contieneNum(cadena) {
  for (let index = 0; index < cadena.length; index++) {
    if (!isNaN(cadena[index])) {
      return true;
    }
  }
  return false;
}

let nameForm = document.querySelector("#inputName");
let surname = document.querySelector("#inputSurname");
let city = document.querySelector("#inputCity");
let edad = document.querySelector("#edad");

let buttonInfo = document.querySelector("#info");

buttonInfo.addEventListener("click", () => {
  if (
    nameForm.value.length > 0 &&
    surname.value.length > 0 &&
    city.value.length > 0
  ) {
    Swal.fire({
      title: "Info",
      text: `${nameForm.value} ${surname.value} de ${city.value} tiene ${edad.value} años`,
      icon: "info",
      confirmButtonText: "Cool",
    });
  } else {
    alert("Faltan datos");
  }
});

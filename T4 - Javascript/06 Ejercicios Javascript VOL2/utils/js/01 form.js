let nameInput = document.querySelector("#name");
let email = document.querySelector("#email");
let comment = document.querySelector("#comment");
let pass = document.querySelector("#pass");
let accept = document.querySelector("#accept");
let enviarFor = document.querySelector("#enviarInp");

enviarFor.addEventListener("click", (e) => {
  if (!requiredInput()) {
    e.preventDefault();
  }
});

function requiredInput() {
  if (nameInput.value === "" || email.value === "" || comment.value === "") {
    Swal.fire({
      title: "Error!",
      text: "Campos requeridos sin rellenar",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return false;
  } else if (!email.value.includes("@")) {
    Swal.fire({
      title: "Error!",
      text: "El mail debe contener un @",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return false;
  } else if (pass.value.length < 6) {
    Swal.fire({
      title: "Error!",
      text: "La contraseña debe tener mínimo 6 caracteres",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return false;
  } else if (!document.getElementById("accept").checked) {
    Swal.fire({
      title: "Error!",
      text: "Debes aceptar las condiciones",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return false;
  }
  return true;
}

comment.addEventListener("keyup", (e) => {
  if (comment.value.length == 50) {
    Swal.fire({
      title: "¡Cuidado!",
      text: "Ya no te quedan más caracteres",
      icon: "warning",
      confirmButtonText: "Cool",
    });
  }
});

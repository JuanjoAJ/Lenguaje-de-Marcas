let inputName = document.querySelector("#inputNombre");
let inputLastName = document.querySelector("#inputApellido");
let inputBuscar = document.querySelector("input#input-buscar");
let botonInput = document.querySelector("#botonInput");
let listaUsuarios = document.querySelector("#lista-usuarios");
let arrayUsuarios = []; //declaración de ARRAY, se puede agregar/eliminar cosas por detrás o por delante
let botonBusqueda = document.querySelector("#boton-buscar");
let listaBuscar = document.querySelector("#lista-busqueda");

/*
botonInput.addEventListener("click", () => {
  console.log(inputName.value);
  console.log(inputLastName.value);
});
*/

botonInput.addEventListener("click", () => {
  if (inputLastName.value.length > 0 && inputName.value.length > 0) {
    /*
    Primera forma (la cual la animación se hace en bloque )
   listaUsuarios.innerHTML += `<li class='list-group-item animate__animated animate__zoomInUp'>${inputName.value} ${inputLastName.value}</li>`;
    document.documentElement.style.setProperty("--animate-duration", "1s"); */
    //Otra forma sería mediante creación de nodo directamente
    arrayUsuarios.push(`${inputName.value} ${inputLastName.value}`);
    let nodo = document.createElement("li");
    nodo.textContent = `${inputName.value} ${inputLastName.value}`;
    nodo.className = "list-group-item animate__animated animate__zoomInUp";
    listaUsuarios.append(nodo);

    nodo.addEventListener("click", () => {
      nodo.classList.remove("animate__zoomInUp");
      nodo.classList.add("animate__bounce");
    });
    inputName.value = "";
    inputLastName.value = "";
    Swal.fire({
      title: "Correcto!",
      text: "Usuario agregado correctamente",
      icon: "success",
      confirmButtonText: "Cool",
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Faltan datos",
      icon: "error",
      confirmButtonText: "Vale",
    });
  }
});

botonBusqueda.addEventListener("click", () => {
  let listaResultadoBusqueda = arrayUsuarios.filter((item) => {
    return item == inputBuscar.value;
  });
  listaBuscar.innerHTML = "";
  listaResultadoBusqueda.forEach((item) => {
    listaBuscar.innerHTML += `<li class='list-group-item'> ${item} </li>`;
  });
});

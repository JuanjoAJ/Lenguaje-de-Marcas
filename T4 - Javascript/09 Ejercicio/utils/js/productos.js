let columna = document.querySelector("#columna");
let seleccion = document.querySelector("#seleccion");

fetch("https://dummyjson.com/products")
  .then((result) => {
    return result.json();
  })
  .then((results2) => {
    results2.products.forEach((element) => {
      columna.innerHTML += `<div class="col">
      <div class="card m-4" style="width: 18rem;">
  <img src="${element.images[0]}" class="card-img-top" alt="imagen-producto">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
      </div>`;
    });
    seleccion.addEventListener("change", () => {
      let listaFiltrada = results2.products.filter((item) => {
        return item.category == seleccion.value.toLowerCase();
      });
      filtrado(listaFiltrada);
      if (seleccion.value == "") {
        results2.products.forEach((element) => {
          columna.innerHTML += `<div class="col  animate__animated animate__backInRight">
          <div class="card m-4" style="width: 18rem;">
      <img src="${element.images[0]}" class="card-img-top" alt="imagen-producto">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
          </div>`;
        });
      }
    });
  })
  .catch(() => {
    console.log("Error en la bbdd");
  });

function filtrado(lista) {
  columna.innerHTML = "";
  lista.forEach((element) => {
    columna.innerHTML += `<div class="col animate__animated animate__backInRight">
      <div class="card m-4" style="width: 18rem;">
  <img src="${element.images[0]}" class="card-img-top" alt="imagen-producto">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>`;
  });
}

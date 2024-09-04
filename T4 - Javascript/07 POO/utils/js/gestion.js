let productos = [
  new Producto(
    "Iphone",
    900,
    "Apple",
    "smartphone",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055"
  ),
  new Producto(
    "Camiseta",
    2132,
    "JackJones",
    "ropa",
    "https://images.jackjones.com/12137126/2777789/001/jackjones-camisetalogotipocuelloredondo-negra.jpg?v=d9cd2e88cfb53a82f8e2122534898426&format=webp&width=1280&quality=90&key=25-0-3"
  ),
  new Producto(
    "Pantalón",
    123,
    "Levis",
    "ropa",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRUNVcNj7ObaUuaDDoOHW4qYrc2dgG-mB1A&s"
  ),
  new Producto(
    "Macbook",
    234,
    "Apple",
    "portatil",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SeYmba8jsMbz8SrhifFvO73j3yEfdpZduQ&s"
  ),
  new Producto("Cascos", 435, "Samsung", "musica"),
  new Producto("Discos", 756, "LG", "musica"),
  new Producto("Samsung Galaxy", 56, "Samsung", "smartphone"),
  new Producto("Smart TV", 7566, "LG", "television"),
  new Producto("Zapatillas", 123, "Nike", "ropa"),
  new Producto("Televisión 65", 234, "Samsung", "television"),
];

let seleccionCartas = document.querySelector("#seccion-cartas");
let producto = new Producto("Iphone", 900, "Apple", "smartphone");
let selectCategoria = document.querySelector("#select-categoria");
producto.mostrarDatos();

console.log("Nombre:");
productos.forEach((element) => {
  console.log(element.getNombre);
});

console.log("Elementos con solo categoría ropa");

productos.forEach((element) => {
  if (element.getCategoria === "ropa") {
    console.log(element.getNombre);
  }
});

let busqueda = productos.filter((element) => {
  return element.categoria == "ropa";
});

console.log(busqueda);

productos.forEach((element) => {
  seleccionCartas.innerHTML += `<div class="col m-4  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />">
            <div class="card" style="width: 20rem; height:20rem">
                <img src="${element.getImagen}" class="card-img-top" alt="imagen-carta" style="width: 10rem; height:10rem; align-self:center">
                <div class="card-body">
                  <h5 class="card-title">${element.getNombre}</h5>
                  <p class="card-text">${element.marca} ${element.precio}</p>
                  <a href="#" class="btn btn-primary">Ver detalle</a>
                </div>
              </div>
        </div>`;
});

selectCategoria.addEventListener("change", () => {
  let listaFiltrada = productos.filter((item) => {
    return item.categoria == selectCategoria.value.toLowerCase();
  });
  representarResultados(listaFiltrada);
  if (selectCategoria.value == "seleccione") {
    productos.forEach((element) => {
      seleccionCartas.innerHTML += `<div class="col m-4 animate__animated animate__backInDown">
                <div class="card" style="width: 20rem; height:20rem">
                    <img src="${element.getImagen}" class="card-img-top" alt="imagen-carta" style="width: 10rem; height:10rem; align-self:center">
                    <div class="card-body">
                      <h5 class="card-title">${element.getNombre}</h5>
                      <p class="card-text">${element.marca} ${element.precio}</p>
                      <a href="#" class="btn btn-primary">Ver detalle</a>
                    </div>
                  </div>
            </div>`;
    });
  }
});

function representarResultados(lista) {
  seleccionCartas.innerHTML = "";
  lista.forEach((element) => {
    seleccionCartas.innerHTML += `<div class="col m-4 animate__animated animate__backInDown">
            <div class="card" style="width: 20rem; height:20rem">
                <img src="${element.getImagen}" class="card-img-top" alt="imagen-carta" style="width: 10rem; height:10rem; align-self:center">
                <div class="card-body">
                  <h5 class="card-title">${element.getNombre}</h5>
                  <p class="card-text">${element.marca} ${element.precio}</p>
                  <a href="#" class="btn btn-primary">Ver detalle</a>
                </div>
              </div>
        </div>`;
  });
}

class Producto {
  nombre;
  precio;
  marca;
  categoria;
  imagen;

  constructor(nombre, precio, marca, categoria, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.categoria = categoria;
    this.imagen = imagen;
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: ${this.precio}`);
    console.log(`Marca: ${this.marca}`);
    console.log(`Categoria: ${this.categoria}`);
  }

  get /*get es un método especial*/ getNombre() {
    return this.nombre;
  }
  /*set es otro método especial, porque no se define como metodo sino como característica/propiedad */
  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getCategoria() {
    return this.categoria;
  }

  get getImagen() {
    return this.imagen;
  }
}

//JSON -> javascript object notation

let objeto = [
  {
    nombre: "Borja",
    apellido: "Martin",
    edad: 40,
    carnet: true,
    conocimientos: ["programacion", "3d", "sistemas", "gestion"],
    proyectos: [
      { nombre: "desarrollo web", presupuesto: 1000 },
      { nombre: "desarrollo APP", presupuesto: 20000 },
    ],
  },
  {
    nombre: "Celia",
    apellido: "Gomez",
    edad: 20,
    carnet: true,
    conocimientos: ["ventas", "sistemas", "gestion"],
    proyectos: [{ nombre: "mejorar departamento", presupuesto: 10000 }],
  },
  {
    nombre: "Claudia",
    apellido: "Abril",
    edad: 30,
    carnet: true,
    conocimientos: ["programacion"],
  },
  {
    nombre: "Pedro",
    apellido: "Martin",
    edad: 50,
    carnet: true,
    conocimientos: ["programacion", "3d", "sistemas", "gestion"],
  },
  {
    nombre: "Luis",
    apellido: "Martin",
    edad: 60,
    carnet: true,
    conocimientos: ["3d", "sistemas", "gestion"],
  },
];

let lista = document.querySelector("#lista");

objeto.forEach((item) => {
  lista.innerHTML += `<li class="list-group-item"> ${item.nombre} ${item.apellido} </li> `;
});

console.log("Recorrido sub arrays");
objeto.forEach((element) => {
  if (element.nombre == "Borja") {
    element.proyectos.forEach((item) => {
      console.log(item.nombre);
      console.log(item.presupuesto);
    });
  }
});

console.log("Con filter");

objeto
  .find((element) => {
    return element.nombre == "Borja";
  })
  .proyectos.forEach((item) => console.log(item));

let usuario = new Usuario("Juanjo", "Ávila", 666666666);

console.log(JSON.stringify(usuario));

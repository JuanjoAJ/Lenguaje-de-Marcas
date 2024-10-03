//enum
const enum ERROR_TYPES {
  NOT_FOUND,
  UNATHORIZED,
  FORBIDDEN,
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNATHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se puede");
  }
}

//Asercion de tipos
const canvas = document.getElementById("canvas");

//es inferencia -> TS se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement
if (canvas != null && canvas instanceof HTMLCanvasElement) {
  const ctx = (canvas as HTMLCanvasElement).getContext("2d");
}

//fetching de datos en TS

const API_URL = "https://api.github.com/search/repositories?q=javascript";

const response = await fetch(API_URL);

if (!response.ok) {
  throw new Error("Request fail");
}

type APIResponse = {
  items: object[];
};
const data = (await response.json()) as APIResponse; //es un lio por que sería de forma manual mejor ir a quicktype y añade todos los tipos de la api. Con TypeScript Zod te valida los datos

const repos = data.items.map((repo) => {
  console.log(repo);
});

//Interfaces

interface Heroe {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const hero: Heroe = {
  id: "1",
  name: "Spiderman",
  age: 20,
  saludar() {
    console.log("hola");
  },
};

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: Producto[];
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "producto 1",
      precio: 100,
      quantity: 1,
    },
  ],
};

//extender interfaces

interface Zapatillas extends Producto {
  talla: number;
}

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
  clear: () => void;
}

/* O tambien

interface CarritoOps{

  add(product: Producto): void, 
  remove(id: number): void,
  clear():void
}
*/

//Narrowing - Asegurarte que el tipo es correcto

function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === "string") return objeto.length;
  return objeto.toString().length;
}

mostrarLongitud("1");

interface Mario {
  company: "nintendo";
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: "sega";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  if (personaje.company === "nintendo") {
    personaje.saltar();
    return;
  }
  personaje.correr();
  return;
}

//type guard
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function jugar2(personaje: Personaje) {
  if (checkIsSonic(personaje)) personaje.correr();
}

//d.ts se pone en los archivos con declaraciones (interfaces, type) Por ejemplo Avenger.d.ts

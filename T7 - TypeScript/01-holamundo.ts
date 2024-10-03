function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age;
}

const edad: number = saludar({ name: "Pepe", age: 2 });

/*Tipado de funciones */

const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Miguel");
};

sayHiFromFunction((name: string) => {
  console.log(`Hola, ${name}`);
});

//Tipar arrow function

const sumar = (a: number, b: number): number => {
  return a + b;
};
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// never

function throwError(message: string): never {
  throw new Error(message);
}

//void

function logMessage(message: string): void {
  console.log(message);
}

//inferencia funciones anonimas según contexto
/*
const avengers=['Hulk', 'Spidey', 'Captain']

avengers.forEach(avenger=>{
    console.log(avenger.toUpperCase)
})

avengers.forEach(function(avenger){
    console.log(avenger.toUpperCase)
})
*/

//Objetos
/*
let hero: Hero = {
    name: 'thor',
    age: 1500
}
*/

//type Alias

/*type Hero = {
    name: string, 
    age:number
    
}

let thor:Hero={
    name:'Thor Odinson',
    age:1500
}

function createHero(hero:Hero):Hero{
    const {name, age} =hero
    return{
        name, age
    }
}
let ironman=createHero({name:'tony', age:40})
*/

//Optional properties
/*type Hero2 = {
  readonly  id?:number; //solo de lectura
    name: string, 
    age:number
    isActive?:boolean //puede tenerlo o no
}
const bwidow:Hero2={name:'natasha', age:40}
let hawkeye=Object.freeze({name:'clint', age:42}) //con object freeze haces el objeto inmutable
*/

//Template Union Types
/*crypto.randomUUID() //nativo de la plataforma web

type HeroId=`${string}-${string}-${string}-${string}-${string}`

type Hero3 = {
     readonly id?: HeroId,
      name: string, 
      age:number
      isActive?:boolean //puede tenerlo o no
  }

  function createHero3(name:string, age:number, isActive:boolean):Hero3{
    const uid=crypto.randomUUID()
    const heroAux={uid,name, age, isActive}
    return heroAux
  }


  type HexadecimalColor=`#${string}`

const color:HexadecimalColor=`#123`
const color2:HexadecimalColor=`123`
*/

//Union type
/*
type HeroId=`${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale='local' | 'planetary' | 'galactic' |'universal' | 'multiversal'

let ann: number|string

ann=1
ann='1'

let ann2: string | 2

ann2=2

type Hero = {
     readonly id?: HeroId,
      name: string, 
      age:number
      isActive?:boolean 
      powerScale?: HeroPowerScale
  }
*/

//Intersection types

/*
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type Hero= HeroBasicInfo & HeroProperties
*/

//Type indexing

type HeroProperties = {
  isActive?: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const address: HeroProperties["address"] = {
  planet: "Earth",
  city: "Madrid",
};

//Type from value

type Address = typeof address;

const addressTwitch: Address = {
  planet: "Mars",
  city: "asd",
};

//Type from function return

function createAddress() {
  return {
    planet: "Tierra",
    city: "Barcelona",
  };
}

type Address2 = ReturnType<typeof createAddress>;

//Arrays
const languages: string[] = []; //o Arrays<string[]>

languages.push("javaScript");

const varios: (string | number)[] = [];
varios.push(1);
varios.push("s");

//Matrices y tuplas
type CellValue = "" | "X" | "0";
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
const gameBoard: GameBoard = [
  ["X", "0", "0"],
  ["0", "X", "X"],
  ["X", "X", "0"],
];

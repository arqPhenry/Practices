//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (false) {
        resolve('Hey!');
      } else {
        reject('Ups!!');
      }
    });
  }
  
  helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Clases

class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
}
  
const calc = new calculator();
console.log(calc.sum(2, 2));

//Modulos, se usan para exportar e importar funciones entre archivos diferentes.

const hello = () => {
    return "Hello!"
}
//Así exportaríamos la función:
export {hello}
//Y así la importaríamos en el otro archivo:
import {hello} from "./ECMAscript6+"


//Generadores, se usan creo que para ejecutar una función pero por partes, y a cada parte nosotros le vamos a decir cuando ejecutarse.

function* helloWorld(){
    if (true){
        yield "Hello, ";
    }
    if(true){
        yield "World";
    }
}; 

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//ECMAScript 7.

//Nuevo metodo para buscar si existe un valor dentro de un array. INCLUDES.
let numbers = [1,2,3,4,5,6,7,8,9];

if (numbers.includes(7)){
    console.log("Si, se encuentra el número 7");
}
else{
    console.log("No se encuentra.");
}

//Nueva forma de potenciar números: con el spreed operator "**".
let base = 4;
let exponent = 3;
let result = base ** exponent;


//ECMAScript 8.

//Convertir un objeto a un array, Object.entries.
const data = {
    frontend: "Miguel",
    backend: "Henry",
    design: "Brey",
}

const equipo = Object.entries(data);

//Ahora, podemos hacer lo mismo pero con Object.values, para solo obtener los valores:
const dataValores = Object.values(data);

// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero

 
//ECMAScript 9.

//Spread Operator
const obj = {
 name: 'Oscar',
 age: 32,
 country: 'MX'
};

let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);

/**
 * Porpagation Properties
 */
 const person = {
    name: 'Oscar',
    age: 32
  };
  
  const personInformation = {
    ...person,
    country: 'MX'
  };
  console.log(`personInformation: `, personInformation);
  
  /**
   * Promise Finally
   */
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);


  //ECMAScript 10.

  //--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let arrays = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

arrays = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hellos = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

hellos = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);``


//ECMAScript 11.

//Dynamic import. Sirve para cargar nuestro Javascript en diferentes archivos, e ir solicitando la carga de cada parte sólo cuando se necesita. Así, hacemos que nuestra aplicación tenga un mejor rendimiento al no cargar todo de un solo golpe.


//En el archivo principal escribimos esto:
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

//Y en el módulo, o archivo a parte, definimos la función como tal:
export function hello() {
    console.log("Hola, Mundo!");
}

// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled

const promises1 = new Promise((resolve,reject) => reject("reject"));
const promises2 = new Promise((resolve,reject) => resolve("resolve"));
const promises3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promises1, promises2, promises3])
    .then(response => console.log(response));


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}

//ECMAScript 12.
// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    //{...}
}

// 🧪 Nuevos operadores lógicos

let isTrues = true;
let isFalses = false;
console.log(isTrues &&= isFalses);

 isTrues = true;
 isFalses = false;
console.log(isTrues ||= isFalses);

 isTrues = true;
 isFalses = false;
console.log(isTrues &&= isFalses);
var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World!";


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const escribirNumeros = (min, max) =>{
    for(let i = min; i < max; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
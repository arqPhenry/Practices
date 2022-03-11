var nombre = "Henry" //String
var apellido = "Navas" //String
var nombreDeUsuarioPlatzi = "Phenry" //String
var edad = 21 //Number
var correoElectronico = "navashenrym@gmail.com" //String
var mayorDeEdad = function (edad){ if(edad>18){
    return true;
    }
    else{
        return false;
    }
}  //Boolean
var dineroAhorrado = 2222 //Number
var deudas = 333 //Number
var dineroReal = dineroAhorrado - deudas

var nombreCompleto = `${nombre} ${apellido}`;



function enunciado (name, lastName, nickname){
    completeName =  `${name} ${lastName}`;
    return `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`
}

function tipoDeSuscripcion (plan){
    if (plan == "Free"){
        return "Solo puedes tomar los cursos gratis";
    }
    else if (plan == "Basic"){
        return "Puedes tomar casi todos los cursos de Platzi durante un mes";
    }
    else if (plan == "Expert"){
        return "Puedes tomar casi todos los cursos de Platzi durante un año";
    }
    else if (plan == "ExpertPlus"){
        return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
    }
}

var i = 0
while (i < 5){
    i ++;
    `El valor de i es: ${i}`;
}

var estudiantes = ["Mateo", "Santi", "Putencia", "Musolini"]

function escribirEstudiantes(){
    for (var i=0; i < estudiantes.length; i++){
        console.log (estudiantes[i] + "</br>");
    }
}

var infoEstudiantes = [
    {nombre: "Matias", edad: 9},
    {nombre: "Jose", edad: 10},
    {nombre: "Manuel", edad: 12},
    {nombre: "Paula", edad: 8},
    {nombre: "Maria", edad: 11},
    {nombre: "Isabela", edad: 9},
]

function imprimirEstudiantes (objeto){
    for (var i=0; i < objeto.length; i++){
        console.log (objeto[i]);
    }
}
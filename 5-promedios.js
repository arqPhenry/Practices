//Calculando promedios de un array:
var array1 = [
    100,
    200,
    300,
    340,
    400,
    490,
    500,
    700
]

var sumaLista = array1.reduce(function(valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
});

var promedio = sumaLista / array1.length;

function calcularPromedio(array){
    var sumaLista = array.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    var promedio = sumaLista / array.length;

    return `El promedio del array ingresado es: ${promedio}`
}

//Calculando medianas de un array:

var array2 = [
    100,
    200,
    300,
    340,
    400,
    490,
    500,
    700,
]
 // - Cuando el length del array es impar, la mediana se define por: //
var mitadArray = parseInt(array2.length / 2); 
var medianaArrayImpar = array2[mitadArray];

 // - Cuando el length es par, la mediana se define por: //
 var mitadArray1 = parseInt(array2.length / 2);
 var mitadArray2 = mitadArray1 - 1;
 var valorMitad1 =  array2[mitadArray1];
 var valorMitad2 =  array2[mitadArray2];

 var medianaArrayPar = (valorMitad1 + valorMitad2) / 2;

 function calcularMediana(array){
    if (array.length % 2 == 0){
        var mitadArray1 = parseInt(array.length / 2);
        var mitadArray2 = mitadArray1 - 1;
        var valorMitad1 =  array[mitadArray1];
        var valorMitad2 =  array[mitadArray2];
        var medianaArrayPar = (valorMitad1 + valorMitad2) / 2;

        return medianaArrayPar;
    }
    else{
        var mitadArray = parseInt(array.length / 2); 
        var medianaArrayImpar = array[mitadArray];

        return medianaArrayImpar
    }
 }

//Calculando moda de un array:

var array3 = [
    1,5,3,5,7,5,2,5,1,3,6,2,5,6,26,8,26,2,4,7,2,1,1,3,5,9,5,5,9,9,7,7,2,3
]

var array3Count = {};

array3.map(function(elemento){
    if (array3Count[elemento]){
        array3Count[elemento] += 1;
    }
    else{
        array3Count[elemento] = 1;
    }
});

var array3Devuelto = Object.entries(array3Count).sort(
    function ( valorIx, valorNx){
        valorIx[1] - valorNx[1];
    }
);

const moda = array3Devuelto[array3Devuelto.length - 1];
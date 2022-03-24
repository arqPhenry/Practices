var salariosColombia = colombia.map(function(salario){
    return salario.salary
});

salariosColombia.sort(function(a, b) {
  return a - b;
});

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

 calcularMediana(salariosColombia);

 //Calculando solo el 10% de los mejores salarios
 var spliceInicio = (salariosColombia.length * 90) / 100;
 var spliceCount = salariosColombia.length - spliceInicio;

 var  salariosColombia10 = salariosColombia.splice(spliceInicio, spliceCount);
var cupones = [
    {codigo: "24AWS587", descuento: 20},
    {codigo: "29AWS452", descuento: 30},
    {codigo: "27AWS227", descuento: 10},
    {codigo: "15AWS589", descuento: 15},
    {codigo: "03AWS521", descuento: 80},
    {codigo: "92AWS341", descuento: 6},
]


function calculosCupon(){
    var validarCupon = cupones.some(function(cupon){
        return cupon.codigo == document.getElementById("codCupon").value;
    });

    if (validarCupon == true){
        var encuentraCupon = cupones.find(function(cupon){
            return cupon.codigo == document.getElementById("codCupon").value
        });
        document.getElementById("descuento").innerHTML = `${encuentraCupon.descuento} %`;
    }
    else{
        alert("El cupón ingresado es inválido, por favor revise su código.")
    }
}

function calcularTotal(){
    var validarCupon = cupones.some(function(cupon){
        return cupon.codigo == document.getElementById("codCupon").value;
    });
    if (validarCupon == true){
        var montoBase = document.getElementById("monto").value;
        var encuentraCupon = cupones.find(function(cupon){
            return cupon.codigo == document.getElementById("codCupon").value
        });
        let montoADescontar = ((encuentraCupon.descuento - 100)/100)*(-1);
        
        let total = Number(montoBase) * montoADescontar;
        document.getElementById("totalis").innerHTML = `${total} $`;
    }
    else{
        alert("El cupón ingresado es inválido, por favor revise su código.")
    }

}



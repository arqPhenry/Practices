var opcionUser = prompt("Elige: Piedra, Papel o Tijera")
var opcionesCpu = ["Piedra","Papel","Tijera"];
var eleccionCpu = Math.floor(Math.random()*opcionesCpu.length);
var opcionCpu = opcionesCpu[eleccionCpu];

function juego() {
    a = opcionUser
    b = opcionCpu

    if (a != b){
        if (a == "Piedra" && b == "Tijera"){
            document.write("Ganó el user, él usó: " + a + " y el CPU usó: " + b)
        }
        else if (a == "Papel" && b == "Piedra"){
            document.write("Ganó el user, él usó: " + a + " y el CPU usó: " + b)
        }
        else if (a == "Tijera" && b == "Papel"){
            document.write("Ganó el user, él usó: " + a + " y el CPU usó: " + b)
        }

        else if (a == "Piedra" && b == "Papel"){
            document.write("Ganó el CPU, él usó: " + b + " y el User usó: " + a)
        }
        else if (a == "Papel" && b == "Tijera"){
            document.write("Ganó el CPU, él usó: " + b + " y el User usó: " + a)
        }
        else if (a == "Tijera" && b == "Piedra"){
            document.write("Ganó el CPU, él usó: " + b + " y el User usó: " + a)
        }
    }
    else{
        document.write("Ambos escogieron lo mismo, F5 para jugar de nuevo. ")
    }
}

juego();
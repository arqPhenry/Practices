
function calcularTrianguloEquilatero(){
    let l = document.getElementById("lte").value;
    let resultPerimetro = Number(l) * 3;
    let resultArea = ((Math.sqrt(3)) * Math.pow(Number(l),2)) / 4;

    document.getElementById("resultAreaTeq").innerHTML = resultArea.toFixed(2) + " cm²";
    document.getElementById("resultPerimetroTeq").innerHTML = resultPerimetro.toFixed(2) + " cm";
}
function calcularCircunferencia(){
    let r = document.getElementById("r").value
    let d = Number(r) * 2;
    let pi = Math.PI;
    let resultPerimetro =  d * pi;
    let resultArea = Math.pow(Number(r),2) * pi;

    document.getElementById("resultAreaCir").innerHTML = resultArea.toFixed(2) + " cm²";
    document.getElementById("resultPerimetroCir").innerHTML = resultPerimetro.toFixed(2) + " cm";
}
function calcularCuadrado(){
    let l = document.getElementById("lc").value;
    let resultArea = (Number(l) * Number(l));
    let resultPerimetro =  (Number(l) * 4);
    document.getElementById("resultAreaC").innerHTML = resultArea.toFixed(2) + " cm²";
    document.getElementById("resultPerimetroC").innerHTML = resultPerimetro.toFixed(2) + " cm";
}
function calcularTrianguloIsosceles(){
    let l = document.getElementById("lti").value;
    let b = document.getElementById("bti").value;
    let h = Math.sqrt((Math.pow(Number(l),2))-((Math.pow(Number(b),2))/4));
    let resultPerimetro = (Number(l)*2) + Number(b);
    let resultArea = (Number(b) * h) / 2;

    document.getElementById("resultAlturaTis").innerHTML = h.toFixed(2) + " cm";
    document.getElementById("resultAreaTis").innerHTML = resultArea.toFixed(2) + " cm²";
    document.getElementById("resultPerimetroTis").innerHTML = resultPerimetro.toFixed(2) + " cm";
}
function calcularTrianguloEscaleno(){ 
    let b = document.getElementById("btE").value;
    let a = document.getElementById("ltEsA").value;
    let c = document.getElementById("ltEsC").value;
    let s = (Number(a) + Number(b) + Number(c)) / 2;
    let h = 2/Number(b)*(Math.sqrt(s * ((s - Number(a))*(s - Number(b))*(s - Number(c)))));

    resultPerimetro = Number(a) + Number(b) + Number(c);
    resultArea = Math.sqrt(s * ((s - Number(a))*(s - Number(b))*(s - Number(c))));

    document.getElementById("resultAlturaTes").innerHTML = h.toFixed(2) + " cm";
    document.getElementById("resultAreaTes").innerHTML = resultArea.toFixed(2) + " cm²";
    document.getElementById("resultPerimetroTes").innerHTML = resultPerimetro.toFixed(2) + " cm";
}



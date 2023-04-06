//CUADRADO
console.group("Cuadrado");

let ladoCuadrado = Number(prompt("Inserte el lado del cuadrado"));

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.log({
    perímetro:perimetroCuadrado(ladoCuadrado),
    área:areaCuadrado(ladoCuadrado)
});

console.groupEnd();

//TRIANGULO
console.group("Triángulo");

let ladoTriangulo1 = Number(prompt("Inserte el lado del triángulo 1"));
let ladoTriangulo2 = Number(prompt("Inserte el lado del triángulo 2"));
let ladoTriangulo3 = Number(prompt("Inserte el lado del triángulo 3"));

function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(lado1,lado2,lado3){
    s = (lado1+lado2+lado3)/2;
    return Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3)); //fórmula de Heron
}

console.log({
    perímetro:perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,ladoTriangulo3),
    área:areaTriangulo(ladoTriangulo1,ladoTriangulo2,ladoTriangulo3)
});

console.groupEnd();

//CÍRCULO
console.group("Círculo");

let radioCirculo = prompt("Inserte el radio del círculo");

function perimetroCirculo(radio){
    return Math.PI*2*radio;
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}

console.log({
    perímetro:perimetroCirculo(radioCirculo),
    área:areaCirculo(radioCirculo)
});

console.groupEnd();


//HALLAR LA ALTURA DE UN TRIANGULO ESCALENO TENIENDO EL VALOR DE SUS TRES LADOS

function alturaEscaleno (ladoEscaleno1,ladoEscaleno2,ladoEscaleno3){
    let ss = (ladoEscaleno1+ladoEscaleno2+ladoEscaleno3)/2;
    if((ladoEscaleno1 != ladoEscaleno2)&&(ladoEscaleno1 != ladoEscaleno3)&&(ladoEscaleno2 != ladoEscaleno3)){
        return (2/ladoEscaleno1)*Math.sqrt(ss*(ss-ladoEscaleno1)*(ss-ladoEscaleno2)*(ss-ladoEscaleno3));
    }
    else{
        console.warn("No es un triángulo escaleno!!!");
    }
}




























/*
//SUMA HASTA LLEGAR AL RESULTADO

function sumaCorrecta(){
    let resultado = prompt("¿Cuánto es 2+2? ");
    while(resultado != 4){
        resultado = prompt("¿Cuánto es 2+2? ");
    }
    return resultado;
}
sumaCorrecta(); */

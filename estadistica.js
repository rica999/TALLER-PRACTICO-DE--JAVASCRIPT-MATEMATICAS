//PROMEDIO
function promedio(array){
    let sumaTotalArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotalArray = sumaTotalArray + array[i];
    }
    let promedio = sumaTotalArray / array.length;
    return promedio;
}

//PROMEDIO CON REDUCE
function promedioReduce(array){
    let sumaTotal = array.reduce((valorAcumulado,cadaElementoArray) => valorAcumulado + cadaElementoArray);
    let promedio = sumaTotal / array.length;
    return promedio;
}

//DETERMINAR SI LA LONGITUD DEL ARRAY ES PAR O IMPAR

function isParOrImpar(array){
    let veredicto;
    veredicto = (array.length % 2 == 0) ? "Es par" : "Es impar";
    return veredicto;
    /* if(array.length % 2 == 0){
        veredicto = "Es par";
    }
    else{
        veredicto = "Es impar";
    }
    return veredicto; */
}

//MEDIANA

function mediana(arrayUnorder){
    let parOrImpar = isParOrImpar(arrayUnorder);
    let mediana;

    let array = arrayUnorder.sort((valorAcumulado,cadaElementoArray)=>valorAcumulado - cadaElementoArray);
    //valorAcunulado > cadaElementoArray -- return -1 (No cambia de posición)
    //valorAcunulado = cadaElementoArray -- return 0 (No cambia de posición)
    //valorAcunulado < cadaElementoArray -- return 1 (Cambia de posición)

    if(parOrImpar == "Es par"){
        mediana = (array[(array.length/2)] + (array[(array.length/2)-1]))/2;
    }
    else{
        mediana = array[Math.floor(array.length/2)];
    }
    return mediana;
}

//MODA
function moda(array){
    let contador=0;
    let element = 0;
    let repeatElements = [];
    let maxRepeat = 0;
    let moda = 0;
    while(element < array.length){
        for(let i = 0; i<array.length; i++){
            if(array[element] == array[i]){
                contador = contador+1;
            }
        }
        if(contador > 1){
            repeatElements.push(
                {numero: array[element],repeticiones: contador}
            );
        }
        contador = 0;
        element++;
    }
    for (let j = 0; j < repeatElements.length; j++) {
        if(maxRepeat < repeatElements[j].repeticiones){
            maxRepeat = repeatElements[j].repeticiones;
            moda = repeatElements[j].numero;
        }
    }
    return moda;
}

//MODA RESUMIDA
function modaResumida(array){
    let object = {};
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        if(object[elemento]){ //si existe el valor con esa propiedad en el objeto
            object[elemento] += 1;
        }
        else{
            object[elemento] = 1;
        }
    }
    let maximo = Object.values(object).reduce((a,b)=>Math.max(a,b));
    for (let j = 0; j < Object.values(object).length; j++) {
        if(maximo == Object.values(object)[j]){
            return Number(Object.keys(object)[j]);
        }
    }
}

//Ordenar un array bidimensional según el segundo elemento
let objetoNombre = {
    "1": 5,
    "2": 1,
    "3": 3
}
let arrayEntriesObjeto = Object.entries(objetoNombre);

function ordenarListaBidimensional(arrayBi){
    let ordenamiento = arrayBi.sort((a,b)=>b[1]-a[1]);
    return ordenamiento[0][0];
}

//MEDIA ARITMÉTICA

arrayCuadratica = [0.94,-0.42,0.51,1.29,-0.95];

function mediaCuadrática(array){
    let sumatoria = array.reduce((acumulado,element) => acumulado + (element**2));
    let media = sumatoria/array.length;
    let mediaCuadrática = Math.sqrt(media).toFixed(2);
    return Number(mediaCuadrática);
}

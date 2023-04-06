/*------------------------ÁREAS Y PERÍMETROS-----------------------------*/

//CUADRADO

let ladoCuadrado = document.querySelector("#ladoCuadrado");

let resultadoAreaCuadrado = document.querySelector("#resultadoAreaCuadrado");
let resultadoPerimetroCuadrado = document.querySelector("#resultadoPerimetroCuadrado");
let btnCuadrado = document.querySelector("#btnCuadrado");

btnCuadrado.addEventListener("click",areaCuadrado);
btnCuadrado.addEventListener("click",perimetroCuadrado);

function areaCuadrado(){
    const area = ladoCuadrado.value ** 2;
    resultadoAreaCuadrado.innerHTML = "El área del cuadrado es: " + area.toFixed(2);
}
function perimetroCuadrado(){
    const perimetro = ladoCuadrado.value * 4;
    resultadoPerimetroCuadrado.innerHTML = "El perímetro del cuadrado es: " + perimetro.toFixed(2);
}

//TRIANGULO

let ladoTriangulo1 = document.querySelector("#ladoTriangulo1");
let ladoTriangulo2 = document.querySelector("#ladoTriangulo2");
let ladoTriangulo3 = document.querySelector("#ladoTriangulo3");

let resultadoAreaTriangulo = document.querySelector("#resultadoAreaTriangulo");
let resultadoPerimetroTriangulo = document.querySelector("#resultadoPerimetroTriangulo");
let btnTriangulo = document.querySelector("#btnTriangulo");

btnTriangulo.addEventListener("click",areaTriangulo);
btnTriangulo.addEventListener("click",perimetroTriangulo);

function areaTriangulo(){
    const s = (Number(ladoTriangulo1.value) + Number(ladoTriangulo2.value) + Number(ladoTriangulo3.value))/2;
    const area = Math.sqrt(s*(s-Number(ladoTriangulo1.value))*(s-Number(ladoTriangulo2.value))*(s-Number(ladoTriangulo3.value)));
    resultadoAreaTriangulo.innerHTML = "El área del triángulo es: " + area.toFixed(2);
}
function perimetroTriangulo(){
    const perimetro = Number(ladoTriangulo1.value) + Number(ladoTriangulo2.value) + Number(ladoTriangulo3.value);
    resultadoPerimetroTriangulo.innerHTML = "El perímetro del triángulo es: " + perimetro.toFixed(2);
}

//CIRCULO

let radioCirculo = document.querySelector("#radioCirculo");

let resultadoAreaCirculo = document.querySelector("#resultadoAreaCirculo");
let resultadoPerimetroCirculo = document.querySelector("#resultadoPerimetroCirculo");
let btnCirculo = document.querySelector("#btnCirculo");

btnCirculo.addEventListener("click",areaCirculo);
btnCirculo.addEventListener("click",perimetroCirculo);

function areaCirculo(){
    const area = Math.PI * Math.pow(Number(radioCirculo.value),2);
    resultadoAreaCirculo.innerHTML = "El área del circulo es: " + area.toFixed(2);
}
function perimetroCirculo(){
    const perimetro = Math.PI*2*Number(radioCirculo.value);
    resultadoPerimetroCirculo.innerHTML = "El perímetro del circulo es: " + perimetro.toFixed(2);
}

/*------------------------PORCENTAJES-----------------------------*/

let listcupon = [
    {
        nombre: "Freddy" , descuento: 99
    },
    {
        nombre: "JuanDC" , descuento: 50
    },
    {
        nombre: "Ricar999" , descuento: 25
    }
]
let cuponBox = document.querySelector(".cupon-avaiable");

function printCupon(){
    for (let i = 0; i < listcupon.length; i++) {
        let c = document.createElement("p");
        c.innerHTML =
        `
        <p>${listcupon[i].nombre} - Descuento: ${listcupon[i].descuento}</p>
        `
        cuponBox.appendChild(c);
    }
}

printCupon();

let precio = document.querySelector("#precio");
let cupon = document.querySelector("#cupon");
let resultadoPrecio = document.querySelector("#resultadoPrecio");
let btnCalcularPagoTotal = document.querySelector("#btnCalcularPagoTotal");

let nameNewCupon = document.querySelector("#nameNewCupon");
let descountNewCupon = document.querySelector("#descountNewCupon");
let btnInsertCupon = document.querySelector("#btnInsertCupon");
let insertCuponText = document.querySelector("#insertCuponText");

let nameEditCupon = document.querySelector("#nameEditCupon");
let descountEditCupon = document.querySelector("#descountEditCupon");
let btnEditCupon = document.querySelector("#btnEditCupon");
let editCuponText = document.querySelector("#editCuponText");

let nameDeleteCupon = document.querySelector("#nameDeleteCupon");
let btnDeleteCupon = document.querySelector("#btnDeleteCupon");
let deleteCuponText = document.querySelector("#deleteCuponText");

btnCalcularPagoTotal.addEventListener("click",pagoTotal);
btnInsertCupon.addEventListener("click",insertCupon);
btnEditCupon.addEventListener("click",editCupon);
btnDeleteCupon.addEventListener("click",deleteCupon);

function pagoTotal(){
    if(precio.value != "" && cupon.value != ""){

        let descuento = 0;

        let existeCupon = listcupon.find(existCupon => existCupon.nombre == cupon.value);

        if(existeCupon){
            descuento = existeCupon.descuento;
        }
        else{
            resultadoPrecio.innerHTML="No existe cupón. Pagué todo amigo";
            return;
        }

        if(descuento < 100){
            let pago = precio.value - (precio.value * descuento)/100;
            resultadoPrecio.innerHTML = "Total a pagar: " + pago.toFixed(2);
        }
        else{
            resultadoPrecio.innerHTML="¿Estás regalando el producto?";
        }
    }
    else{
        resultadoPrecio.innerHTML="Por favor llene los campos";
    }
}

function insertCupon(){
    if(nameNewCupon.value != "" && descountNewCupon.value != ""){
        listcupon.push({
            nombre: nameNewCupon.value, descuento: descountNewCupon.value
        });
        let c = document.createElement("p");
        c.innerHTML =
        `
        <p>${listcupon[listcupon.length-1].nombre} - Descuento: ${listcupon[listcupon.length-1].descuento}</p>
        `
        cuponBox.appendChild(c);
        insertCuponText.innerHTML="";
    }
    else{
        insertCuponText.innerHTML="Llene los campos por favor"
    }
}

function editCupon(){
    if(nameEditCupon.value != "" && descountEditCupon.value != ""){
        if(listcupon.some(element => nameEditCupon.value == element.nombre)){
            editCuponText.innerHTML="";
        }
        else{
            editCuponText.innerHTML="No existe cupón";
        }

        for (let i = 0; i < listcupon.length; i++){
            if(nameEditCupon.value == listcupon[i].nombre){
                listcupon[i].descuento = Number(descountEditCupon.value);
                cuponBox.innerHTML="";
                printCupon();
            }
        }
    }
    else{
        editCuponText.innerHTML="Llene los campos por favor"
    }
}

function deleteCupon(){
    if(listcupon.some(element => nameDeleteCupon.value == element.nombre)){
        deleteCuponText.innerHTML="";
    }
    else{
        deleteCuponText.innerHTML="No existe cupón";
    }
    for (let i = 0; i < listcupon.length; i++){
        if(nameDeleteCupon.value == listcupon[i].nombre){
            listcupon.splice(i,1);
            cuponBox.removeChild(cuponBox.children[i+1]);
        }
    }
}

/*------------------------ARRAY-----------------------------*/

let lengthArray = document.querySelector("#lengthArray");
let insertArrayText = document.querySelector("#insertArrayText");
let insertArrayInput = document.querySelector("#insertArrayInput");
let calcularEstadistica = document.querySelector("#calcularEstadistica");
let promedioResult = document.querySelector("#promedioResult");
let medianaResult = document.querySelector("#medianaResult");
let modaResult = document.querySelector("#modaResult");
let listInputs;

lengthArray.addEventListener("change",insertTotalArray);

function insertTotalArray(e){
    insertArrayText.innerHTML = "";
    insertArrayInput.innerHTML = "";
    calcularEstadistica.innerHTML = "";
    for (let i = 0; i < e.target.value; i++) {
        let input = document.createElement("input");
        input.setAttribute("type","number");
        input.classList.add("input-element-array");
        let p = document.createElement("p");
        p.classList.add("input-element-text");
        p.innerHTML="Elemento "+ i;
        insertArrayText.append(p);
        insertArrayInput.append(input);
    }
    listInputs = document.getElementsByClassName("input-element-array");
    for(let j = 0; j < listInputs.length ; j++){
        listInputs[j].addEventListener("change",promedio);
        listInputs[j].addEventListener("change",mediana);
        listInputs[j].addEventListener("change",moda);
    }
}

function promedio(){
    for (let index = 0; index < listInputs.length; index++) {
        if(listInputs[index].value == ""){
            promedioResult.innerHTML="Llene todos los valores del array";
        }
        else{
            promedioResult.innerHTML="";
            let sumaTotal = 0;
            for (let i = 0; i < listInputs.length; i++) {
                sumaTotal = sumaTotal + Number(listInputs[i].value);
            }
            let promedio = sumaTotal / listInputs.length;
            promedioResult.innerHTML="El promedio es: "+promedio.toFixed(2);
        }
    }
}

function isParOrImpar(){
    let veredicto;
    veredicto = (listInputs.length % 2 == 0) ? "Es par" : "Es impar";
    return veredicto;
}

function mediana(){
    for (let index = 0; index < listInputs.length; index++) {
        if(listInputs[index].value == ""){
            medianaResult.innerHTML="Llene todos los valores del array";
        }
        else{
            let parOrImpar = isParOrImpar();
            let mediana;
            let array = [];
            for (const element of listInputs) {
                array.push(Number(element.value));
            }
            let arrayOrdened = array.sort((valorAcumulado,cadaElementoArray)=>valorAcumulado - cadaElementoArray);
            //valorAcunulado > cadaElementoArray -- return -1 (No cambia de posición)
            //valorAcunulado = cadaElementoArray -- return 0 (No cambia de posición)
            //valorAcunulado < cadaElementoArray -- return 1 (Cambia de posición)

            if(parOrImpar == "Es par"){
                mediana = (array[(arrayOrdened.length/2)] + (array[(arrayOrdened.length/2)-1]))/2;
            }
            else{
                mediana = array[Math.floor(array.length/2)];
            }
            medianaResult.innerHTML="La mediana es: "+mediana.toFixed(2);
        }
    }
}

function moda(){
    for (let index = 0; index < listInputs.length; index++) {
        if(listInputs[index].value == ""){
            modaResult.innerHTML="Llene todos los valores del array";
        }
        else{
            let object = {};
            for (let i = 0; i < listInputs.length; i++) {
                let elemento = listInputs[i].value;
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
                    modaResult.innerHTML="La moda es: " + Number(Object.keys(object)[j]);
                }
            }
        }
    }
}
//DESCUENTO
let precio = document.getElementById("precio");
let cupon = document.getElementById("cupon");
let totalPagar = document.getElementById("resultado");
let calcular = document.getElementById("calcular");

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

function pagoTotal(){
    if(precio.value != "" && cupon.value != ""){

        let descuento = 0;

/*      for(let i = 0; i<listcupon.length ; i++){
            if(cupon.value == listcupon[i].nombre){
                descuento = listcupon[i].descuento;
            }
        }

        if(descuento == 0){
            alert("¿Graciosito eres no man?");
            return;
        }
*/

        let existeCupon = listcupon.find(existCupon => existCupon.nombre == cupon.value);

        if(existeCupon){
            descuento = existeCupon.descuento;
        }
        else{
            alert("¿Graciosito eres no man?");
            return;
        }

        if(descuento < 100){
            let pago = precio.value - (precio.value * descuento)/100;
            totalPagar.innerHTML = "Total a pagar: " + pago;
        }
        else{
            alert("¿Estás regalando el producto?");
        }
    }
    else{
        alert("Llena los campos");
    }
}

calcular.addEventListener("click",pagoTotal);
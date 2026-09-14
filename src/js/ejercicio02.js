// importaciones
import { calcularArea } from "../services/serviciosEjercicios02.js";

// cuerpo del proceso

let base = prompt("Ingrese la base:");

while (isNaN(base)) {
    alert("Ingrese un número, no una letra para la basea");
    base = prompt("Ingrese la base:");
}

let altura = prompt("Ingrese la altura:");

while (isNaN(altura)) {
    alert("Ingrese un número, no una letra para la altura");
    altura = prompt("Ingrese la altura:");
}

// Calculamos el área
const resultado = calcularArea(base, altura);

alert(`El área del triángulo es: ${resultado}`);



























//const PI = Math.PI;


//definir las funciones 
//function  calcularArea(radio){
  //  resultado = PI * Math.pow(radio,2);
    //return resultado;
    
//}



 // area del circulo
 //const PI = 3.14;
 
 
 //let radio =2;
 
 //const ingresoRadio = prompt("Ingrese el radio del círculo: ");

 //Validacion 
 //alert ("es tipo de dato ingresado es " + typeof(ingresoRadio));
 //const radio = Number(ingresoRadio);

 

//proceso de calculo del area del circulo

 //const circulo = PI * Math.pow(radio,2);

 //alert(`area del circulo = ${calcularArea(radio)} m²`);
//console.log(`El área del círculo es = ${circulo} m²`);
//console.log(calcularArea(radio));

  
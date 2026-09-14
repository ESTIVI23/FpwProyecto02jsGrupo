import { compararLetras } from "../services/serviciosEjercicios01.js";

// Primera letra
let letra1 = prompt("Ingrese la primera letra");

while (!isNaN(letra1)) {
    alert("Ingrese una letra, no un número");
    letra1 = prompt("Ingrese la primera letra");
}

// Segunda letra
let letra2 = prompt("Ingrese la segunda letra");

while (!isNaN(letra2)) {
    alert("Ingrese una letra, no un número");
    letra2 = prompt("Ingrese la segunda letra");
}

// Comparar las letras
const resultado = compararLetras(letra1, letra2);

alert(resultado);
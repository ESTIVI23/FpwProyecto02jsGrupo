import { compararLetras} from "../services/serviciosEjercicios01.js";



//cuerpo del proceso

const letra1 = prompt("Ingrese la primera letra");
const letra2 = prompt("Ingrese la segunda letra");

//llamamod a la funcion  pasandole las dos variables como argumentos 

compararLetras(letra1, letra2);


const resultado = compararLetras(letra1, letra2);

alert(resultado);
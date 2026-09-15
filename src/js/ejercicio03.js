
import { procesarCiudadPais } from "../services/serviciosEjercicios03.js";

// Ingreso de datos

const ciudad = prompt("Ingrese el nombre de la ciudad:");

const pais = prompt("Ingrese el nombre del país:");

// Procesar los datos

const resultado = procesarCiudadPais(ciudad, pais);

// Mostrar resultado

alert(resultado);
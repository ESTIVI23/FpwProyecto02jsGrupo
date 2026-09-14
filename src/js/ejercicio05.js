



import { calcularRendimiento } from "../services/serviciosEjercicios05.js";

const formulario = document.querySelector("#formulario");

const totalPreguntas = document.querySelector("#totalPreguntas");

const respuestasCorrectas = document.querySelector("#respuestasCorrectas");

const resultado = document.querySelector("#resultado");



formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const total = Number(totalPreguntas.value);

    const correctas = Number(respuestasCorrectas.value);

    const resultadoFinal = calcularRendimiento(total, correctas);

    resultado.textContent = resultadoFinal;
});
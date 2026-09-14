export const calcularRendimiento = (total, correctas) => {

    const porcentaje = (correctas / total) * 100;

    let resultado;

    if (porcentaje >= 90) {
        resultado = `Porcentaje: ${porcentaje}% - Excelente`;
    } else if (porcentaje >= 70) {
        resultado = `Porcentaje: ${porcentaje}% - Muy Bueno`;
    } else if (porcentaje >= 50) {
        resultado = `Porcentaje: ${porcentaje}% - Aprobado`;
    } else {
        resultado = `Porcentaje: ${porcentaje}% - Desaprobado`;
    }

    return resultado;
};
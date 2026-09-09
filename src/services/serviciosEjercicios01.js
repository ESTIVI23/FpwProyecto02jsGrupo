// funcion flecha 
export const compararLetras = (l1, l2) => {

    let resultado;

    if (l1 > l2) {
        resultado = `${l1} es mayor que ${l2}`;
    } else if (l1 < l2) {
        resultado = `${l2} es mayor que ${l1}`;
    } else {
        resultado = "Las letras son iguales";
    }

    return resultado;
}

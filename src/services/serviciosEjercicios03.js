
export const procesarCiudadPais = (ciudad, pais) => {

    const nombreCompleto = `${ciudad}, ${pais}`;

    const cantidadCiudad = ciudad.length;

    const cantidadPais = pais.length;

    let comparacion;

    if (cantidadCiudad > cantidadPais) {
        comparacion = "La ciudad tiene más caracteres que el país";
    } else if (cantidadCiudad < cantidadPais) {
        comparacion = "El país tiene más caracteres que la ciudad";
    } else {
        comparacion = "La ciudad y el país tienen la misma cantidad de caracteres";
    }

    return `Lugar: ${nombreCompleto}
Cantidad de caracteres de la ciudad: ${cantidadCiudad}
Cantidad de caracteres del país: ${cantidadPais}
${comparacion}`;
};
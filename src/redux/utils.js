export function obtenerIndicePalabra(idPalabra, palabrasLista){
    return palabrasLista.findIndex((palabra) => palabra.idPalabra === idPalabra)
}
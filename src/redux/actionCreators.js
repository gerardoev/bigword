import * as ActionTypes from "./actionTypes";

export const addCategory = (nombreCategoria, color, id) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        id,
        nombreCategoria,
        color
    }
})

export const addWord = (palabra, significado, ejemplos, idCategoria, idPalabra) => ({
    type: ActionTypes.ADD_WORD,
    payload: {
        palabra,
        significado,
        ejemplos,
        idCategoria,
        idPalabra
    }
})

export const categoriasLoaded = () => ({
    type: ActionTypes.CATEGORY_LOADED
})

export const deleteWord = (idCategoria, idPalabra) => ({
    type: ActionTypes.DELETE_WORD,
    payload: {
        idPalabra,
        idCategoria
    }
})

export function editWord(idCategoria, idWord, newValues){
    return {
        type: ActionTypes.EDIT_WORD,
        payload: {
            idCategoria,
            idWord,
            newValues
        }
    }
}
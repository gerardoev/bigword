import * as ActionTypes from "./actionTypes";

export const addCategory = (nombreCategoria, color) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        nombreCategoria,
        color
    }
})

export const addWord = (palabra, significado, ejemplos, idCategoria) => ({
    type: ActionTypes.ADD_WORD,
    payload: {
        palabra,
        significado,
        ejemplos,
        idCategoria
    }
})
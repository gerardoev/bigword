import * as ActionTypes from "./actionTypes";

export const addCategory = (nombreCategoria, color, id) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        id,
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
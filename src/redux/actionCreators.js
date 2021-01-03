import * as ActionTypes from "./actionTypes";

export const addCategory = (nombreCategoria, color) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        nombreCategoria,
        color
    }
})
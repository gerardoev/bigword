import * as ActionTypes from "./actionTypes";
import {obtenerIndicePalabra} from './utils'

export const Palabras = (state = {}, action) => {
    let payload = {}
    let indice = 0
    let nuevoArr = []
    switch (action.type){
        case ActionTypes.ADD_WORD:
            payload = action.payload;
            var idCategoria = payload.idCategoria;
            delete payload.idCategoria;
            var word = payload;
            var arr = [];
            if (state.hasOwnProperty(idCategoria)){
                arr = state[idCategoria];
                arr.push(word);
            }else {
                arr.push(word);
            }
            return {...state, [idCategoria]: arr};
        case ActionTypes.DELETE_WORD:
            state[action.payload.idCategoria].forEach((element, index) => {
                if (element.idPalabra === action.payload.idPalabra){
                    indice = index;
                }
            });
            //copiamos a un nuev arreglo para mantener el estado previo el nuevo estado (el modificado)
            nuevoArr = state[action.payload.idCategoria].slice();
            nuevoArr.splice(indice,1);
            return {...state, [action.payload.idCategoria]: nuevoArr}
        case ActionTypes.EDIT_WORD:
            payload = action.payload
            indice = obtenerIndicePalabra(payload.idWord, state[payload.idCategoria])
            nuevoArr = [...state[payload.idCategoria]]
            nuevoArr[indice] = {...nuevoArr[indice], ...payload.newValues}
            return {...state, [payload.idCategoria]: nuevoArr}
        default:
            return state;
    }
};
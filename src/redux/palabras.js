import * as ActionTypes from "./actionTypes";

export const Palabras = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.ADD_WORD:
            var payload = action.payload;
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
            var indice;
            state[action.payload.idCategoria].forEach((element, index) => {
                if (element.idPalabra === action.payload.idPalabra){
                    indice = index;
                }
            });
            //copiamos a un nuev arreglo para mantener el estado previo el nuevo estado (el modificado)
            var nuevoArr = state[action.payload.idCategoria].slice();
            nuevoArr.splice(indice,1);
            return {...state, [action.payload.idCategoria]: nuevoArr}
        default:
            return state;
    }
};
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
                arr = state.idCategoria;
                arr.push(word);
            }else {
                arr.push(word);
            }
            return {...state, [idCategoria]: arr};
        default:
            return state;
    }
};
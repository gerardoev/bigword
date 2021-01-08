import * as ActionTypes from "./actionTypes";

export const Palabras = (state = [], action) => {
    switch (action.type){
        case ActionTypes.ADD_WORD:
            var word = action.payload;
            word.id = state.length;
            return state.concat(word);
        default:
            return state;
    }
};
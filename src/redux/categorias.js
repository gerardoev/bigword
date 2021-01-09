import * as ActionTypes from "./actionTypes";

export const Categorias = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_CATEGORY:
            var category = action.payload;
            return state.concat(category);
        default:
            return state;
    }
};
import * as ActionTypes from "./actionTypes";

export const Categorias = (state={
    categorias: [],
    categoriasLoaded: false, 
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_CATEGORY:
            var category = action.payload;
            return {...state, categorias: state.categorias.concat(category)};
        case ActionTypes.CATEGORY_LOADED:
            return {...state, categoriasLoaded: true};
        default:
            return state;
    }
};
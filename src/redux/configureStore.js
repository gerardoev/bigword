import { createStore, combineReducers } from "redux";
import {Categorias} from "./categorias";
import {Palabras} from "./palabras";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categorias: Categorias,
            palabras: Palabras
        })
    );
    return store;
}
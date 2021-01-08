import { createStore, combineReducers, applyMiddleware } from "redux";
import {Categorias} from "./categorias";
import {Palabras} from "./palabras";
import { logger } from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categorias: Categorias,
            palabras: Palabras
        }),
        applyMiddleware(logger)
    );
    return store;
}
import React from 'react';
import MainComponent from "../pages/MainComponent/MainComponent";
import Error404 from "../pages/Error404/Error404";
import CompletarJuego from '../pages/CompletarJuego/CompletarJuego';
import CategoriaPage from '../pages/CategoriaPage/CategoriaPage';
import FormularioPalabraComponent from "../pages/FormularioPalabraPage/FormularioPalabraPage";

export default [
    {
        route: "/",
        exact: true,
        component: <MainComponent/>
    },
    //debe ser llamado por el menú
    {
        route: "/completar/:idCategoria",
        exact: true,
        component: <CompletarJuego/>
    },
    {
        route: "/categoria/:idCategoria",
        exact: true,
        component: <CategoriaPage/>
    },
    {
        route: "/test",
        exact: false,
        component: <FormularioPalabraComponent/>
    },
    {
        route: "*",
        exact: true,
        component: Error404
    }
]
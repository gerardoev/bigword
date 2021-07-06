import React from 'react';
import MainComponent from "../components/MainComponent/MainComponent";
import Error404 from "../components/Error404/Error404";
import CompletarJuego from '../pages/CompletarJuego/CompletarJuego';
import CategoriaPage from '../components/CategoriaPage/CategoriaPage';
import MainLayout from '../layouts/MainLayout/mainLayout';
import FormularioPalabraComponent from "../components/FormularioPalabraComponent/FormularioPalabraComponent";

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
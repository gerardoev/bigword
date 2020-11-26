import React from 'react';
import MainComponent from "../components/MainComponent/MainComponent";
import Error404 from "../components/Error404/Error404";
import {toast} from "react-toastify";
import CompletarJuego from '../components/CompletarJuego/completarJuego';
import CategoriaPage from '../components/CategoriaPage/CategoriaPage';
import MainLayout from '../layouts/MainLayout/mainLayout';

export default [
    {
        route: "/",
        exact: true,
        component: <MainComponent/>
    },
    //debe ser llamado por el menú
    {
        route: "/completar",
        exact: true,
        component: <MainLayout><CompletarJuego/></MainLayout>
    },
    {
        route: "/categoria/:idCategoria",
        exact: true,
        component: <MainLayout><CategoriaPage/></MainLayout>
    },
    {
        route: "*",
        exact: true,
        component: Error404
    }
]
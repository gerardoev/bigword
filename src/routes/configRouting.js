import React from 'react';
import MainComponent from "../components/MainComponent/MainComponent";
import Error404 from "../components/Error404/Error404";
import CompletarJuego from "../components/CompletarJuego/completarJuego";

export default [
    {
        route: "/",
        exact: true,
        component: <MainComponent/>
    },
    {
        route: "/completar",
        exact: true,
        component: <CompletarJuego/>
    },
    {
        route: "*",
        exact: true,
        component: Error404
    }
]
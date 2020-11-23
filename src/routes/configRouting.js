import React from 'react';
import MainComponent from "../components/MainComponent/MainComponent";
import Error404 from "../components/Error404/Error404";

export default [
    {
        route: "/",
        exact: true,
        component: <MainComponent/>
    },
    {
        route: "*",
        exact: true,
        component: Error404
    }
]
import React, { Component } from 'react';
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import CategoriaComponent from "../CategoriaComponent/CategoriaComponent";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <MainLayout>
                    <CategoriaComponent/>
                </MainLayout>
            </div>
        );
    }
}

export default MainComponent;
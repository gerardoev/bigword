import React, { Component } from 'react';
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import CategoriaComponent from "../CategoriaComponent/CategoriaComponent";
import GridLayout from "../../layouts/GridLayout/GridLayout";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            estadoTemporal: [
            {
                id: 0,
                nombreCategoria: "Francés",
                color: "#1b5e20"
            },
            {
                id: 1,
                nombreCategoria: "Español",
                color: "#b71c1c"
            }
            ,
            {
                id: 2,
                nombreCategoria: "Inglés",
                color: "#FFC107"
            }
            ,
            {
                id: 3,
                nombreCategoria: "Alemán",
                color: "#bf360c"
            }
            ,
            {
                id: 4,
                nombreCategoria: "Chino",
                color: "#FFC107"
            }
            ,
            {
                id: 5,
                nombreCategoria: "Japonés",
                color: "#1b5e20"
            }
        ]
        };
    }


    render() {
        const renderCategorias = ()=>{
            return(
                this.state.estadoTemporal.map((categoria) =>{
                    console.log(categoria.nombreCategoria);
                    return(
                        <CategoriaComponent key={categoria.id} color={categoria.color} nombre={categoria.nombreCategoria}/>
                    );
                })
            );
        }
        return (
            <div>
                <MainLayout>
                    <GridLayout>
                        {renderCategorias()}
                    </GridLayout>
                </MainLayout>
            </div>
        );
    }
}

export default MainComponent;
import React, {useState, useEffect} from 'react';
import "./CategoriaPage.scss";
import CategoriaComponent from "../CategoriaComponent/CategoriaComponent";
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import  GridLayout  from "../../layouts/GridLayout/GridLayout";

const getPalabrasApi = () =>{
    return(
        [
            {
                id: 0,
                palabra: "want",
                significado: "querer",
                ejemplos: [
                    "I want you"
                ],
                imagen: ""
            },
            {
                id: 1,
                palabra: "jeans",
                significado: "pantalones de mezclilla",
                ejemplos: [
                    "I love those jeans!"
                ],
                imagen: ""
            },
            {
                id: 2,
                palabra: "hope",
                significado: "espero",
                ejemplos: [
                    "I hope you are ok"
                ],
                imagen: ""
            }
        ]
    );
}

const CategoriaPage = () => {
    const [palabras, setPalabras] = useState();
    const [cambioPalabra, setCambioPalabra] = useState(false);
    
    const renderPalabras = (palabras)=>{
        console.log("se renderizan las palabras");
        return(
            palabras?.map((palabra) =>{
                return(
                    <CategoriaComponent key={palabra.id} color={"#1b5e20"} nombre={palabra.palabra}/>
                );
            })
        );
    }
    return (
        <div className="categoria-page">
                <GridLayout>
                    {renderPalabras(getPalabrasApi())}
                </GridLayout>
        </div>
    );
};

export default CategoriaPage;
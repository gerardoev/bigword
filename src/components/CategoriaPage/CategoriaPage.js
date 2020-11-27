import React, {useState, useEffect} from 'react';
import "./CategoriaPage.scss";
import {PalabraComponent} from "../CategoriaComponent/CategoriaComponent";
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import  GridLayout  from "../../layouts/GridLayout/GridLayout";
import  BasicModal from "../BasicModalComponent/BasicModal";

const getPalabrasApi = () =>{
    return(
        [
            {
                id: 0,
                palabra: "want",
                significado: "querer",
                ejemplos: [
                    "I want an apple"
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

const PalabraCard = ({palabraSeleccionada}) =>{
    return(
        <div className="palabra-card">
            <div className="palabra-card__palabra">
                <h1>{palabraSeleccionada.palabra}</h1>
            </div>
            <div className="palabra-card__significado">
                <h3>Significado:</h3>
                <h3>{palabraSeleccionada.significado}</h3>
            </div>
            <div className="palabra-card__ejemplos">
                <h3>Ejemplo:</h3>
                <h3>{palabraSeleccionada.ejemplos[0]}</h3>
            </div>
        </div>
    );
}

const CategoriaPage = ({}) => {
    const [palabraSeleccionada, setPalabraSeleccionada] = useState(palabraInitialState());
    const [palabras, setPalabras] = useState(getPalabrasApi());
    const [cambioPalabra, setCambioPalabra] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const toggleModal = () =>{
        setShowModal(!showModal);
    }

    const onClickPalabra = (palabra) =>{
        setPalabraSeleccionada(palabra);
        setShowModal(true);
    }

    const agregarPalabra = (palabra) =>{
        console.log("hola");
        const palabras_copy = [...palabras];
        palabras_copy.push(palabra);
        console.log(palabras_copy);
        setPalabras(palabras_copy);
    }
    
    const renderPalabras = (palabras)=>{
        console.log("se renderizan las palabras");
        return(
            
                palabras?.map((palabra) =>{
                    return(
                        <PalabraComponent key={palabra.id} color={"#1b5e20"} nombre={palabra.palabra} onClick={() => onClickPalabra(palabra)}/>
                    );
                })
        );
    }
    return (
        <MainLayout agregarPalabra={(palabra) => agregarPalabra(palabra)}>
            <div className="categoria-page">
                    <GridLayout>
                        {renderPalabras(palabras)}
                    </GridLayout>
                    <BasicModal showModal={showModal} toggleModal={toggleModal} >
                        <PalabraCard palabraSeleccionada={palabraSeleccionada}/>
                    </BasicModal>
            </div>
        </MainLayout>
    );
};

const palabraInitialState = () =>{
    return {
        id: "",
        palabra: "",
        significado: "",
        ejemplos: []
    }
}

export default CategoriaPage;
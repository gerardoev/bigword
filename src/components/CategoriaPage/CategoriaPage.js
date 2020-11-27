import React, {useState, useEffect} from 'react';
import "./CategoriaPage.scss";
import {PalabraComponent} from "../CategoriaComponent/CategoriaComponent";
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import  GridLayout  from "../../layouts/GridLayout/GridLayout";
import  BasicModal from "../BasicModalComponent/BasicModal";
import {FormGroup, Input, Button} from "reactstrap";

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
    const [showModalPalabra, setShowModalPalabra] = useState(false);
    const [showModalNuevaP, setShowModalNuevaP] = useState(false);
    const [nuevaPSTate, setNuevaPState] = useState({
        id: 0,
        palabra: "",
        significado: "",
        color: "#b71c1c"
    });
    const openModal = () =>{
        setShowModalNuevaP(
            true
        );
    }
    const cerrarModal = () =>{
        setShowModalNuevaP(
            false
        );
    }
    
    const toggleModalPalabra = () =>{
        setShowModalPalabra(!showModalPalabra);
    }

    const toggleModalNuevaP = () =>{
        setShowModalNuevaP(!showModalNuevaP);
    }

    const onClickPalabra = (palabra) =>{
        setPalabraSeleccionada(palabra);
        setShowModalPalabra(true);
    }

    const agregarPalabra = (palabra) =>{
        const palabras_copy = [...palabras];
        const palabra_copy = palabra;
        palabra_copy["ejemplos"] = [palabra_copy.ejemplo];
        delete palabra_copy.ejemplo;
        palabras_copy.push(palabra_copy);
        console.log(palabras_copy);
        setPalabras(palabras_copy);
    }

    const onChangeHandler = (event) =>{
        const target = event.target;
        const value = target.value;
        const nombre = target.name;
        setNuevaPState({ 
            ...nuevaPSTate,
            [nombre]: value,
            color: "#b71c1c"
        });
    }
    
    const onNuevaP = () => {
        setNuevaPState({
                ...nuevaPSTate,
                id: nuevaPSTate.id +1
        });
        agregarPalabra(nuevaPSTate);
        setNuevaPState( {
            ...nuevaPSTate,
            nombre: ""
        });
        cerrarModal();
    };
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
        <MainLayout agregarPalabra={(palabra) => agregarPalabra(palabra)} openModal={() => openModal()}>
            <div className="categoria-page">
                    <GridLayout>
                        {renderPalabras(palabras)}
                    </GridLayout>
                    <BasicModal showModal={showModalPalabra} toggleModal={toggleModalPalabra}>
                        <PalabraCard palabraSeleccionada={palabraSeleccionada}/>
                    </BasicModal>
                    <BasicModal showModal={showModalNuevaP} toggleModal={toggleModalNuevaP} >
                        <FormGroup>
                            <Input  type="text" placeholder="Palabra" value={nuevaPSTate.palabra} name="palabra" onChange={onChangeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Input  type="text" placeholder="Significado" value={nuevaPSTate.significado} name="significado" onChange={onChangeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Input  type="text" placeholder="Ejemplo" value={nuevaPSTate.ejemplo} name="ejemplo" onChange={onChangeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={onNuevaP}>Crear</Button>
                        </FormGroup>
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
        ejemplo: ""
    }
}

export default CategoriaPage;
import React, {useState, useEffect} from 'react';
import "./CategoriaPage.scss";
import {PalabraComponent} from "../CategoriaComponent/CategoriaComponent";
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import  GridLayout  from "../../layouts/GridLayout/GridLayout";
import  BasicModal from "../BasicModalComponent/BasicModal";
import { withRouter } from "react-router-dom";
import {FormGroup, Input, Button} from "reactstrap";
import { connect } from "react-redux";
import { addWord } from "../../redux/actionCreators";
import {db} from "../../firebase";

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

const mapDispatchToProps = dispatch => ({
    addWord: (palabra, significado, ejemplos, idCategoria ) => dispatch(addWord(palabra, significado, ejemplos, idCategoria))
});

const mapStateToProps = state => {
    return {
        palabras: state.palabras
    }
}



const CategoriaPage = (props) => {
    const {idCategoria} = props.match.params;
    const [palabraSeleccionada, setPalabraSeleccionada] = useState(palabraInitialState());
    const [showModalPalabra, setShowModalPalabra] = useState(false);
    const [showModalNuevaP, setShowModalNuevaP] = useState(false);
    const [nuevaPSTate, setNuevaPState] = useState({
        id: 0,
        palabra: "",
        significado: "",
        color: "#b71c1c"
    });

    useEffect(() => {
        if (!props.palabras.hasOwnProperty(idCategoria)){
            db.collection("palabras").where("idUsuario","==",0).where("idCategoria","==",idCategoria)
            .get()
            .then((querySS) => {
                querySS.forEach((doc) =>{
                    const palabra = doc.data();
                    console.log(palabra);
                    props.addWord(palabra.palabra, palabra.significado, palabra.ejemplos, idCategoria);
                });
            })
            .catch((error) => {
                console.log("error al hacer la consulta:", error);
            });
        }
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
        const palabra_copy = palabra;
        palabra_copy["ejemplos"] = [palabra_copy.ejemplo];
        palabra_copy["idCategoria"] = idCategoria;
        palabra_copy["idUsuario"] = 0;
        delete palabra_copy.ejemplo;
        db.collection("palabras").add(palabra_copy)
        .then((docRef) =>{
            props.addWord(palabra_copy.palabra,palabra_copy.significado, palabra_copy.ejemplos,idCategoria);
            console.log("Palabra añadida correctamente");
        })
        .catch((error) =>{
            console.log("Error al añadir la palabra:", error);
        });
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
        return(
            
                palabras[idCategoria]?.map((palabra) =>{
                    return(
                        <PalabraComponent key={palabra.id} color={"#1b5e20"} nombre={palabra.palabra} onClick={() => onClickPalabra(palabra)}/>
                    );
                })
        );
    }
    return (
        <MainLayout agregarPalabra={(palabra) => agregarPalabra(palabra)} openModal={() => openModal()} idCategoria={idCategoria}>
            <div className="categoria-page">
                    <GridLayout>
                        {renderPalabras(props.palabras)}
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CategoriaPage));
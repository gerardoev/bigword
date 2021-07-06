import React, {useState, useEffect} from 'react';
import "./CategoriaPage.scss";
import {PalabraComponent} from "../CategoriaComponent/CategoriaComponent";
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import  BasicModal from "../BasicModalComponent/BasicModal";
import ConfirmarComponent from "../ConfirmarComponent/ConfirmarComponent";
import { withRouter } from "react-router-dom";
import {FormGroup, Input, Button, Modal, ModalBody, Col, Row} from "reactstrap";
import { connect } from "react-redux";
import { addWord, deleteWord } from "../../redux/actionCreators";
import {db} from "../../firebase";
import MenuLateralComponent from "../MenuLateralComponent/MenuLateralComponent"
import {NavLink} from 'react-router-dom'



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
    addWord: (palabra, significado, ejemplos, idCategoria, idPalabra ) => dispatch(addWord(palabra, significado, ejemplos, idCategoria, idPalabra)),
    deleteWord: (idCategoria, idPalabra) => dispatch(deleteWord(idCategoria, idPalabra))
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
    const [showModalConfirmar, setShowModalConfirmar] = useState(false);
    const [nuevaPSTate, setNuevaPState] = useState({
        id: 0,
        palabra: "",
        significado: "",
        ejemplo: "",
        color: "#b71c1c"
    });

    useEffect(() => {
        if (!props.palabras.hasOwnProperty(idCategoria)){
            db.collection("palabras").where("idUsuario","==",0).where("idCategoria","==",idCategoria)
            .get()
            .then((querySS) => {
                querySS.forEach((doc) =>{
                    const palabra = doc.data();
                    console.log(doc);
                    console.log("se ha ejecutado addword de useefect");
                    props.addWord(palabra.palabra, palabra.significado, palabra.ejemplos, idCategoria, doc.id);
                });
            })
            .catch((error) => {
                console.log("error al hacer la consulta:", error);
            });
        }
    }, []);

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

    const openModalConfirmar = () => {
        setShowModalConfirmar(true);
    }

    const cerrarModalConfirmar = () => {
        setShowModalConfirmar(false);
    }
    
    const toggleModalPalabra = () =>{
        setShowModalPalabra(!showModalPalabra);
    }

    const toggleModalNuevaP = () =>{
        setShowModalNuevaP(!showModalNuevaP);
    }

    const toggleModalConfirmar = () => {
        setShowModalConfirmar(!showModalConfirmar);
    }

    const onClickPalabra = (event,palabra) =>{
        if(typeof(event.target.className) == "string"){
            if(event.target.className.includes("abrir-modal")){
                setPalabraSeleccionada(palabra);
                setShowModalPalabra(true);
            }
        }else{
            if(event.target.className.animVal.includes("abrir-modal")){
                setPalabraSeleccionada(palabra);
                setShowModalPalabra(true);
            }
        }
        
    }

    const onClickDelete = (idPalabra) => {
        setPalabraSeleccionada(idPalabra);
        openModalConfirmar();
    }

    const deleteWord = () =>{
        db.collection("palabras").doc(palabraSeleccionada).delete()
        .then(() =>{
            props.deleteWord(idCategoria, palabraSeleccionada);
            console.log("Palabra eliminada");
        })
        .catch(error => {
            console.log("No se ha eliminado la palabra:"+error);
        })
        .finally(() => {
            cerrarModalConfirmar();
        });
    }
    const agregarPalabra = (palabra) =>{
        const palabra_copy = palabra;
        palabra_copy["ejemplos"] = [palabra_copy.ejemplo];
        palabra_copy["idCategoria"] = idCategoria;
        palabra_copy["idUsuario"] = 0;
        delete palabra_copy.ejemplo;
        db.collection("palabras").add(palabra_copy)
        .then((docRef) =>{
            console.log("se ha ejecutado agregar palabra");
            props.addWord(palabra_copy.palabra,palabra_copy.significado, palabra_copy.ejemplos,idCategoria, docRef.id);
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
                        <PalabraComponent key={palabra.idPalabra} color={"#1b5e20"} nombre={palabra.palabra} onClick={(event) => onClickPalabra(event,palabra)} onClickDelete={() => onClickDelete(palabra.idPalabra)}/>
                    );
                })
        );
    }
    return (
        <div className="categoria-page">
                <Row>
                    <Col xs={2}>
                        <MenuLateralComponent mainButtonName="Nueva Palabra" mainButtonLogic={openModal}>
                            <NavLink to={`/completar/${idCategoria}`}><p>Jugar</p></NavLink>
                            <NavLink to="/"><p>Categorias</p></NavLink>
                        </MenuLateralComponent>
                    </Col>
                    <Col xs={10}>
                        <div className="grid-layout">
                            {renderPalabras(props.palabras)}
                        </div>
                    </Col>
                </Row>
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
                <Modal isOpen={showModalConfirmar} toggle={toggleModalConfirmar} centered={true}>
                    <ModalBody>
                        <ConfirmarComponent deleteWord={() => deleteWord()} cerrarModal={() => cerrarModalConfirmar()}/>
                    </ModalBody>
                </Modal>
        </div>

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
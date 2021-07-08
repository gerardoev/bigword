import "./MainComponent.scss";
import React, { Component } from 'react';
import MenuLateralComponent  from "../../components/MenuLateralComponent/MenuLateralComponent";
import CategoriaComponent from "../../components/CategoriaComponent/CategoriaComponent";
import BasicModal from "../../components/BasicModalComponent/BasicModal";
import {FormGroup, Input, Button, Col, Row } from "reactstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addCategory, categoriasLoaded } from "../../redux/actionCreators";
import { db, auth } from "../../firebase";

const mapDispatchToProps = dispatch => ({
    addCategory: (nombreCategoria, color, id) => dispatch(addCategory(nombreCategoria,color, id)),
    categoriasLoaded: () => dispatch(categoriasLoaded())
});

const mapStateToProps = state => {
    return {
        categorias: state.categorias
    }
}



class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            estadoTemporal: [],
            showModal: false,
            modalState: {
                nombreCategoria: "",
                color: "#b71c1c"
            },
        };
    }

    obtenerCategorias(idUsuario){
        db.collection("categorias").where("idUsuario","==",idUsuario)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc) =>{
                this.props.addCategory(doc.data().nombreCategoria, doc.data().color, doc.id);
                this.props.categoriasLoaded();
            });
        })
        .catch((error) => {
            console.log("error al hacer la consulta:", error);
        });
    }

    componentDidMount(){
        auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              if(this.props.categorias.categoriasLoaded === false){
                this.obtenerCategorias(uid);
              }
              // ...
            } else {
              // User is signed out
              // ...
            }
        });
    }

    render() {
        const renderCategorias = ()=>{
            return(
                this.props.categorias.categorias?.map((categoria) =>{
                    console.log(categoria.nombreCategoria);
                    return(
                        <CategoriaComponent key={categoria.id} color={categoria.color} nombre={categoria.nombreCategoria} idCategoria={categoria.id}/>
                    );
                })
            );
        }

        const openModal = () =>{
            this.setState({
                ...this.state,
                showModal: true
            });
        }
        const cerrarModal = () =>{
            this.setState({
                ...this.state,
                showModal: false
            });
        }

        const toggleModal = () =>{
            this.setState({
                ...this.state,
                showModal: !this.state.showModal
            });
        }

        const onChangeHandler = (event) =>{
            const target = event.target;
            const value = target.value;
            this.setState({
                ...this.state,
                modalState: {
                    ...this.state.modalState,
                    nombreCategoria: value
                }
            });
        }

        const agregarCategoria =  (categoria) => {
            db.collection("categorias").add(categoria)
            .then((docRef) =>{
                this.props.addCategory(categoria.nombreCategoria, "#b71c1c", docRef.id);
                console.log("Categoria añadida correctamente");
            })
            .catch((error) =>{
                console.log("Error al añadir la categoria:", error);
            });
        };

        const onCrearCategoria = () => {
            this.setState({
                ...this.state,
                modalState: {
                    ...this.state.modalState,
                }
            });
            agregarCategoria(this.state.modalState);
            this.setState({
                ...this.state,
                modalState: {
                    ...this.state.modalState,
                    nombreCategoria: ""
                }
            });
            cerrarModal();
        };


        return (
            <div className="main-component">
                <Row>
                    <Col xs={2}>
                        <MenuLateralComponent mainButtonName="Nueva Categoria" mainButtonLogic={openModal}/>
                    </Col>
                    <Col xs={10}>
                        <div className="grid-layout">
                            {renderCategorias()}
                        </div>
                    </Col>
                </Row>
                <BasicModal showModal={this.state.showModal} toggleModal={toggleModal}>
                    <FormGroup>
                        <Input  type="text" placeholder="Ingresa el nombre" value={this.state.modalState.nombreCategoria} onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={onCrearCategoria}>Crear</Button>
                    </FormGroup>
                </BasicModal>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

/*
[
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
*/
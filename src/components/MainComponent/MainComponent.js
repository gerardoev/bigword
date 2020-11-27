import React, { Component } from 'react';
import  MainLayout  from "../../layouts/MainLayout/mainLayout";
import CategoriaComponent from "../CategoriaComponent/CategoriaComponent";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import BasicModal from "../BasicModalComponent/BasicModal";
import {FormGroup, Input, Button } from "reactstrap";
import { withRouter } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            estadoTemporal: [],
            showModal: false,
            modalState: {
                id: 0,
                nombreCategoria: "",
                color: "#b71c1c"
            }
        };
    }



    render() {
        const renderCategorias = ()=>{
            return(
                this.state.estadoTemporal?.map((categoria) =>{
                    console.log(categoria.nombreCategoria);
                    return(
                        <CategoriaComponent key={categoria.id} color={categoria.color} nombre={categoria.nombreCategoria}/>
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

        const agregarCategoria = (categoria) => {
            const listaActual = this.state.estadoTemporal;
            listaActual.push(categoria);
            this.setState({
                ...this.state,
                estadoTemporal: listaActual
            });
        };

        const onCrearCategoria = () => {
            this.setState({
                ...this.state,
                modalState: {
                    ...this.state.modalState,
                    id: this.state.modalState.id +1
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
            <div>
                <MainLayout agregarCategoria={agregarCategoria} openModal={() => openModal()}>
                    <GridLayout>
                        {renderCategorias()}
                    </GridLayout>
                    <BasicModal showModal={this.state.showModal} toggleModal={toggleModal}>
                        <FormGroup>
                            <Input  type="text" placeholder="Ingresa el nombre" value={this.state.modalState.nombreCategoria} onChange={onChangeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={onCrearCategoria}>Crear</Button>
                        </FormGroup>
                    </BasicModal>
                </MainLayout>
            </div>
        );
    }
}

export default MainComponent;

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
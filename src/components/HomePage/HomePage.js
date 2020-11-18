import React, { Component } from 'react';
import  BasicModal  from "../BasicModalComponent/BasicModal";
import {Jumbotron, Button, Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';
import "./HomePage.scss";
import {toast} from "react-toastify";
import { signInApi, setTokenApi } from "../../api/auth";


const Header = ({toggleModalSignIn, toggleModalSignUp}) => {
    return (
        <Jumbotron>
                <h1 className="logo">bigword</h1>
                <h4 class="slogan">Menten un registro de tu vocabulario</h4>
                <Row>
                    <Col xs="12" md="6">
                        <Button id="btnIngresar" onClick={toggleModalSignIn}>
                            Ingresar
                        </Button>
                    </Col>
                    <Col xs="12" md="6">
                        <Button onClick={toggleModalSignUp}>
                            Registro
                        </Button>
                    </Col>
                </Row>
        </Jumbotron>
    );
};

const FormularioLogin = ({logInHandleInputChange, logInHandleSubmit, state}) =>{
    return(
        <Form onSubmit={logInHandleSubmit}>
            <FormGroup>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Correo</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="email" placeholder="Correo" name="email" id="email" value={state.email} onChange={logInHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Contraseña</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="password" placeholder="Contraseña" name="password" id="password" value={state.password} onChange={logInHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="offset-md-8" xs={12} md={4}>
                        <Button className="d-block w-100 btn-form-modal">Entrar</Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
};

const FormularioSignUp = ({signUpHandleInputChange, signUpHandleSubmit, state}) =>{
    return(
        <Form onSubmit={signUpHandleSubmit}>
            <FormGroup>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Nombre</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="text" placeholder="Nombre" name="nombre" id="nombre" value={state.nombre} onChange={signUpHandleInputChange}/>
                    </Col>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Apellidos</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="text" placeholder="Apellidos" name="apellidos" id="apellidos" value={state.apellidos} onChange={signUpHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Correo</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="email" placeholder="Correo" name="correo" id="correo" value={state.correo} onChange={signUpHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="contraseña">Contraseña</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="password" placeholder="Contraseña" name="contraseña" id="contraseña" value={state.contraseña} onChange={signUpHandleInputChange}/>
                    </Col>
                    <Col xs={12} md={2}>
                        <Label htmlFor="repeat_contraseña">Repetir Contraseña</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="password" placeholder="Repetir contraseña" name="repetirContraseña" id="repetirConstraseña" value={state.repetirContraseña} onChange={signUpHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xs-6">
                        <Button className="d-md-block w-100">Cancelar</Button>
                    </Col>
                    <Col className="col-xs-6">
                        <Button className="d-md-block w-100">Registrarse</Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
};

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModalSignUp : false,
            showModalSignIn : false,
            registro: {
                nombre: "",
                apellidos: "",
                correo: "",
                contraseña: "",
                repetirContraseña: ""
            },
            login: {
                email: "",
                password: ""
            },
        };
        this.toggleModalSignIn = this.toggleModalSignIn.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.signUpHandleInputChange = this.signUpHandleInputChange.bind(this);
        this.signUpHandleSubmit = this.logInHandleSubmit.bind(this);
        this.logInHandleInputChange = this.logInHandleInputChange.bind(this);
        this.logInHandleSubmit = this.logInHandleSubmit.bind(this);
    }

    toggleModalSignUp(){
        this.setState({showModalSignUp: !this.state.showModalSignUp})
    }
    toggleModalSignIn(){
        this.setState({showModalSignIn: !this.state.showModalSignIn})
    }
    signUpHandleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            registro: {
                ...this.state.registro,
                [name]: value
            }
        });
    }
    signUpHandleSubmit(event){
        console.log('Estado actual: '+JSON.stringify(this.state.registro));
        alert('Estado actual: '+JSON.stringify(this.state.registro));
        event.preventDefault();
    }
    logInHandleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            login: {
                ...this.state.login,
                [name]: value
            }
        });
    }
    logInHandleSubmit(event){
        console.log('Estado actual: '+JSON.stringify(this.state.login));
        alert('Estado actual: '+JSON.stringify(this.state.login));
        signInApi(this.state.login).then(response =>{
            if (response.message){

                toast.warning(response.message);
            }else{
                toast.success("Inicio de sesión exitoso");
                setTokenApi(response.token);
            }
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="home-page">
                <Header toggleModalSignIn={this.toggleModalSignIn} toggleModalSignUp={this.toggleModalSignUp}/>
                <BasicModal showModal={this.state.showModalSignUp} toggleModal={this.toggleModalSignUp} headerString = "SignUp">
                    <FormularioSignUp signUpHandleInputChange={this.signUpHandleInputChange} signUpHandleSubmit={this.signUpHandleSubmit} state={this.state.registro}/>
                </BasicModal>
                <BasicModal showModal={this.state.showModalSignIn} toggleModal={this.toggleModalSignIn} headerString = "SignIn">
                    <FormularioLogin logInHandleInputChange={this.logInHandleInputChange} logInHandleSubmit={this.logInHandleSubmit} state={this.state.login}/>
                </BasicModal>
            </div>
        );
    }
}

export default HomePage;
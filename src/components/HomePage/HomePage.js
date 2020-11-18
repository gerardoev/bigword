import React, { Component } from 'react';
import  BasicModal  from "../BasicModalComponent/BasicModal";
import {Jumbotron, Button, Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';
import "./HomePage.scss";


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

const FormularioLogin = () =>{
    return(
        <Form>
            <FormGroup>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Correo</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="email" placeholder="Correo" name="correo" id="correo"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Contraseña</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="password" placeholder="Contraseña" name="password" id="password"/>
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

const FormularioSignUp = () =>{
    return(
        <Form>
            <FormGroup>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Nombre</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="text" placeholder="Nombre" name="nombre" id="nombre"/>
                    </Col>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Apellidos</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="text" placeholder="Apellidos" name="apellidos" id="apellidos"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="nombre">Correo</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="email" placeholder="Correo" name="correo" id="correo"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="contraseña">Contraseña</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="password" placeholder="Contraseña" name="contraseña" id="contraseña"/>
                    </Col>
                    <Col xs={12} md={2}>
                        <Label htmlFor="repeat_contraseña">Repetir Contraseña</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="password" placeholder="Repetir contraseña" name="repeat_contraseña" id="repeat_contraseña"/>
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
            showModalSignUp : true,
            showModalSignIn : false,
        }
        this.toggleModalSignIn = this.toggleModalSignIn.bind(this)
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this)
    }

    toggleModalSignUp(){
        this.setState({showModalSignUp: !this.state.showModalSignUp})
    }
    toggleModalSignIn(){
        this.setState({showModalSignIn: !this.state.showModalSignIn})
    }

    render() {
        return (
            <div className="home-page">
                <Header toggleModalSignIn={this.toggleModalSignIn} toggleModalSignUp={this.toggleModalSignUp}/>
                <BasicModal showModal={this.state.showModalSignUp} toggleModal={this.toggleModalSignUp} headerString = "SignUp">
                    <FormularioSignUp/>
                </BasicModal>
                <BasicModal showModal={this.state.showModalSignIn} toggleModal={this.toggleModalSignIn} headerString = "SignIn">
                    <FormularioLogin/>
                </BasicModal>
            </div>
        );
    }
}

export default HomePage;
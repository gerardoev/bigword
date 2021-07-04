import React, { Component } from 'react';
import  BasicModal  from "../BasicModalComponent/BasicModal";
import {Jumbotron, Button, Col, Row, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import "./HomePage.scss";
import {toast} from "react-toastify";
import { signInApi, signUpFireBase, setTokenApi } from "../../api/auth";
import { Player } from 'video-react';
import VideoImagen from "../../assets/images/video-pic.png";
import GerardoImagen from "../../assets/images/gerardo.jpeg";
import AlfredoImagen from "../../assets/images/alfredo.jpg";
import VideoBigWord from "../../assets/videos/BIGWORDVIDEO.mp4";
import {auth} from "../../firebase";

const Banner = () => {
    return(
        <div className="banner">
            <iframe src="https://my.visme.co/_embed/g78k3gz8-bw" width="851" height="315" allowFullScreen={false}>
            </iframe>
            <p>
                Made with 
                <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank">
                    Visme
                </a>
            </p>
        </div>
    );
};
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
                        <Input type="email" placeholder="Correo" name="email" id="email" value={state.email} onChange={signUpHandleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <Label htmlFor="contraseña">Contraseña</Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Input type="password" placeholder="Contraseña" name="password" id="password" value={state.password} onChange={signUpHandleInputChange}/>
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
                email: "",
                password: "",
                repetirContraseña: ""
            },
            login: {
                email: "",
                password: ""
            },
            setRefreshCheckLogin: props.setRefreshCheckLogin,
        };
        this.toggleModalSignIn = this.toggleModalSignIn.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.signUpHandleInputChange = this.signUpHandleInputChange.bind(this);
        this.signUpHandleSubmit = this.signUpHandleSubmit.bind(this);
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
    signUpHandleSubmit(event) {
        signUpFireBase(this.state.registro.email,  this.state.registro.password)
            .then((user) => {
                toast.success("Registro exitoso");
            })
            .catch((error) => {
                toast.warning(error);
            });
        console.log("Modal cerrado");
        this.setState({
            ...this.state,
            registro: {
                nombre: "",
                apellidos: "",
                email: "",
                password: "",
                repetirContraseña: ""
            }
        });
        this.toggleModalSignUp();
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
        auth.signInWithEmailAndPassword(this.state.login.email, this.state.login.password)
        .then((userCredential) => {
            // Signed in
            toast.success("Inicio de sesión exitoso");
            var user = userCredential.user;
            this.state.setRefreshCheckLogin(true);
            // ...
        })
        .catch((error) => {
            toast.error(`${error}`);
        });
        event.preventDefault();
        this.toggleModalSignIn();
    }

    render() {
        return (
            <div className="home-page">
                <Header toggleModalSignIn={this.toggleModalSignIn} toggleModalSignUp={this.toggleModalSignUp}/>
                <Container>
                    <Row>
                        <Banner/>
                    </Row>
                    <Row>
                        <Player
                            playsInline
                            poster={VideoImagen}
                            src={VideoBigWord}
                        />
                    </Row>
                    <Row>
                    <section class="page-section bg-light" id="team">
                        <div class="container">
                            <div class="text-center">
                                <h2 class="section-heading text-uppercase">Desarrolladores</h2>
                                <h3 class="section-subheading text-muted">Somos estudiantes de la Benemérita Universidad Autónoma de Puebla</h3>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={GerardoImagen} alt="" />
                                        <h4>Gerardo Erick Villa Aguilar</h4>
                                        <p class="text-muted">Desarrollador Web</p>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={AlfredoImagen} alt="" />
                                        <h4>José Alfredo García Hernández</h4>
                                        <p class="text-muted">Desarrollador Web</p>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Row>
                </Container>
                <BasicModal showModal={this.state.showModalSignUp} toggleModal={this.toggleModalSignUp} headerString = "SignUp">
                    <FormularioSignUp signUpHandleInputChange={this.signUpHandleInputChange} signUpHandleSubmit={this.signUpHandleSubmit} state={this.state.registro}/>
                </BasicModal>
                <BasicModal showModal={this.state.showModalSignIn} toggleModal={this.toggleModalSignIn} headerString = "SignIn">
                    <FormularioLogin logInHandleInputChange={this.logInHandleInputChange} logInHandleSubmit={this.logInHandleSubmit} state={this.state.login} />
                </BasicModal>
            </div>
        );
    }
}

export default HomePage;

/*
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
*/
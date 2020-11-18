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
                        <Label htmlFor="nombre">Nombre</Label>
                    </Col>
                    <Col xs={12} md={10}>
                        <Input type="text" placeholder="Nombre"/>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
}

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModalSignUp : false,
            showModalSignIn : true,
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
            <>
                <Header toggleModalSignIn={this.toggleModalSignIn} toggleModalSignUp={this.toggleModalSignUp}/>
                <BasicModal showModal={this.state.showModalSignUp} toggleModal={this.toggleModalSignUp} headerString = "SignUp">
                    SighUpModal
                </BasicModal>
                <BasicModal showModal={this.state.showModalSignIn} toggleModal={this.toggleModalSignIn} headerString = "SignIn">
                    <FormularioLogin/>
                </BasicModal>
            </>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import {Jumbotron, Button, Col, Row} from 'reactstrap';
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


class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModalSignUp : false,
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
            <Header toggleModalSignIn={this.toggleModalSignIn} toggleModalSignUp={this.toggleModalSignUp}/>
        );
    }
}

export default HomePage;
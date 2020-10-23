import React, { Component } from 'react';
import {Jumbotron, Button, Col, Row} from 'reactstrap';
import "./HomePage.scss";


const Header = () => {
    return (
        <Jumbotron>
                <h1 className="logo">bigword</h1>
                <h4 class="slogan">Menten un registro de tu vocabulario</h4>
                <Row>
                    <Col xs="12" md="6">
                        <Button id="btnIngresar">
                            Ingresar
                        </Button>
                    </Col>
                    <Col xs="12" md="6">
                        <Button>
                            Registro
                        </Button>
                    </Col>
                </Row>
        </Jumbotron>
    );
};


class HomePage extends Component {

    render() {
        return (
            <Header/>
        );
    }
}

export default HomePage;
import React from 'react';
import './MenuLateralComponent.scss'
import {auth} from "../../firebase"
import {Container, Row, Col, Button} from "reactstrap"

const cerrarSes = () => {
    auth.signOut()
    .then(() => {
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
    });
};

const MenuLateralComponent = ({mainButtonLogic, mainButtonName, children}) => {
    return (
        <div className="Menu-Lateral">
            <Container>
                <Row>
                    {mainButtonLogic ?
                        <Col xs={12}>
                            <Button className="boton-menu" onClick={() => mainButtonLogic()}>{mainButtonName}</Button>
                        </Col> 
                        :
                        <></>
                    }
                    <Col xs={12} id="mid-col">
                        {children}
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center align-self-end">
                        <p onClick={() => cerrarSes()}>Cerrar sesion</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MenuLateralComponent;
import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./mainLayout.scss";

const MenuLateral = () => {
    return(
        <div className="menu-lateral">
            <Container>
                <Row>
                    <Col>
                        <Button className="boton-menu">Nueva Categoría</Button>
                    </Col>
                    <Col className="d-flex align-items-end">
                        <p>Cerrar sesion</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const MainLayout = ({children}) => {

    return (
        <div className="main-layout">
            <Container>
                <Row>
                    <Col xs={2}>
                        <MenuLateral/>
                    </Col>
                    <Col xs={10}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainLayout;
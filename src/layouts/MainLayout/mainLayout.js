import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";
import { logoutApi } from "../../api/auth";
import "./mainLayout.scss";
import {NavLink} from "react-router-dom";

const MenuLateral = () => {
    console.log(window.location.pathname);
    const MenuPrincipal= ()  =>{
        return(
            <Col>
                <Button className="boton-menu">Nueva Categoria</Button>
            </Col>
        );
    }
    const MenuCategoria= ()  =>{
        return(
            <Col>
                <Button className="boton-menu">Nueva Palabra</Button>
                 <NavLink to="/"><p>Categorias</p></NavLink>
            </Col>
        );
    }
    const MenuJuego= ()  =>{
        return(
            <Col>
                <NavLink to="/categoria"><p>Palabras</p></NavLink>
            </Col>
        );
    }
    const cerrarSes = () =>{
        logoutApi();
        window.location.reload();
    }

    const renderMenu = (path) =>{
        if (path === "/completar"){
            return <MenuJuego/>
        }
        if (path === "/"){
            return <MenuPrincipal/>
        }
        if (path === "/categoria"){
            return <MenuCategoria/>
        }
    }
    const path = window.location.pathname;
    return(
        <div className="menu-lateral">
            <Container>
                <Row>
                    {renderMenu(path)}
                    <Col className="d-flex align-items-end">
                        <p onClick={() => cerrarSes()}>Cerrar sesion</p>
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
import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";
import { logoutApi } from "../../api/auth";
import "./mainLayout.scss";
import {NavLink} from "react-router-dom";

function MenuLateral({agregarCategoria, agregarPalabra, openModal}) {
    const idCategoria = 1;
    console.log(window.location.pathname);
    const MenuPrincipal = ({ agregarCategoria }) => {
        return (
            <Col>
                <Button className="boton-menu" onClick={() => openModal()}>Nueva Categoria</Button>
            </Col>
        );
    };
    const MenuCategoria = ({agregarP}) => {
        return (
            <Col>
                <Button className="boton-menu" onClick={() => agregarP({
                    id: 3,
                    palabra: "easy",
                    significado: "Fácil",
                    ejemplos: ["The way was too easy, I got boared"],
                    imagen: ""
                })}>Nueva Palabra</Button>
                <NavLink to={`/completar/${idCategoria}`}><p>Jugar</p></NavLink>
                <NavLink to="/"><p>Categorias</p></NavLink>
            </Col>
        );
    };
    const MenuJuego = () => {
        return (
            <Col>
                <NavLink to={`/categoria/${idCategoria}`}><p>Palabras</p></NavLink>
            </Col>
        );
    };
    const cerrarSes = () => {
        logoutApi();
        window.location.reload();
    };

    const renderMenu = (path) => {
        if (path.includes("/completar")) {
            return <MenuJuego />;
        }
        if (path === "/") {
            return <MenuPrincipal agregarCategoria={agregarCategoria} />;
        }
        if (path.includes("/categoria")) {
            return <MenuCategoria agregarP={agregarPalabra} />;
        }
    };
    const path = window.location.pathname;
    return (
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

const MainLayout = ({children, agregarCategoria, agregarPalabra, openModal}) => {
    return (
        <div className="main-layout">
            <Container>
                <Row>
                    <Col xs={2}>
                        <MenuLateral agregarCategoria={agregarCategoria} agregarPalabra={agregarPalabra} openModal={openModal}/>
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
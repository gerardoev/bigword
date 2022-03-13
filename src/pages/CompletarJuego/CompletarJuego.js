import React from 'react';
import "./CompletarJuego.scss"
import {Row, Col} from 'reactstrap'
import {NavLink, useParams} from 'react-router-dom'
import CompletarJuegoComponent from "../../components/CompletarJuegoComponent/CompletarJuegoComponent"
import MenuLateralComponent from "../../components/MenuLateralComponent/MenuLateralComponent"

const CompletarJuego = () => {
    const { idCategoria } = useParams();
    return (
        <div className="Completar-Juego">
            <Row>
                <Col xs={2}>
                    <MenuLateralComponent>
                        <NavLink to={`/categoria/${idCategoria}`}><p>Palabras</p></NavLink>
                    </MenuLateralComponent>
                </Col>
                <Col xs={10}>
                    <CompletarJuegoComponent/>
                </Col>
            </Row> 
        </div>
    );
};

export default CompletarJuego;
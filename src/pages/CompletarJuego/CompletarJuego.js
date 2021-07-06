import React from 'react';
import "./CompletarJuego.scss"
import {Row, Col} from 'reactstrap'
import {withRouter,NavLink} from 'react-router-dom'
import CompletarJuegoComponent from "../../components/CompletarJuegoComponent/CompletarJuegoComponent"
import MenuLateralComponent from "../../components/MenuLateralComponent/MenuLateralComponent"

const CompletarJuego = ({match}) => {
    const idCategoria = match.params.idCategoria;
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

export default withRouter(CompletarJuego);
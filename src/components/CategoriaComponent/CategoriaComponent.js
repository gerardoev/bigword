import React from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons";
import {Col} from "reactstrap";
import { Link } from "react-router-dom";

const CategoriaComponent = ({color, nombre, idCategoria}) => {
    return (
        <Col>
            <Link to={`/categoria/${idCategoria}`} className="categoria-component" style={{backgroundColor: color}}>
                <DeleteIcon/>
                <p>{nombre}</p>
            </Link>
        </Col>
    );
};


export const PalabraComponent = ({color, nombre, onClick}) => {
    const idPalabra = 1;
    return (
        <Col>
            <div className="categoria-component" style={{backgroundColor: color}} onClick={onClick}>
                <DeleteIcon/>
                <p>{nombre}</p>
            </div>
        </Col>
    );
};

export default CategoriaComponent;
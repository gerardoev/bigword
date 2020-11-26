import React from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons";
import {Col} from "reactstrap";
import { Link } from "react-router-dom";

const CategoriaComponent = ({color, nombre}) => {
    const idPalabra = 1;
    return (
        <Col>
            <Link to={`/categoria/${idPalabra}`} className="categoria-component" style={{backgroundColor: color}}>
                <DeleteIcon/>
                <p>{nombre}</p>
            </Link>
        </Col>
    );
};

export default CategoriaComponent;
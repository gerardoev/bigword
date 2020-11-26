import React from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons";
import {Col} from "reactstrap";

const CategoriaComponent = ({color, nombre}) => {
    return (
        <Col>
            <div className="categoria-component" style={{backgroundColor: color}}>
                <DeleteIcon/>
                <p>{nombre}</p>
            </div>
        </Col>
    );
};

export default CategoriaComponent;
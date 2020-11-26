import React from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons"

const CategoriaComponent = () => {
    const color = "#d84315";
    const nombre = "Francés";
    return (
        <div className="categoria-component" style={{backgroundColor: color}}>
            <DeleteIcon/>
            <p>{nombre}</p>
        </div>
    );
};

export default CategoriaComponent;
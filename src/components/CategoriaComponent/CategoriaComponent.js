import React from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons";
import { Link } from "react-router-dom";

const CategoriaComponent = ({color, nombre, idCategoria}) => {
    return (
        <div className="categoria-main-component">
            <DeleteIcon/>
            <Link to={`/categoria/${idCategoria}`} className="categoria-component" style={{backgroundColor: color}}>
                <p>{nombre}</p>
            </Link>
        </div>
    );
};



export const PalabraComponent = ({color, nombre, onClick, onClickDelete}) => {
    const idPalabra = 1;
    return (
        <div className="categoria-main-component">
            <DeleteIcon onClick={onClickDelete}/>
            <div onClick={onClick} className="categoria-component" style={{backgroundColor: color}}>
                <p>{nombre}</p>
            </div>
        </div>
    );
};

export default CategoriaComponent;
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
        <div class="palabra-component abrir-modal" onClick={onClick}>
            <div class="elementos abrir-modal">
                <nav id="menu" >
                    <ul>
                        <li>
                            <button>
                                <i class="fas fa-ellipsis-v icons"></i>
                                <ul>
                                    <li onClick={onClickDelete}>Eliminar</li>
                                    <li >Editar</li>
                                </ul>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div class="imagen abrir-modal">
                    <i class="fas fa-camera icons abrir-modal"></i>
                </div>
                <h1 className="nombre abrir-modal">{nombre}</h1>
            </div>
        </div>
    );
};

export default CategoriaComponent;
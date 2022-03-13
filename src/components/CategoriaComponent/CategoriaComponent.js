import React, {useEffect, useState} from 'react';
import "./CategoriaComponent.scss";
import {DeleteIcon} from "../../utils/icons";
import {storage} from '../../firebase'
import { Link, useHistory } from "react-router-dom";

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



export const PalabraComponent = ({color, nombre, idPalabra, idCategoria, onClick, onClickDelete, image}) => {
    const history = useHistory();
    const handleOnClickEdit = () => history.push(`/edit_word/${idPalabra}/${idCategoria}`)
    const [Image, setImage] = useState(null)

    useEffect(() => {
        if(image != null){
            if(image.length > 0){
                let pathReference = storage.ref(image);
                pathReference.getDownloadURL()
                .then(function(url) {
                    setImage(url)
                }).catch(function(error) {
    
                });
            }
        }
    },[])
    return (
        <div className="palabra-component abrir-modal" onClick={onClick}>
            <div className="elementos abrir-modal">
                <nav id="menu" >
                    <ul>
                        <li>
                            <button>
                                <i className="fas fa-ellipsis-v icons"></i>
                                <ul>
                                    <li onClick={() => onClickDelete(idPalabra)}>Eliminar</li>
                                    <li onClick={handleOnClickEdit}>Editar</li>
                                </ul>
                            </button>
                        </li>
                    </ul>
                </nav>
                    {
                        Image ? <img className='abrir-modal' src={Image}/> 
                            :
                        <div className="imagen abrir-modal"> 
                            <i className="fas fa-camera icons abrir-modal"></i>
                        </div>
                    }
                <div className="nombre abrir-modal">
                    <h1 className="abrir-modal">{nombre}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoriaComponent;
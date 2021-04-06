import React from 'react';
import {Button} from 'reactstrap';
import "./ConfirmarComponent.scss";

const ConfirmarComponent = ({deleteWord, cerrarModal}) => {
    return (
        <div className="Confirmar-Component">
            <h3>¿Seguro que quieres eliminar esta palabra? Se perderán todos los datos relacionados a ella</h3>
            <div className="botones-section">
                <Button color="secondary" onClick={deleteWord}>Confirmar</Button>
                <Button color="primary" onClick={cerrarModal}>Cancelar</Button>
            </div>
        </div>
    );
};

export default ConfirmarComponent;
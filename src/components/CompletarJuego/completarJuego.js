import React, {useEffect, useState } from 'react';
import {Input, Button, Row, Col} from "reactstrap";
import "./completarJuego.scss";

function CompletarJuego() {
    const [palabras, setPalabras] = useState(estadoTemporal());
    const [palabraActual, setPalabraActual] = useState(palabras[1]);  
    console.log(palabras);

    useEffect(() =>{

    },[palabraActual]);

    const [ejemploRecortado, setEjemploRecortado] = useState("Descubrimos que la _______ es una de los síntomas del coronavirus");
    const [estadoJuego, setEstadoJuego] = useState(estadoJuegoInicial(palabras.length));

    return(
        <div className="completar-juego">
            <div className="completar-juego__header">
                <h1>{estadoJuego.aciertos} / {estadoJuego.total} </h1>
            </div>
            <div className="completar-juego__body">
                <h1>{ejemploRecortado}</h1>
            </div>
            <div className="completar-juego__footer">
                <Row>
                    <Col xs={9}>
                        <Input 
                            type="text"
                            placeholder="Escribe tu respuesta"
                        />
                    </Col>
                    <Col xs={3}>
                        <Button>Enviar</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const estadoTemporal = () =>{
    //Lista de palabras que serán recuperadas del servidor
    return (
        [
            {
                id: 1,
                palabra: "Canido",
                significado: "Dicho especialmente del pan, cubierto de moho",
                ejemplos: [
                    "Como nadie se comió la hogaza que compré, ahora está canida."
                ]
            },
            {
                id: 2,
                palabra: "Anosmia",
                significado: "Pérdida completa del olfato.",
                ejemplos: [
                    "Descubrimos que la anosmia es una de los síntomas del coronavirus"
                ]
            }
        ]
    );
}

const estadoJuegoInicial = (tamArr) =>{
    return(
        {
            aciertos: 0,
            total: tamArr
        }
    );
}

export default CompletarJuego;
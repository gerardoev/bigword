import React, {useEffect, useState } from 'react';
import {Input, Button, Row, Col} from "reactstrap";
import {toast} from "react-toastify";
import "./completarJuego.scss";
import PlayButton from "../PlayButton/PlayButton";
import BotonMP3 from "../../assets/sounds/boton.mp3";
import useSound from 'use-sound';

function CompletarJuego({palabras}) {
    const [play] = useSound(BotonMP3);
    const [palabraActual, setPalabraActual] = useState();  
    const [ejemploRecortado, setEjemploRecortado] = useState("Descubrimos que la _______ es una de los síntomas del coronavirus");
    const [estadoJuego, setEstadoJuego] = useState(estadoJuegoInicial(palabras?.length));

    const [isHoveringEnviar, setIsHovering] = useState(
        false
      );

    return(
        <div className="completar-juego">
            <div className="completar-juego__header">
                <h1>{estadoJuego.aciertos} / {estadoJuego.total} </h1>
                <PlayButton/>
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
                        <Button 
                            onMouseEnter={() => play()} 
                        >
                            Enviar
                        </Button>
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

/*
    
*/
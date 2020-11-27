import React, {useEffect, useState } from 'react';
import {Input, Button, Row, Col} from "reactstrap";
import {toast} from "react-toastify";
import "./completarJuego.scss";
import PlayButton from "../PlayButton/PlayButton";
import BotonMP3 from "../../assets/sounds/boton.mp3";
import SuccessMP3 from "../../assets/sounds/success.mp3";
import IncorrectoMP3 from "../../assets/sounds/incorrecto.mp3";
import useSound from 'use-sound';

const getPalabrasApi = () =>{
    return(
        [
            {
                id: 0,
                palabra: "want",
                significado: "querer",
                ejemplos: [
                    "I want an apple"
                ],
                imagen: ""
            },
            {
                id: 1,
                palabra: "jeans",
                significado: "pantalones de mezclilla",
                ejemplos: [
                    "I love those jeans!"
                ],
                imagen: ""
            },
            {
                id: 2,
                palabra: "hope",
                significado: "espero",
                ejemplos: [
                    "I hope you are ok"
                ],
                imagen: ""
            }
        ]
    );
}

const estaEnArray = (el,arr) =>{

    for(let i = 0; i< arr.length; i++){
        if (arr[i] == el){
            return true;
        }
    }
    return false;
}

const generaAleatorio = (tamanio) =>{
    const posiciones = [];
    const max = tamanio;
    let pos = 0;
    for (let i = 0; i < tamanio; i++){
        pos = Math.floor(Math.random()* (max-0));
        while(estaEnArray(pos,posiciones) == true){
            pos = Math.floor(Math.random()*(max-0));
        }
        posiciones.push(pos);
    }
    return posiciones;
}


const recortarPalabra = (palabra, ejemplo) =>{
    return ejemplo.replace(palabra, "_______");
}


function CompletarJuego() {
    const [play] = useSound(BotonMP3);
    const [success] = useSound(SuccessMP3);
    const [incorrecto] = useSound(IncorrectoMP3);
    const [respuesta, setRespuesta] = useState();
    const [palabras, setPalabras] = useState(getPalabrasApi());
    const [indices, setIndices] = useState(generaAleatorio(palabras?.length))  ;
    const [posArr, setPosArr] = useState(0)
    const [palabraActual, setPalabraActual] = useState(indices[0]);  
    const [estadoJuego, setEstadoJuego] = useState(estadoJuegoInicial(palabras?.length));
    const [finalizado, setFinalizado] = useState(false);

    const [isHoveringEnviar, setIsHovering] = useState(
        false
    );

    const SiguientePregunta = () =>{
        setPosArr(posArr + 1);
        setPalabraActual(indices[posArr +1]);
        setRespuesta("");
        if (posArr >= palabras.length){
            setFinalizado(true);
        }
    }

    const aumentarPuntuacion = () =>{
        setEstadoJuego({
            ...estadoJuego,
            aciertos: estadoJuego.aciertos + 1
        });
    }
    const comprobarResp = (resp, i) => {
        if (resp?.toLowerCase() === palabras[i]?.palabra){
            return true;
        }
        return false;
    }

    const verificar = () =>{
        if (comprobarResp(respuesta, palabraActual) == true){
            aumentarPuntuacion();
            success();
        }else{
            incorrecto();
        }
        SiguientePregunta();
    }

    const onChangeInput = (event) =>{
        const target = event.target;
        const value = target.value;
        setRespuesta(value);
    }

    return(
        <div className="completar-juego">
            <div className="completar-juego__header">
                <h1>{estadoJuego.aciertos} / {estadoJuego.total} </h1>
                <PlayButton/>
            </div>
            <div className="completar-juego__body">
                {
                    finalizado ? <p>Finalizado</p> :
                    <h1>
                        {
                            palabras[palabraActual] ?
                                recortarPalabra(palabras[palabraActual].palabra,palabras[palabraActual].ejemplos[0])
                            :
                                <p>Finalizado</p>
                        }
                    </h1>
                }
            </div>
            <div className="completar-juego__footer">
                <Row>
                    <Col xs={9}>
                        <Input
                            value={respuesta} 
                            onChange={onChangeInput}
                            type="text"
                            placeholder="Escribe tu respuesta"
                        />
                    </Col>
                    <Col xs={3}>
                        <Button 
                            onMouseEnter={() => play()}
                            onClick={() => verificar()} 
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
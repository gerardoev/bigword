import React, {useEffect, useState } from 'react';
import {Input, Button, Row, Col} from "reactstrap";
import "./completarJuego.scss";
import PlayButton from "../PlayButton/PlayButton";
import BotonMP3 from "../../assets/sounds/boton.mp3";
import SuccessMP3 from "../../assets/sounds/success.mp3";
import IncorrectoMP3 from "../../assets/sounds/incorrecto.mp3";
import useSound from 'use-sound';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { db } from "../../firebase";
import { addWord } from "../../redux/actionCreators";

const mapStateToProps = state => ({
    palabras: state.palabras
})

const mapDispatchToProps = dispatch => ({
    addWord: (palabra,significado,ejemplos,idCategoria) => dispatch(addWord(palabra, significado, ejemplos, idCategoria))
});

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
    if (palabra === undefined || ejemplo === undefined){
        return "";
    }

    return ejemplo.replace(palabra, "_______");
}


function CompletarJuego(props) {
    const idCategoria = props.match.params.idCategoria;
    const [play] = useSound(BotonMP3);
    const [success] = useSound(SuccessMP3);
    const [incorrecto] = useSound(IncorrectoMP3);
    const [respuesta, setRespuesta] = useState();
    const [palabras, setPalabras] = useState([]);
    const [indices, setIndices] = useState([]);
    const [posArr, setPosArr] = useState();
    const [palabraActual, setPalabraActual] = useState();  //la  palabra correcta
    const [significadoActual, setSignificado] = useState();
    const [estadoJuego, setEstadoJuego] = useState(estadoJuegoInicial(palabras?.length));
    const [finalizado, setFinalizado] = useState(false);
    const [palabraRecortada, setPalabraRecortada] = useState("");

    useEffect(() => {
        if(props.palabras.hasOwnProperty(idCategoria)){
            setPalabras(props.palabras[idCategoria]);
        }else{
            db.collection("palabras").where("idUsuario", "==", 0).where("idCategoria","==",idCategoria)
            .get()
            .then((querySS) => {
                const palabs = [];
                querySS.forEach((doc) =>{
                    const palabra = doc.data();
                    props.addWord(palabra.palabra, palabra.significado, palabra.ejemplos, idCategoria);
                    palabs.push(palabra);
                });
                setPalabras(palabs);
            })
            .catch((error) => {
                console.log("error al hacer la consulta:", error);
            });
        }
    },[]);

    //Esto se ejecuta cada vez que se cambia el conjunto de palabras, es decir cada vez que se entra al juego
    useEffect(() =>{
        setIndices(generaAleatorio(palabras?.length));
    }, [palabras])
    //En este punto ya se tiene palabras
    useEffect(() => {
        setEstadoJuego(estadoJuegoInicial(palabras.length));
        setPosArr(0);
    },[indices])
    useEffect(() => {
        const palabra = palabras[indices[posArr]];
        if(palabra){
            setPalabraRecortada(recortarPalabra(palabra.palabra.toLowerCase(),palabra["ejemplos"][0].toLowerCase()));
            setPalabraActual(palabra.palabra);
            setSignificado(palabra.significado);
        }
    },[posArr, indices]);


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
    const comprobarResp = (resp) => {
        if (resp?.toLowerCase() === palabraActual.toLowerCase()){
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
                    <>
                        <h1>
                            "{significadoActual}"
                        </h1>
                        <br></br>
                        <br></br>
                        <h1>
                            Ejemplo: {palabraRecortada}
                        </h1>
                    </>
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
                        {   
                            posArr+1 <= (palabras.length -1) ?
                                <Button 
                                    onMouseEnter={() => play()}
                                    onClick={() => verificar()} 
                                >
                                    Enviar
                                </Button>
                            :
                            finalizado ?
                                <></>
                            :
                                <Button
                                    onClick={() => {
                                        verificar();
                                        setFinalizado(true);
                                    }} 
                                >
                                    Terminar
                                </Button>
                        }
                    </Col>
                </Row>
            </div>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompletarJuego));

/*
    
*/
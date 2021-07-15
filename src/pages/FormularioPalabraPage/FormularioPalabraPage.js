import React, {useState, useEffect} from 'react';
import {Form, Row, Col, Input, Label, FormGroup, Button} from "reactstrap";
import {NavLink, withRouter, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import "./FormularioPalabraPage.scss";
import MenuLateralComponent from '../../components/MenuLateralComponent/MenuLateralComponent'
import {db} from '../../firebase'

function mapStateToProps(state){
    return{
        palabras: state.palabras
    }
}

function getPalabra(palabras, idPalabra){
    return palabras.filter(palabra => palabra.idPalabra === idPalabra)
}

function onClickAceptar(idPalabra, palabra, regresar){
    db.collection('palabras').doc(idPalabra).set(palabra, {merge: true})
    .then(() => {
        toast.success('Se ha actualizado correctamente')
        regresar()
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

const FormularioPalabraPage = (props) => {
    //comprobamos si hay una imagen subida al backend y la ponemos como default. -> si estado de app dice que hau url: `http://geturldeservidor/`
    const [urlImagen, setUrlImagen] = useState( 
        false ? `` : null
    );
    const [palabra, setPalabra] = useState({
        palabra: '',
        significado: '',
        ejemplos: ['','','']
    })
    const [idPalabra, setIdPalabra] = useState(props.match.params.idWord)
    const [idCategoria, setIdCategoria] = useState(props.match.params.idCategory)
    
    const history = useHistory()
    
    const regresar = () =>{
        history.push(`/categoria/${idCategoria}`)
    }

    const onChangeHandler = (e) =>{
        console.log('onChangeHandler')
        const target = e.target
        const value = target.value
        const name = target.name
        if(name === 'ejemplo1'){
            let nuevoEjemplos = [...palabra.ejemplos]
            nuevoEjemplos[0] = value
            setPalabra({
                ...palabra,
                'ejemplos': nuevoEjemplos
            })
        }
        if(name === 'ejemplo2'){
            let nuevoEjemplos = [...palabra.ejemplos]
            nuevoEjemplos[1] = value
            setPalabra({
                ...palabra,
                'ejemplos': nuevoEjemplos
            })
        }
        if(name === 'ejemplo3'){
            let nuevoEjemplos = [...palabra.ejemplos]
            nuevoEjemplos[2] = value
            setPalabra({
                ...palabra,
                'ejemplos': nuevoEjemplos
            })
        }
        if(name != 'ejemplo1' && name != 'ejemplo2' && name != 'ejemplo3'){
            setPalabra({
                ...palabra,
                [name]: value
            })
        }
    }

    useEffect(() =>{
        const palabrasUsuario = props.palabras[idCategoria]
        let palabra = ''
        if(typeof(palabrasUsuario) === 'undefined'){
            console.log('Recuperar de la bd')
            palabra = {
                palabra: 'dbword',
                significado: 'example',
                ejemplos: ['','','']
            }
        } else {
            palabra = getPalabra(palabrasUsuario, idPalabra)[0]
        }
    setPalabra(palabra)
    },[])

    return (
        <div className="Formulario-Palabra">
            <Row>
                <Col xs={2}>
                    <MenuLateralComponent>
                        <NavLink to="/"><p>Categorias</p></NavLink>
                    </MenuLateralComponent>
                </Col>
                <Col xs={10}>
                    <Form>
                        <Row>
                            <Col md={6} className='d-flex flex-column align-items-center'>
                                { urlImagen ? <img className="imagen my-5" src={urlImagen}/> : <div className="imagen my-5"></div>}
                                <input type="file" className="d-flex form-control" id="customFile"/>
                            </Col>
                            <Col md={6} className='d-flex flex-column'>
                                <FormGroup className='my-5'>
                                    <Label for="palabraForm">Palabra</Label>
                                    <Input type='text' name="palabra" id="palabraForm" placeholder="Ingresa la palabra" value={palabra.palabra} onChange={onChangeHandler}/>
                                </FormGroup>
                                <FormGroup className='my-5'>
                                    <Label for="sifnificadoForm">Significado</Label>
                                    <Input type='text' name="significado" id="significadoForm" placeholder="Ingresa el significado" value={palabra.significado} onChange={onChangeHandler}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Ejemplos</Label>
                                    <Input type='text' name="ejemplo1" id="ejemplo1" placeholder="Ingresa un ejemplo" className="my-2" value={palabra.ejemplos[0] ? palabra.ejemplos[0]: null} onChange={onChangeHandler}/>
                                    <Input type='text' name="ejemplo2" id="ejemplo2" placeholder="Ingresa un ejemplo" className="my-2" value={palabra.ejemplos[1] ? palabra.ejemplos[1]: null} onChange={onChangeHandler}/>
                                    <Input type='text' name="ejemplo3" id="ejemplo3" placeholder="Ingresa un ejemplo" className="my-2" value={palabra.ejemplos[2] ? palabra.ejemplos[2]: null} onChange={onChangeHandler}/>
                                </FormGroup>
                                <Button className='align-self-end' onClick={() => onClickAceptar(idPalabra, palabra, regresar)}>Aceptar</Button>
                         </Col>
                     </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default withRouter(connect(mapStateToProps)(FormularioPalabraPage));
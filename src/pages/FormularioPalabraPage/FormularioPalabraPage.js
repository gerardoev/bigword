import React, {useState, useEffect} from 'react';
import {Form, Row, Col, Input, Label, FormGroup, Button} from "reactstrap";
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import "./FormularioPalabraPage.scss";
import MenuLateralComponent from '../../components/MenuLateralComponent/MenuLateralComponent'

function mapStateToProps(state){
    return{
        palabras: state.palabras
    }
}

const FormularioPalabraPage = (props) => {
    //comprobamos si hay una imagen subida al backend y la ponemos como default. -> si estado de app dice que hau url: `http://geturldeservidor/`
    const [urlImagen, setUrlImagen] = useState( 
        false ? `` : null
     );

     useEffect(() =>{
        console.log(props.palabras)
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
                                <input type="file" className="d-flex form-control" id="customFile" />
                            </Col>
                            <Col md={6} className='d-flex flex-column'>
                                <FormGroup className='my-5'>
                                    <Label for="palabraForm">Palabra</Label>
                                    <Input type='text' name="salabra" id="palabraForm" placeholder="Ingresa la palabra"/>
                                </FormGroup>
                                <FormGroup className='my-5'>
                                    <Label for="sifnificadoForm">Significado</Label>
                                    <Input type='text' name="significado" id="significadoForm" placeholder="Ingresa el significado"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Ejemplos</Label>
                                    <Input type='text' name="ejemplo1" id="ejemplo1" placeholder="Ingresa un ejemplo" className="my-2"/>
                                    <Input type='text' name="ejemplo2" id="ejemplo2" placeholder="Ingresa un ejemplo" className="my-2"/>
                                    <Input type='text' name="ejemplo3" id="ejemplo3" placeholder="Ingresa un ejemplo" className="my-2"/>
                                </FormGroup>
                                <Button className='align-self-end'>Aceptar</Button>
                         </Col>
                     </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default withRouter(connect(mapStateToProps)(FormularioPalabraPage));
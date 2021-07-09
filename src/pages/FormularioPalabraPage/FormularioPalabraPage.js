import React, {useState} from 'react';
import {Form, Row, Col, Input} from "reactstrap";
import {NavLink, withRouter} from 'react-router-dom'
import "./FormularioPalabraPage.scss";
import MenuLateralComponent from '../../components/MenuLateralComponent/MenuLateralComponent'

const FormularioPalabraPage = () => {
    //comprobamos si hay una imagen subida al backend y la ponemos como default. -> si estado de app dice que hau url: `http://geturldeservidor/`
    const [urlImagen, setUrlImagen] = useState( 
        false ? `` : null
     );

    return (
        <div className="Formulario-Palabra">
            <Row>
                <Col xs={2}>
                    <MenuLateralComponent>
                        <NavLink to="/"><p>Categorias</p></NavLink>
                    </MenuLateralComponent>
                </Col>
                <Col xs={10}>
                    {/* <Form>
                        <Row>
                            <Col md={6} >
                                <Row className="justify-content-center">
                                    { urlImagen ? <img className="imagen" src={urlImagen}/> : <div className="imagen"></div>}
                                </Row>
                                <Row className="justify-content-center">
                                    <input type="file" class="form-control" id="customFile" />
                                </Row>
                            </Col>
                            <Col md={6}>
                            
                            </Col>
                        </Row>
                    </Form> */}
                </Col>
            </Row>
        </div>
    );
};

export default withRouter(FormularioPalabraPage);
import React, {useState} from 'react';
import {Form, Row, Col, Input} from "reactstrap";
import "./FormularioPalabraComponent.scss";

const FormularioPalabraComponent = () => {
    //comprobamos si hay una imagen subida al backend y la ponemos como default. -> si estado de app dice que hau url: `http://geturldeservidor/`
    const [urlImagen, setUrlImagen] = useState( 
        false ? `` : null
     );

    return (
        <div className="Formulario-Palabra">
            <Form>
                <Row>
                    <Col md={6}>
                        <Row>
                            { urlImagen ? <img className="imagen" src={urlImagen}/> : <div className="imagen"></div>}
                        </Row>
                        <Row>
                            <input type="file" class="form-control" id="customFile" />
                        </Row>
                    </Col>
                    <Col md={6}>
                    
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FormularioPalabraComponent;
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
                            <Input type="file" id="uploadImageButton"/>
                        </Row>
                    </Col>
                    <Col md={6}>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                            </p>
                            <button type="button" class="btn btn-primary">Button</button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FormularioPalabraComponent;
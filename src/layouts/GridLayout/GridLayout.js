import React from 'react';
import "./GridLayout.scss";
import {Row,Col,Container} from "reactstrap";


const GridLayout = ({children}) => {
    return (
        <div className="grid-layout">
            <Container >
                <Row>
                    { children.map((child) =>{
                        return (
                            <Col xs={12} sm={5} md={4} lg={3}>
                                {child}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default GridLayout;
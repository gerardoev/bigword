import React from 'react';
import "./GridLayout.scss";
import {Row,Col,Container} from "reactstrap";


const GridLayout = ({children}) => {
    return (
        <div className="grid-layout">
            <Container >
                <Row>
                    { children?.map((child, index) =>{
                        return (
                            <Col xs={12} sm={5} md={4} lg={3} key={index}>
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
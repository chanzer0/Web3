import React from 'react';
import { Container, Col, Row, Card } from 'reactstrap';
import MintStats from './mint-stats';
import MintToken from './mint-token';

const Token = () => {
    return (
        <Container>
            <Row>
                <Col sm={4} className="d-flex flex-column">
                    <MintToken />
                </Col>
                <Col sm={8} className="d-flex flex-column">
                    <MintStats />
                </Col>
            </Row>
        </Container>
    );
};

export default Token;

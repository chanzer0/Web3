import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';

const NFT = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Card className="mt-5 align-items-center">
                        <CardHeader
                            className="w-100"
                            style={{
                                backgroundImage: 'url(corner-4.png)',
                                backgroundSize: 'cover',
                                boxShadow:
                                    '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                            }}
                        >
                            <CardTitle>NFT</CardTitle>
                        </CardHeader>
                        <CardBody>Coming Soon...</CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default NFT;

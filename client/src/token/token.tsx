import { Container, Card, Col, Row } from 'reactstrap';
import MintStats from './mint-stats';
import MintToken from './mint-token';

const Token = () => {
    return (
        <Container>
            <Card className="mt-5" style={{ height: '30rem' }}>
                <Row className="h-100">
                    <Col
                        className="d-flex flex-column justify-content-around align-items-center"
                        sm={6}
                    >
                        <MintToken />
                    </Col>
                    <Col
                        className="d-flex flex-column justify-content-around align-items-center"
                        sm={6}
                    >
                        <MintStats />
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Token;

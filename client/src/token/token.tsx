import useAxios from 'axios-hooks';
import config from 'config-service';
import { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import BalanceStats from './balance-stats';
import MintToken from './mint-token';

const Token = () => {
    const [{ data: balanceData }, executeUpdate] = useAxios(
        {
            url: `${config.coreApiUrl}/balance/top-10`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true /*, useCache: false */ }
    );

    useEffect(() => {
        executeUpdate();
    }, [executeUpdate]);

    return (
        <Container>
            <Row>
                <Col sm={4} className="d-flex flex-column">
                    <MintToken onChange={() => executeUpdate()} />
                </Col>
                <Col sm={8} className="d-flex flex-column">
                    <BalanceStats key={balanceData} data={balanceData} />
                </Col>
            </Row>
        </Container>
    );
};

export default Token;

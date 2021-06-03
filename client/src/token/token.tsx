import useAxios from 'axios-hooks';
import config from 'config-service';
import React from 'react';
import { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import BalanceStats from './balance-stats';
import MintToken from './mint-token';
import RecentMints from './recent-mints';

const Token = () => {
    const [{ data: balanceData }, getTopBalances] = useAxios(
        {
            url: `${config.coreApiUrl}/balance/top-10`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true /*, useCache: false */ }
    );

    const [{ data: mintHistory }, getRecentMints] = useAxios(
        {
            url: `${config.coreApiUrl}/mint`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true /*, useCache: false */ }
    );

    useEffect(() => {
        getTopBalances();
        getRecentMints();
    }, [getTopBalances, getRecentMints]);

    const executeUpdate = () => {
        console.log('executing update');
        getTopBalances();
        getRecentMints();
    };

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
            <Row>
                <Col sm={12}>
                    <RecentMints key={mintHistory} data={mintHistory} />
                </Col>
            </Row>
        </Container>
    );
};

export default Token;

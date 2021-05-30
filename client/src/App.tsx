import About from 'about/about';
import Header from 'header/header';
import NFT from 'nft/nft';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Token from 'token/token';

const App = () => {
    return (
        <Container fluid className="p-0">
            <Header />
            <Switch>
                <Route path="/token" component={Token} />
                <Route path="/nft" component={NFT} />
                <Route path="/about" component={About} />
            </Switch>
        </Container>
    );
};

export default App;

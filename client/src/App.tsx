import About from 'about/about';
import Header from 'header/header';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Gallery from 'gallery/gallery';
import CollectionView from 'gallery/collection-view';

const App = () => {
    return (
        <Container fluid className="p-0">
            <Header />
            <Switch>
                <Redirect exact from="/" to="/gallery" />
                <Route path="/gallery" component={Gallery} />
                <Route path="/about" component={About} />
                <Route path="/collection/:id" component={CollectionView} />
            </Switch>
        </Container>
    );
};

export default App;

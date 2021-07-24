import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme-dark.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
const ReactDOM = require('react-dom');


import './index.css';
import App from './App';

// render((
//         <App/>
// ), document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));


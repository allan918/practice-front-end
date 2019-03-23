import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
let temp = <BrowserRouter><App/></BrowserRouter>
ReactDOM.render(temp, document.getElementById('root'));

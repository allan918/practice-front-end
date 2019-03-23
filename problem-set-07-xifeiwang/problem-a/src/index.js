import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import senator from "./senators.json";
//render the App component here!
let app = <App senators = {senator}/>;
ReactDOM.render(app, document.getElementById("root"));

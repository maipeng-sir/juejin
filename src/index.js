import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider} from "react-redux"
import {HashRouter as Router} from "react-router-dom"
import store from "@store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    , document.getElementById('root'));

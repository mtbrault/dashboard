import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import App from './view';

import store from './redux/store';

import './App.css';

class Root extends Component {
    render () {
        return (
            <LocaleProvider locale={frFR}>
                <Provider store={store}>
                    <Router>
                        <Route path="/" children={({ location }) => (<App location={location} />)} />
                    </Router>
                </Provider>
            </LocaleProvider>
        );
    }
}

export default Root;

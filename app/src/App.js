import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';

import frFR from 'antd/lib/locale-provider/fr_FR';

import AuthLayout from './view/auth/authLayout';
import LoginLayout from './view/auth/login';
import RegisterLayout from './view/auth/register';

import MainLayout from './view/main/mainLayout';

import jwt_decode from 'jwt-decode';
import setAuthToken from './view/auth/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authentifications';
import store from './redux/store';

import './App.css';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
  
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = '/auth'
    }
}

class Root extends Component {
    render () {
        return (
            <LocaleProvider locale={frFR}>
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/auth" component={AuthLayout}/>
                            <Route exact path="/auth/login" component={LoginLayout}/> 
                            <Route exact path="/auth/register" component={RegisterLayout}/> 
                            <Route path="/" component={MainLayout}/>
                        </Switch>
                    </Router>
                </Provider>
            </LocaleProvider>
        );
    }
}

export default Root;

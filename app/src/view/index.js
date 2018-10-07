import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import MainLayout from './main/mainLayout';
import AuthLayout from './auth/authLayout';

class App extends Component {
    renderMainLayout ({ location }) {
        return (
            <MainLayout location={location} />
        );
    }

    renderAuthLayout ({ location }) {
        return (
            <AuthLayout location={location} />
        );
    }

    render () {
        return (
            <Route render={this.renderAuthLayout} />
        );
    }
}

export default App;

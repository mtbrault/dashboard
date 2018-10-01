import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import MainLayout from './main/mainLayout';
import AuthLayout from './auth/authLayout';

class App extends Component {
  static propTypes = {
    isLogged: PropTypes.bool.isRequired,
  }
  renderMainLayout({ location }) {
    return (
      <MainLayout location={location}/>
    );
  }
  renderAuthLayout({ location }) {
    return (
      <AuthLayout location={location}/>
    );
  }
  render() {
    const { isLogged } = false;

      if (isLogged) {
        return (
          <Route render={this.renderMainLayout}/>
        );
      } else {
        return (
          <Route render={this.renderAuthLayout}/>
        );
      }
  }
}

export default App;
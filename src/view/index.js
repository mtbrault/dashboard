import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import MainLayout from './main/mainLayout';

class App extends Component {
  
  renderMainLayout({ location }) {
    return (
      <MainLayout location={location}/>
    );
  }

  render() {
        return (
          <Route render={this.renderMainLayout}/>
        );
  }
}

export default App;
import React from 'react';
import Slider from './sider';

import MyAccount from './myAccount';

import Meteo from './services/meteo';
import Bourse from './services/bourse';

import { Route, Switch, withRouter } from 'react-router-dom';

import { Layout, Breadcrumb } from 'antd';

const { Footer } = Layout;

class MainLayout extends React.PureComponent {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Slider />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0', textAlign: "center" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Service</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
            <Route exact path="/services/meteo" component={Meteo} />
            <Route exact path="/services/bourse" component={Bourse} />
            <Route exact path="/myaccount" component={MyAccount} />
            </Switch>
            <Footer style={{ textAlign: 'center' }} >
              Dashboard Epitech @2018 Created By Zakaria LAABID & Matthieu Brault
            </Footer>
          </Layout>

        </Layout>

      </Layout>);
  }
}

export default withRouter(MainLayout);

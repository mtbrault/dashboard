import React from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { Layout, Menu, Icon } from 'antd';

import { withRouter, NavLink } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/authentifications';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const ServicesComp = () => (
<span><Icon type="project" theme="outlined" />Services</span>
);

class Siders extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onLogout() {
      this.props.logoutUser(this.props.history);
  }

    render () {
        return (
            <Sider width={220} >
            <Menu
              mode="inline"
              theme="light"
              defaultSelectedKeys={['myaccount']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0}}
            >
              <SubMenu key="sub1" title={<span><Icon type="appstore" theme="outlined" />Dashboard</span>}>
                <Menu.Item key="myaccount"><NavLink to="/myaccount"><Icon type="user" theme="outlined" />Mon compte</NavLink></Menu.Item>
                <SubMenu key="sub3" title={<ServicesComp />}>
                  <Menu.Item key="meteo"><NavLink to="/services/meteo"><Icon type="cloud" theme="outlined" />Méteo</NavLink></Menu.Item>
                  <Menu.Item key="bourse"><NavLink to="/services/bourse"><Icon type="fund" theme="outlined" />Bourse</NavLink></Menu.Item>
                  <Menu.Item key="facebook"><NavLink to="/service/facebook"><Icon type="facebook" theme="outlined" />Facebook</NavLink></Menu.Item>
                  <Menu.Item key="twitter"><NavLink to="/service/twitter"><Icon type="twitter" theme="outlined" />Twitter</NavLink></Menu.Item>
                  <Menu.Item key="youtube"><NavLink to="/service/youtube"><Icon type="youtube" theme="outlined" />Youtube</NavLink></Menu.Item>
                </SubMenu>
                <Menu.Item key="10" onClick={this.onLogout.bind(this)}><Icon type="logout" theme="outlined" />Déconnexion</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        )
    }
}

Siders.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })( withRouter(Siders) );

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

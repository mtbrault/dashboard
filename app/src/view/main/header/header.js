import React from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { logoutUser } from '../../../redux/actions/authentifications';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

class MainHeader extends React.PureComponent {
    
    onLogout() {
        this.props.logoutUser(this.props.history);
    }

    render() {
        return (
            <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px', margin: 0, display: 'block', textAlign: 'center'}}
            >
                <Menu.Item key="1">Widget 1</Menu.Item>
                <Menu.Item key="2">Widget 2</Menu.Item>
                <Menu.Item key="3">Widget 3</Menu.Item>
                <Menu.Item key="4" onClick={this.onLogout.bind(this)}>Déconnexion</Menu.Item>
            </Menu>
            </Header>
        );
    }
}

MainHeader.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })( withRouter(MainHeader) );

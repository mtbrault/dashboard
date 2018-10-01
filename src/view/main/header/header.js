import React from 'react';

import { Menu, Layout } from 'antd';

const { Header } = Layout;

class MainHeader extends React.PureComponent {
    render() {
        return (
            <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav d3</Menu.Item>
            </Menu>
            </Header>
        );
    }
}

export default MainHeader;
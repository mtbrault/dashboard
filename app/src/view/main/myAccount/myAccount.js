import React from 'react';

import { Layout, Col, Row, Card } from 'antd';

import Style from './myAccount.less';
import FacebookCard from '../../../components/facebookCard';

const { Content } = Layout;

class MyAccount extends React.PureComponent {

    render() {
        return (
            <Layout>
                <Content style={{ background: '#fff', padding: 24, margin: 0, maxHeight: 200, marginBottom: 50 }}>
                    <h3 className={Style.myAccTitle}>Bienvenue sur votre Dashboard</h3>
                </Content>
                <Row gutter={16}>
                        <FacebookCard />
                        <FacebookCard />
                        <FacebookCard />
                    </Row>
            </Layout>
        );
    }
}

export default MyAccount;
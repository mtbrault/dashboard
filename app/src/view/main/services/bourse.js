import React from 'react';

import { Card, Layout, Col, Row, Icon } from 'antd';

import BourseInfo from '../../../components/bourseInfo';


const services = {
    bourse: {
        crypto: [{
            name: "ETH",
            conversion: "USD"
        }, {
            name: "BTC",
            conversion: "USD"
        }]
    }
};

class Bourse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            arrCrypto: services.bourse.crypto
        }
    }

    render() {
        return (
            <Layout>
                <Row gutter={16} style={{ marginLeft: "40px" }}>
                    {this.state.arrCrypto.map(crypto => {
                        return (
                            <Col span={8} key={crypto.name}>
                                <Card
                                    style={{ width: 300 }}
                                    actions={
                                        [
                                            <Icon type="setting" />,
                                            <Icon type="delete" />
                                        ]
                                    }
                                >
                                    <BourseInfo crypto={crypto.name} conversion={crypto.conversion} />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Layout>
        );
    }
}

export default Bourse;
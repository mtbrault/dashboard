import React from 'react';

import { Card, Layout, Col, Row, Icon } from 'antd';

import BourseInfo from '../../../components/bourseInfo';

class Bourse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            arrCrypto: this.props.bourse.crypto
        }
    }

    addCrypto(newCrypto) {
        console.log(this.state.arrCrypto);
        this.setState({
            arrCrypto: [...this.state.arrCrypto, newCrypto]
        })
        console.log(this.state.arrCrypto);
    }

    deleteCrypto(keyCrypto) {
        var array = [...this.state.arrCrypto];
        var index = array.indexOf(keyCrypto.name);
        array.splice(index, 1);
        this.setState({ arrCrypto: array });
    }

    render() {
        return (
            <Layout>
                <Row gutter={16} style={{ marginLeft: "40px", marginTop: 15 }}>
                    {this.state.arrCrypto.map(crypto => {
                        return (
                            <Col span={8} key={crypto.name}>
                                <Card
                                    style={{ width: 300 }}
                                    actions={
                                        [
                                            <Icon type="setting" />,
                                            <Icon type="delete" onClick={this.deleteCrypto.bind(this, { crypto })} />
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
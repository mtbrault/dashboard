import React from 'react';

import { Layout, Col, Row, Card, Icon, Modal, Form, Input, Select } from 'antd';

// import Style from './myAccount.less';

import FacebookCard from '../../../components/facebookCard';
import TwitterCard from '../../../components/twitterCard';
import GoogleCard from '../../../components/googleCard';


import Meteo from '../services/meteo';
import Bourse from '../services/bourse';

const FormItem = Form.Item;
const Option = Select.Option;

const servicesWidget = {
    weather: {
        city: ["Paris", "Lille", "London"],
    },
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

const MeteoForm = ({ handleInputChange, inputCity }) => {
    return (
        <Input type="text" placeholder="Entrez le nom d'une ville" name="inputCity"
            onChange={handleInputChange} value={inputCity} />
    );
}

const BourseForm = ({ handleInputChange, inputTarget, inputCrypto }) => {
    return (
        <Layout>
            <Input type="text" placeholder="Entrez la devise" name="inputTarget"
                onChange={handleInputChange} value={inputTarget} />

            <Input type="text" placeholder="Entrez le nom d'une crypto" name="inputCrypto"
                onChange={handleInputChange} value={inputCrypto} />
        </Layout>
    );
}

class MyAccount extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            services: servicesWidget,
            selectValue: "",
            inputCity: "",
            inputCrypto: "",
            inputTarget: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange(value) {
        this.setState({ selectValue: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("lol");
    }

    addWidget = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        e.preventDefault();
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <Layout>
                <Modal
                    title="Ajouter un nouveau Widget"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <form onSubmit={this.handleSubmit}>
                        <FormItem hasFeedback style={{ margin: "auto", textAlign: "center" }}>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a widget"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >

                                <Option value="meteo">Meteo</Option>
                                <Option value="bourse">Bourse</Option>
                            </Select>
                            {this.state.selectValue == "meteo" && <MeteoForm handleInputChange={this.handleInputChange} inputCity={this.state.inputCity} />}
                            {this.state.selectValue == "bourse" && <BourseForm handleInputChange={this.handleInputChange} inputTarget={this.state.inputTarget} inputCrypto={this.state.inputCrypto} />}

                        </FormItem>
                    </form>
                </Modal>
                <Meteo {...this.state.services} />
                <Bourse {...this.state.services} />
                <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Col>
                        <Card
                            style={{ width: 300, marginTop: "100px", textAlign: "center", color: "#218df7" }}
                            actions={[<Icon type="plus-square" theme="outlined" onClick={this.addWidget} />]}>
                            <b style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                Ajouter un Widget</b>
                        </Card>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default MyAccount;
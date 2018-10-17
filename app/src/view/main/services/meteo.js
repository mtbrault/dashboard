import React from 'react';

import { Card, Row, Col, Icon, Modal, Layout, Form, Input, Button } from 'antd';

import WeatherInfo from '../../../components/weatherInfo';

const FormItem = Form.Item;

const services = {
  weather: {
    city: ["Paris", "Lille", "London"]
  }
};

class Meteo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrWeather: services.weather.city,
      visible: false,
      inputCity: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    var newArray = this.state.arrWeather.slice();
    newArray.push(this.state.inputCity);
    this.setState({ arrWeather: newArray })
    this.setState({
      visible: false,
    });
  }

  addWeather = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    e.preventDefault();
    var newArray = this.state.arrWeather.slice();
    newArray.push(this.state.inputCity);
    this.setState({ arrWeather: newArray })
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  deleteCity(keyCity) {
    var array = [...this.state.arrWeather];
    var index = array.indexOf(keyCity.ville);
    array.splice(index, 1);
    this.setState({ arrWeather: array });
  }

  render() {
    return (
      <Layout>
        <Modal
          title="Ajouter une nouvelle Météo"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form onSubmit={this.handleSubmit}>
            <FormItem hasFeedback>
              <Input type="text" placeholder="Entrez le nom d'une ville" name="inputCity"
                onChange={this.handleInputChange} value={this.state.inputCity}
              />
            </FormItem>
          </form>
        </Modal>
        <Row gutter={16} style={{ marginLeft: "40px" }}>
          {this.state.arrWeather.map(ville => {
            return (
              <Col span={8} key={ville}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/1200px-Paris_-_Eiffelturm_und_Marsfeld2.jpg" width="298" height="180" />}
                  actions={
                    [
                      <Icon type="setting" />,
                      <Icon type="delete" onClick={this.deleteCity.bind(this, { ville })} />
                    ]
                  }
                >
                  <WeatherInfo ville={ville} />
                </Card>
              </Col>
            );
          })}
          {this.state.arrWeather.length < 3 &&
            <Col span={8}>
              <Card
                style={{ width: 300, marginTop: "100px", textAlign: "center", color: "#218df7" }}
                actions={[<Icon type="plus-square" theme="outlined" onClick={this.addWeather}/>]}
              >
                <b style={{ textTransform: "uppercase", fontWeight: "bold" }}>Ajouter une Méteo <Icon type="cloud" theme="outlined" /></b>
              </Card>

            </Col>
          }
        </Row>
      </Layout>
    )
  }
}

export default Meteo;
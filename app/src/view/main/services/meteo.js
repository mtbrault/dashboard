import React from 'react';

import { Card, Row, Col, Icon, Modal, Layout, Form, Input, Button } from 'antd';

import WeatherInfo from '../../../components/weatherInfo';

class Meteo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrWeather: this.props.weather.city,
      visible: false
    };
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
        </Row>
      </Layout>
    )
  }
}

export default Meteo;
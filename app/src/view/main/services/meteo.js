import React from 'react';

import { Card, Row, Col, Avatar, Icon } from 'antd';

import AddWidget from '../../../components/addWidget';
import WeatherInfo from '../../../components/weatherInfo';

const API_KEY = "403df07bdf873cdb79affc3a3afcc213";

class Meteo extends React.PureComponent {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    const country = "Paris";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: Math.round(data.main.temp),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })

  }

  componentWillMount() {
    this.getWeather();
  }

  render() {
    return (
      <Row gutter={16} style={{ marginLeft: "40px" }}>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/1200px-Paris_-_Eiffelturm_und_Marsfeld2.jpg" width="298" height="180" />}
            actions={[<Icon type="setting" />, <Icon type="delete" />]}
          >
          <WeatherInfo {...this.state} />
          </Card>
        </Col>
        <AddWidget />
      </Row>
    )
  }
}

export default Meteo;
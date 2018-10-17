import React from 'react';
import Style from './weatherInfo.less'

import SunImg from './weatherImages/sun.png';
import WeatherImg from './weatherImages/weather.png';
import ColdImg from './weatherImages/cold.png';

const API_KEY = "403df07bdf873cdb79affc3a3afcc213";


class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (ville) => {
        const country = ville;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
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
        this.getWeather(this.props.ville);
    }
    render() {
        return (
            <div>
                <div className={Style.temperature}>
                    <span>
                        {this.state.temperature}<sup>°C</sup>
                    </span>
                    <img src={WeatherImg} />
                </div>
                <hr style={{ opacity: 0.5 }}></hr>
                <div>
                    <h2 className={Style.textVille}>{this.state.city}</h2>
                </div>
            </div>
        );
    }

}

export default WeatherInfo;
import React from 'react';
import Style from './weatherInfo.less'

import SunImg from './weatherImages/sun.png';
import WeatherImg from './weatherImages/weather.png';
import ColdImg from './weatherImages/cold.png';

const API_KEY = "403df07bdf873cdb79affc3a3afcc213";

const HotTemp = ({temperature}) => {
    return (
        <div>
            <span className={Style.hot}>
                {temperature}<sup>°C</sup>
            </span>
            <img src={SunImg} />
        </div>
    );
}

const ColdTemp = ({temperature}) => {
    return (
        <div>
            <span className={Style.cold}>
                {temperature}<sup>°C</sup>
            </span>
            <img src={ColdImg} />
        </div>
    );
}

const NormalTemp = ({temperature}) => {
    return (
        <div>
            <span>
                {temperature}<sup>°C</sup>
            </span>
            <img src={WeatherImg} />
        </div>
    );
}

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
        error: undefined,
        options: {
            celsius: true,
            fahreint: false
        }
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
                    {this.state.temperature >= 11 && this.state.temperature <= 20 &&
                        <NormalTemp temperature={this.state.temperature} />}
                    {this.state.temperature >= -10 && this.state.temperature <= 10 &&
                        <ColdTemp temperature={this.state.temperature} />}
                    {this.state.temperature >= 21 && this.state.temperature <= 40 &&
                        <HotTemp temperature={this.state.temperature} />}
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
import React from 'react';
import Style from './weatherInfo.less'

import SunImg from './weatherImages/sun.png';
import WeatherImg from './weatherImages/weather.png';
import ColdImg from './weatherImages/cold.png';


class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={Style.temperature}>
                    <span>{this.props.temperature}
                        <sup>°C</sup>
                    </span>
                    <img src={WeatherImg} />
                </div>
                <hr style={{ opacity: 0.5 }}></hr>
                <div>
                    <h2 className={Style.textVille}>{this.props.city}</h2>
                </div>
            </div>
        );
    }

}

export default WeatherInfo;
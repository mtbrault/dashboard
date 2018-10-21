import React from 'react';

import { Icon } from 'antd';

import Style from './bourseInfo.less';

class BourseInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        price: undefined,
        volume: undefined,
        change: undefined
    }
    getCrypto = async (crypto, conversion) => {
        const crypto_name = crypto.toLowerCase();
        const convert = conversion.toLowerCase();
        const api_call = await fetch(`https://api.cryptonator.com/api/ticker/${crypto_name}-${convert}`);
        const data = await api_call.json();
        if (data.success == true) {

        this.setState({
            price: Math.round(data.ticker.price * 100) / 100,
            volume: Math.round(data.ticker.volume * 100) / 100,
            change: data.ticker.change
        })
    } else {
        return null;
    }
    }

    componentWillMount() {
        this.getCrypto(this.props.crypto, this.props.conversion)
    }

    render() {
        return (
            <div className={Style.cryptoBoard}>
                <span className={Style.cryptoTitle}>{this.props.crypto} |
                {this.state.change < 0 && <Icon type="fall" className={Style.changeInferrior} theme="outlined" />}
                {this.state.change > 0 && <Icon type="rise" className={Style.changeSuperrior} theme="outlined" />}
                </span>
                <hr style={{opacity: 0.5}}></hr>
                <span className={Style.cryptoPrice}>Target : {this.props.conversion}</span>
                <span className={Style.cryptoPrice}>Price : {this.state.change > 0 && <span style={{color: "rgb(73, 211, 73)"}}>{this.state.price}</span>}
                {this.state.change < 0 && <span style={{color: "rgb(255, 87, 87)"}}>{this.state.price}</span>}</span>
                <span className={Style.cryptoPrice}>Volume : {this.state.change > 0 && <span style={{color: "rgb(73, 211, 73)"}}>{this.state.volume}</span>}
                {this.state.change < 0 && <span style={{color: "rgb(255, 87, 87)"}}>{this.state.volume}</span>}</span>
            </div>
        );
    }
}

export default BourseInfo;
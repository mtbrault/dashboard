import React from 'react';

import Style from './footBallInfo.less';

import { Button } from 'antd';

class FootBallInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        country_name: "",
        league_name: "",
        team_name: "",
        position_league: "",
        position: 0,
        maxPosition: 10
    }
    getSoccer = async () => {
        const api_call = await fetch(`https://apifootball.com/api/?action=get_standings&league_id=${this.props.footTeam}&APIkey=8b887218abab28840d0c3173840b63b3e501ce7bb9d7ee1a796f44cd290059af`);
        const data = await api_call.json();
        if (data[this.state.position] != null) {
            this.setState({
                country_name: data[this.state.position].country_name,
                league_name: data[this.state.position].league_name,
                team_name: data[this.state.position].team_name,
                position_league: data[this.state.position].overall_league_position,
                maxPositon: data.length
            })
        }
        console.log(data);
    }

    componentDidMount() {
        this.getSoccer()
    }

    nextTeam() {
        if (this.state.position != this.state.maxPosition) {
            var test = this.state.position;
            test++;
            this.setState({ position: test });
            this.getSoccer();
        }
    }

    render() {
        return (
            <div>
                <div className={Style.footBallBoard} >
                    <span className={Style.footBallText}>Nom du Pays: {this.state.country_name}</span>
                    <span className={Style.footBallText}>League: {this.state.league_name}</span>
                    <span className={Style.footBallText}>Nom de team: {this.state.team_name}</span>
                    <span className={Style.footBallText}>Position : {this.state.position_league}</span>
                    <Button type="primary" onClick={this.nextTeam.bind(this)}>Suivant</Button>
                </div>
            </div>
        );
    }
}

export default FootBallInfo;
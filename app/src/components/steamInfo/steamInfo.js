import React from 'react';
import Style from './steamInfo.less'
import { Button } from 'antd';

const API_KEY = "9579FD00A385103E49E8A0CC37BEE99D";


class SteamInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        avatar: "",
        pseudo: "",
        profileUrl: "",
        steamId: 0,
        lastlog: 0,

    }

    getPlayerInfo = async (steamId) => {
        const steamIdentifier = steamId;
        const api_call = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamIdentifier}`);
        const data = await api_call.json();
        const steamData = data.response.players[0];
        if (!steamData.length) {
            return null;
        }
        var d = new Date(steamData.lastlogoff);
        var theDate = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
        this.setState({
            avatar: steamData.avatarfull,
            pseudo: steamData.personaname,
            profileUrl: steamData.profileurl,
            steamId: steamData.steamid,
            lastlog: theDate
        })
        console.log(this.state);

    }

    componentWillMount() {
        this.getPlayerInfo(this.props.steamId);
    }
    render() {
        return (
            <div className={Style.steamCadre}>
                <img src={this.state.avatar} className={Style.steamAvatar} />
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png" style={{ display: "inline-block", paddingBottom: 10 }} width="30px" /> 
                    <h2 className={Style.steamName}>{this.state.pseudo}</h2>
                    <h2 className={Style.steamLog}>Date de naissance : {this.state.lastlog} </h2>
                    <h2 className={Style.steamLog}>STEAM_ID : {this.state.steamId} </h2>

                </div>
                <div>
                   <a href={this.state.profileUrl} target="_blank"> <Button type="primary" className={Style.steamBtn}>Accèder au Profil</Button></a>
                </div>
            </div>
        );
    }

}

export default SteamInfo;
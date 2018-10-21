import React from 'react';

import { Card, Row, Col, Icon, Layout } from 'antd';

import SteamInfo from '../../../components/steamInfo';

class Steam extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrSteam: this.props.steam.steamId,
      visible: false
    };
  }

  addNewSteamId(steamId) {
    this.setState({ arrSteam: [...this.state.arrSteam, steamId]})
  }

  deleteCity(keyIdSteam) {
    var array = [...this.state.arrSteam];
    var index = array.indexOf(keyIdSteam.steamId);
    array.splice(index, 1);
    this.setState({ arrSteam: array });
  }


  render() {
    return (
      <Layout>

        <Row gutter={16} style={{ marginLeft: "40px"}}>
          {this.state.arrSteam.map(steamId => {
            return (
              <Col span={8} key={steamId} style={{marginTop: "15px", marginBottom: "15px"}}>
                <Card
                  style={{ width: 300 }}
                  actions={
                    [
                      
                      <Icon type="delete" onClick={this.deleteCity.bind(this, { steamId })} />
                    ]
                  }
                >
                  <SteamInfo steamId={steamId} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Layout>
    )
  }
}

export default Steam;
import React from 'react';

import { Card, Row, Col, Icon, Layout } from 'antd';

import FootBallInfo from '../../../components/footBallInfo';

class FootBall extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrFootBall: this.props.football.bestSoccer,
      visible: false
    };

    console.log(this.state.arrFootBall);
  }

  addNewTeams(footTeam) {
    this.setState({ arrFootBall: [...this.state.arrFootBall, footTeam]})
  }

  deleteFootTeam(keyfootTeam) {
    var array = [...this.state.arrFootBall];
    var index = array.indexOf(keyfootTeam.footTeam);
    array.splice(index, 1);
    this.setState({ arrFootBall: array });
  }


  render() {
    return (
      <Layout>

        <Row gutter={16} style={{ marginLeft: "40px"}}>
          {this.state.arrFootBall.map(footTeam => {
            return (
              <Col span={8} key={footTeam} style={{marginTop: "15px", marginBottom: "15px"}}>
                <Card
                  style={{ width: 300 }}
                  actions={
                    [
                      
                      <Icon type="delete" onClick={this.deleteFootTeam.bind(this, { footTeam })} />
                    ]
                  }
                >
                  <FootBallInfo footTeam={footTeam} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Layout>
    )
  }
}

export default FootBall;
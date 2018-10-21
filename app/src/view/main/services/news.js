import React from 'react';

import { Card, Row, Col, Icon, Layout } from 'antd';

import NewsInfo from '../../../components/newsInfo';

class News extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrNews: this.props.news.infoType,
      visible: false
    };
  }

  addNews(infoType) {
    this.setState({ arrNews: [...this.state.arrNews, infoType]})
  }

  deleteNews(keyInfoType) {
    var array = [...this.state.arrNews];
    var index = array.indexOf(keyInfoType.infoType);
    array.splice(index, 1);
    this.setState({ arrNews: array });
  }

  render() {
    return (
      <Layout>

        <Row gutter={16} style={{ marginLeft: "40px"}}>
          {this.state.arrNews.map(infoType => {
            return (
              <Col span={23} key={infoType} style={{marginTop: "15px", marginBottom: "15px"}}>
                <Card
                  actions={
                    [
                      <Icon type="delete" onClick={this.deleteNews.bind(this, { infoType })} />
                    ]
                  }
                >
                  <NewsInfo infoType={infoType} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Layout>
    )
  }
}

export default News;
import React from 'react';

import { Col, Card, Avatar, Icon } from 'antd';

const { Meta } = Card;


class AddWidget extends React.Component {
    render() {
        return (
            <Col span={8}>
            <Card
              style={{ width: 300, marginTop: "100px", textAlign: "center", color: "#218df7"}}
              actions={[<Icon type="plus-square" theme="outlined" />]}
            >
            <b style={{textTransform: "uppercase", fontWeight: "bold"}}>Ajouter une Méteo <Icon type="cloud" theme="outlined" /></b>
            </Card>
  
          </Col>
        );
    }
}

export default AddWidget;
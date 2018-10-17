import React from 'react';

import { Card, Col, Button, Icon } from 'antd';

import Style from './facebookCard.less';

const TitleCard = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <span className={Style.cardTitle}><Icon type="facebook" theme="filled" style={{fontSize: 40, color: "#3b5998"}}/> Facebook Connect</span>
        </div>
    );
}


const FacebookBtn = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Button type="primary" className={Style.cardButton} >
               Synchroniser avec Facebook 
            </Button>
        </div>
    );
}


class FacebookCard extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Col span={8}>
                    <Card title={<TitleCard />} bordered={true} >
                        <FacebookBtn />
                    </Card>
                </Col>
            </div>
        );
    }
}

export default FacebookCard;
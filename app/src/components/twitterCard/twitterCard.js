import React from 'react';

import { Card, Col, Button, Icon } from 'antd';

import Style from './twitterCard.less';

const TitleCard = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <span className={Style.cardTitle}><Icon type="twitter" theme="outlined" style={{fontSize: 40, color: "#47d1e4"}}/> Twitter Connect</span>
        </div>
    );
}


const TwitterBtn = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Button type="primary" className={Style.cardButton} >
               Synchroniser avec Twitter 
            </Button>
        </div>
    );
}


class TwitterCard extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Col span={8}>
                    <Card title={<TitleCard />} bordered={true} >
                        <TwitterBtn />
                    </Card>
                </Col>
            </div>
        );
    }
}

export default TwitterCard;
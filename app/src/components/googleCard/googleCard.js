import React from 'react';

import { Card, Col, Button, Icon } from 'antd';

import Style from './googleCard.less';

const TitleCard = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <span className={Style.cardTitle}><Icon type="google" theme="outlined" style={{fontSize: 40, color: "rgb(255, 119, 119);"}}/> Google Connect</span>
        </div>
    );
}


const GoogleBtn = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Button type="primary" className={Style.cardButton} >
               Synchroniser avec Google 
            </Button>
        </div>
    );
}


class GoogleCard extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Col span={8}>
                    <Card title={<TitleCard />} bordered={true} >
                        <GoogleBtn />
                    </Card>
                </Col>
            </div>
        );
    }
}

export default GoogleCard;
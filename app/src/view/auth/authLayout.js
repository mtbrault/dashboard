import React from 'react';

import { Form, Input, Button, Row } from 'antd';

import Styles from './authLayout.less';
import logoEpitech from '../../../assets/logo.png';

const FormItem = Form.Item;

class AuthLayout extends React.PureComponent {
    render () {
        return (
            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img alt="logo_epitech" src={logoEpitech} />
                </div>
                <form>
                    <FormItem hasFeedback>
                        <Input placeholder="Email" />
                    </FormItem>
                    <FormItem hasFeedback>
                        <Input type="password" placeholder="Mot de passe" />
                    </FormItem>
                    <Row>
                        <Button type="primary">
                            Connexion
                        </Button>
                        <hr className={Styles.spacer} />   
                        <Button type="primary" className={Styles.btnoffice} size="small">
                            Connexion Office 365
                        </Button>
                    </Row>
                    
                </form>
            </div>
        );
    }
}


export default AuthLayout;

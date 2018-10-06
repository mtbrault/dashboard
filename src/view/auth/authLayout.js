import React from 'react';

import { Form, Input, Button, Row } from 'antd';

import Styles from './authLayout.less'
import logoEpitech from '../../../assets/logo.png';

const FormItem = Form.Item

class AuthLayout extends React.PureComponent {
    
      render() {
        return (
            <div className={Styles.form}>
            <div className={Styles.logo}>
              <img alt="logo_epitech" src={logoEpitech} />
            </div>
            <form>
              <FormItem hasFeedback>
                <Input placeholder="Username" />
              </FormItem>
              <FormItem hasFeedback>
                <Input type="password"  placeholder="Password" />
              </FormItem>
              <Row>
                <Button type="primary">
                  Sign in
                </Button>
                <p>
                  <span>Username：guest</span>
                  <span>Password：guest</span>
                </p>
              </Row>
      
            </form>
          </div>
        );
      }
    }
    

export default AuthLayout;

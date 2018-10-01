import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Style from "./authLayout.less";

const FormItem = Form.Item;

class AuthLayout extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    
    render() {

        return (
            <div className={Style.container}>
            <div className={Style.content}>
              <div className={Style.top}>
                <div className={Style.header}>
                </div>
              </div>
              <div className={Style.main}>
            <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
          <div className={Style.copyright}>Copyright @ 2018 Partech.</div>
          </div>
        </div>
      </div>
        );
    }
}

export default AuthLayout;

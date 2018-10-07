import React from 'react';

import { Form, Input, Button, Row } from 'antd';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authentifications';
import PropTypes from 'prop-types';

import Styles from './authLayout.less';
import logoEpitech from '../../../assets/logo.png';

const FormItem = Form.Item;

class AuthLayout extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render () {
        return (
            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img alt="logo_epitech" src={logoEpitech} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormItem hasFeedback>
                        <Input type="text" placeholder="Email" name="email" 
                               onChange={this.handleInputChange} value={this.state.email} />
                    </FormItem>
                    <FormItem hasFeedback>
                        <Input type="password" placeholder="Mot de passe" name="password"
                               onChange={this.handleInputChange} value={this.state.password}  />
                    </FormItem>
                    <Row>
                        <Button type="primary" htmlType="submit">
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


AuthLayout.propTypes = {
    errors: PropTypes.object.isRequired
}   

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(AuthLayout)

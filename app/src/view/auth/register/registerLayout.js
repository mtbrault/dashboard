import React from 'react';

import { Form, Input, Button, Row, Alert } from 'antd';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/authentifications';

import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import Styles from './register.less';

const FormItem = Form.Item;

class Register extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render () {
        const {errors} = this.state;
        return (
            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img alt="logo_epitech" src="../../../assets/logo.png" />
                </div>
                {errors.name && (<Alert message={errors.name} type="error" className={Styles.errorAlert}></Alert>)}
                {errors.password && (<Alert message={errors.password} type="error" className={Styles.errorAlert}></Alert>)}
                {errors.password_confirm && (<Alert message={errors.password_confirm} type="error" className={Styles.errorAlert}></Alert>)}

                {errors.email && (<Alert message={errors.email} type="error" className={Styles.errorAlert}></Alert>)}

                <form onSubmit={this.handleSubmit}>
                <FormItem hasFeedback>
                        <Input type="text" placeholder="Nom" name="name" 
                               onChange={this.handleInputChange} value={this.state.name} 
                               
                        />
                    </FormItem>
                    <FormItem hasFeedback>
                        <Input type="text" placeholder="Email" name="email" 
                               onChange={this.handleInputChange} value={this.state.email} 
                               
                        />
                    </FormItem>

                    <FormItem hasFeedback>
                        <Input type="password" placeholder="Mot de passe" name="password"
                               onChange={this.handleInputChange} value={this.state.password}  />
                    </FormItem>
                    <FormItem hasFeedback>
                        <Input type="password" placeholder="Re - Mot de passe" name="password_confirm"
                               onChange={this.handleInputChange} value={this.state.password_confirm}  />
                    </FormItem>
                    <Row>
                        <Button type="primary" htmlType="submit">
                            Finaliser l'inscription
                        </Button>
                    </Row>
                    <Link to="/auth"><span className={Styles.backSmoothBtn}>Retour en arrière</span></Link>
                    <Link to="/auth/login"><span className={Styles.loginBtn}>J'ai déjà un compte.</span></Link>
             
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser }) ( withRouter(Register) ) 
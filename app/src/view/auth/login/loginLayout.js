import React from 'react';

import { Form, Input, Button, Row, Alert } from 'antd';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/authentifications';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

import Styles from './login.less';

const FormItem = Form.Item;

class Login extends React.PureComponent {
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
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/main');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img alt="logo_epitech" src="../../../assets/logo.png" />
                </div>

                {errors.password && errors.email && (<Alert message={errors.password && errors.email} type="error" className={Styles.errorAlert}></Alert>)}
                {!errors.password && errors.email && (<Alert message={errors.email} type="error" className={Styles.errorAlert}></Alert>)}
                {!errors.email && errors.password && (<Alert message={errors.password} type="error" className={Styles.errorAlert}></Alert>)}

                <form onSubmit={this.handleSubmit}>
                    <FormItem hasFeedback>
                        <Input type="text" placeholder="Email" name="email"
                            onChange={this.handleInputChange} value={this.state.email}

                        />
                    </FormItem>

                    <FormItem hasFeedback>
                        <Input type="password" placeholder="Mot de passe" name="password"
                            onChange={this.handleInputChange} value={this.state.password} />
                    </FormItem>
                    <Row>
                        <Button type="primary" htmlType="submit">
                            Connexion
                        </Button>
                    </Row>
                    <Link to="/auth"><span className={Styles.backSmoothBtn}>Retour en arrière</span></Link>
                    <Link to="/auth/register"><span className={Styles.registerBtn}>Je n'ai pas de compte.</span></Link>
                </form>
            </div>
        );
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(withRouter(Login))
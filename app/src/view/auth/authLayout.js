import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import logoEpitech from '../../../assets/logo.png';
import Styles from './authLayout.less';
import LoginAzureAD from './loginAzureAD';

class AuthLayout extends React.PureComponent {
    
    render() {
        return (

            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img alt="logo_epitech" src={logoEpitech} />
                </div>
                <Link to="/auth/login">
                    <Button type="primary" icon="login" size="large"
                        className={Styles.btnConnexion}>Connexion</Button>
                </Link>
                <Link to="/auth/register">
                    <Button type="primary" icon="user-add" size="large" 
                    className={Styles.btnInscription}>Inscription</Button>
                </Link>
                <LoginAzureAD />
                <span className={Styles.textAuth}>Created by ZackiChan & Matthias LeBrolt</span>
            </div>
        );
    }
}

export default AuthLayout;
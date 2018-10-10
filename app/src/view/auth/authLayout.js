import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import logoEpitech from '../../../assets/logo.png';
import Styles from './authLayout.less';

class AuthLayout extends React.PureComponent {
    
    render() {
        const OfficeBtn = () => {
            return (
                <div className={Styles.btnOffice}>Connexion avec 
                    <img src="https://www.elevatepoint.com/wp-content/uploads/2017/06/office365-1024x409.png"/>
                </div>
            );
        };

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
                <OfficeBtn />
                <span className={Styles.textAuth}>Created by ZackiChan & Matthias LeBrolt</span>
            </div>
        );
    }
}

export default AuthLayout;
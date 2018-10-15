import React from 'react';

import Styles from './loginAzureAD.less';

class LoginAzureAD extends React.PureComponent {
    render() {
        const OfficeBtn = () => {
            return (
                <div className={Styles.btnOffice}>Connexion avec 
                    <img src="https://www.elevatepoint.com/wp-content/uploads/2017/06/office365-1024x409.png"/>
                </div>
            );
        };
        return (
            <OfficeBtn />
        );
    }
}

export default LoginAzureAD;
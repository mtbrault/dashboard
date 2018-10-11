import React from 'react';

import AzureService from './AzureService';
import GraphService from './GraphService';
import Styles from './loginAzureAD.less';

class LoginAzureAD extends React.PureComponent {
    constructor() {
        super();
        this.azureService = new AzureService();
        this.graphService = new GraphService();
        this.state = {
            user: null,
            userInfo: null,
            apiCallFailed: false,
            loginFailed: false
        }
    }
    componentWillMount() {}

    callAPI = () => {
        this.setState({
          apiCallFailed: false
        });
        this.azureService.getToken().then(
          token => {
            this.graphService.getUserInfo(token).then(
              data => {
                this.setState({
                  userInfo: data
                });
              },
              error => {
                console.error(error);
                this.setState({
                  apiCallFailed: true
                });
              }
            );
          },
          error => {
            console.error(error);
            this.setState({
              apiCallFailed: true
            });
          }
        );
      };
    
      logout = () => {
        this.azureService.logout();
      };
    
      login = () => {
        this.setState({
          loginFailed: false
        });
        this.azureService.login().then(user => {
            if (user) {
              this.setState({
                user: user
              });
            } else {
              this.setState({
                loginFailed: true
              });
            }
          },
          () => {
            this.setState({
              loginFailed: true
            });
          }
        );
      };
    
    render() {
        const OfficeBtn = () => {
            return (
                <div onClick={this.login} className={Styles.btnOffice}>Connexion avec 
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
import * as Msal from 'msal';
import React from 'react';

class AzureService extends React.PureComponent {
    constructor() {
        super();
        let redirectUri = window.location.origin + "/main";
        this.applicationConfig = {
          clientID: '427a875d-962e-4876-9093-80a9108163ee',
          graphScopes: ['user.read']
        };
        this.app = new Msal.UserAgentApplication(
          this.applicationConfig.clientID,
          '',
          () => {
            // callback for login redirect
          },
          {
            redirectUri
          }
        );
    }
    login = () => {
        return this.app.loginPopup(this.applicationConfig.graphScopes).then(
          idToken => {
            const user = this.app.getUser();
            if (user) {
              return user;
            } else {
              return null;
            }
          },
          () => {
            return null;
          }
        );
      };
      logout = () => {
        this.app.logout();
      };
      getToken = () => {
        return this.app.acquireTokenSilent(this.applicationConfig.graphScopes).then(
          accessToken => {
            return accessToken;
          },
          error => {
            return this.app
              .acquireTokenPopup(this.applicationConfig.graphScopes)
              .then(
                accessToken => {
                  return accessToken;
                },
                err => {
                  console.error(err);
                }
              );
          }
        );
      };
} 

export default AzureService;
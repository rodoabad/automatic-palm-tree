import {ImplicitCallback, Security} from '@okta/okta-react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {PageContainer} from './page-container';
import React from 'react';

const oktaConfig = {
  clientId: '0oaf3emz9n7G0xYA20h7',
  issuer: 'https://dev-689082.oktapreview.com/oauth2/default',
  path: '/implicit/callback',
  redirectUri: `${window.location.origin}/implicit/callback`
};

export const RouteConfig = () => (
  <Router>
    <Security
      client_id={oktaConfig.clientId}
      issuer={oktaConfig.issuer}
      redirect_uri={oktaConfig.redirectUri}
    >
      <PageContainer/>
      <Route
        component={ImplicitCallback}
        path={oktaConfig.path}
      />
    </Security>
  </Router>
);

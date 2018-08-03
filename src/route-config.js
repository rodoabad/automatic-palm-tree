import {ImplicitCallback, Security} from '@okta/okta-react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AnonymousRoute from './anonymous-route';
import HomeRoute from './home-route';
import React from 'react';
import RestrictedRouteA from './restricted-route-a';
import RestrictedRouteB from './restricted-route-b';

const oktaConfig = {
  clientId: '0oaf3emz9n7G0xYA20h7',
  issuer: 'https://dev-689082.oktapreview.com/oauth2/default',
  path: '/implicit/callback',
  redirectUri: `${window.location.origin}/implicit/callback`
};

const RouteConfig = () => (
  <Router>
    <Security
      client_id={oktaConfig.clientId}
      issuer={oktaConfig.issuer}
      redirect_uri={oktaConfig.redirectUri}
    >
      <HomeRoute/>
      <AnonymousRoute/>
      <RestrictedRouteA/>
      <RestrictedRouteB/>
      <Route
        component={ImplicitCallback}
        path={oktaConfig.path}
      />
    </Security>
  </Router>
);

export default RouteConfig;

import { ImplicitCallback, Security } from '@okta/okta-react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AnonymousRoute from './anonymous-route';
import HelloRoute from './hello-route';
import React from 'react';
import RestrictedRouteA from './restricted-route-a';
import RestrictedRouteB from './restricted-route-b';
import ProviderComponent from './provider-component-connector';

const clientId = process.env.CLIENT_ID || '0oaf3emz9n7G0xYA20h7';
const oktaDomain = process.env.OKTA_DOMAIN || 'https://dev-689082.oktapreview.com/oauth2/default';

const RouteConfig = () => (
  <Router>
    {/* <Security
      client_id={clientId}
      issuer={oktaDomain}
      redirect_uri={`${window.location.origin}/implicit/callback`}
    > */}
      <ProviderComponent c='c'>
        <HelloRoute />
        <AnonymousRoute />
        <RestrictedRouteA />
        <RestrictedRouteB />
        {/* <Route
          component={ImplicitCallback}
          path='/implicit/callback'
        /> */}
      </ProviderComponent>
    {/* </Security> */}
  </Router>
);

export default RouteConfig;

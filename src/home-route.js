import {Home} from './home';
import React from 'react';
import {Route} from 'react-router-dom';

// import {SecureRoute} from '@okta/okta-react';

export const HomeRoute = (props) => (
  <Route
    exact={true}
    path='/'
    render={(routeProps) => (
      <Home
        {...routeProps}
        {...props}
      />
    )}
  />
);

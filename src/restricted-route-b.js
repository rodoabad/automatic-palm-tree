import React from 'react';
import {Restricted} from './restricted';
import {SecureRoute as Route} from '@okta/okta-react';

export const RestrictedRouteB = (props) => (
  <Route
    path='/restricted-b'
    render={(routeProps) => (
      <Restricted
        {...routeProps}
        {...props}
      />
    )}
  />
);

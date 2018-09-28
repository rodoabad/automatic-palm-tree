import React from 'react';
import {Restricted} from './restricted';
import {SecureRoute as Route} from '@okta/okta-react';

export const RestrictedRouteA = (props) => (
  <Route
    path='/restricted-a'
    render={(routeProps) => (
      <Restricted
        {...routeProps}
        {...props}
      />
    )}
  />
);

import React from 'react';
import Restricted from './restricted';
import {
  SecureRoute as Route
} from '@okta/okta-react';

// import {Route as SecureRoute} from 'react-router-dom';

const RestrictedRouteA = () => (
  <Route
    component={Restricted}
    path='/restricted-a'
  />
);

export default RestrictedRouteA;

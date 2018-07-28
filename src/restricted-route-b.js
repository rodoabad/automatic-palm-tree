import React from 'react';
import Restricted from './restricted';
import {
  SecureRoute as Route
} from '@okta/okta-react';

// import {Route as SecureRoute} from 'react-router-dom';

const RestrictedRouteB = () => (
  <Route
    component={Restricted}
    path='/restricted-b'
  />
);

export default RestrictedRouteB;

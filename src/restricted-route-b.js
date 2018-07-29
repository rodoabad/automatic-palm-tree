import React from 'react';
import Restricted from './restricted';
import {SecureRoute as Route} from '@okta/okta-react';

const RestrictedRouteB = () => (
  <Route
    component={Restricted}
    path='/restricted-b'
  />
);

export default RestrictedRouteB;

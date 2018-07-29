import React from 'react';
import Restricted from './restricted';
import {SecureRoute as Route} from '@okta/okta-react';

const RestrictedRouteA = () => (
  <Route
    component={Restricted}
    path='/restricted-a'
  />
);

export default RestrictedRouteA;

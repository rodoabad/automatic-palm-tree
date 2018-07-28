import Hello from './hello';
import React from 'react';

// import {SecureRoute} from '@okta/okta-react';

import {
  Route as SecureRoute
} from 'react-router-dom';

const HelloRoute = () => (
  <SecureRoute
    component={Hello}
    path='/'
  />
);

export default HelloRoute;

import Hello from './hello';
import React from 'react';

// import {SecureRoute} from '@okta/okta-react';

import {
  Route
} from 'react-router-dom';

const HelloRoute = () => (
  <Route
    component={Hello}
    path='/'
  />
);

export default HelloRoute;

import Anonymous from './anonymous';
import React from 'react';

// import {SecureRoute} from '@okta/okta-react';

import {
  Route
} from 'react-router-dom';

const AnonymousRoute = () => (
  <Route
    component={Anonymous}
    path='/anonymous'
  />
);

export default AnonymousRoute;

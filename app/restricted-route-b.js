import Restricted from './restricted';
import React from 'react';
import {SecureRoute} from '@okta/okta-react';
// import {Route as SecureRoute} from 'react-router-dom';

const RestrictedRouteB = () => (
    <SecureRoute
        component={Restricted}
        path='/restricted-b'
    />
);

export default RestrictedRouteB;

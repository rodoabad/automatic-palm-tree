import Anonymous from './anonymous';
import React from 'react';
// import {SecureRoute} from '@okta/okta-react';
import {Route as SecureRoute} from 'react-router-dom';

const AnonymousRoute = () => (
    <SecureRoute
        component={Anonymous}
        path='/anonymous'
    />
);

export default AnonymousRoute;

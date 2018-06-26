import Anonymous from './anonymous';
import React from 'react';
// import {SecureRoute} from '@okta/okta-react';
import { Route as SecureRoute } from 'react-router-dom';

const AnonymousRoute = (props) => {

  console.log('anonymousRoute', props);

  return (
    <SecureRoute
      // component={Anonymous}
      path='/anonymous'
      render={(renderProps) => {


        console.log('inlineRender', renderProps);

        return (
          <Anonymous {...renderProps} {...props}/>
        )
      }}
    />
  )
}

export default AnonymousRoute;

import {Anonymous} from './anonymous';
import React from 'react';
import {Route} from 'react-router-dom';

export const AnonymousRoute = (props) => (
  <Route
    path='/anonymous'
    render={(routeProps) => {
      return (
        <Anonymous
          {...routeProps}
          {...props}
        />
      );
    }}
  />
);

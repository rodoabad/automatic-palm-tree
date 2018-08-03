import Home from './home';
import React from 'react';
import {Route} from 'react-router-dom';

const HomeRoute = () => (
  <Route
    component={Home}
    path='/'
  />
);

export default HomeRoute;

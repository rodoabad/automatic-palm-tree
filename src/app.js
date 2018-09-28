import './app.scss';
import React from 'react';
import {RouteConfig} from './route-config';
import {hot} from 'react-hot-loader';

export const App = () => (
  <React.Fragment>
    <RouteConfig />
  </React.Fragment>
);

export const AppWithHotReload = hot(module)(App);

import React from 'react';
import { hydrate } from 'react-dom';
import RouteConfig from './route-config';


hydrate(
  <RouteConfig />,
  document.querySelector('.content')
);

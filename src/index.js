import React from 'react';
import { hydrate } from 'react-dom';
import RouteConfig from './route-config';
import { Provider as ReduxProvider } from 'react-redux';
import {store} from './store-configurator';


hydrate(
  <ReduxProvider store={store}>
    <RouteConfig />
  </ReduxProvider>,
  document.querySelector('.content')
);

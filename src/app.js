import './app.scss';
import React from 'react';
import {RouteConfig} from './route-config';
import {hot} from 'react-hot-loader';

export const App = () => <RouteConfig/>;

export const AppWithHotReload = hot(module)(App);

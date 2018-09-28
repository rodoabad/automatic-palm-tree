import {AppWithHotReload} from './src/app';
import React from 'react';
import {render} from 'react-dom';

render(
  <AppWithHotReload/>,
  document.querySelector('.content')
);

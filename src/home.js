import Charts from './charts';
import Hello from './hello';
import Links from './links';
import React from 'react';
import {home} from './home.scss';

const Home = () => (
  <div className={home}>
    <Hello />
    <Links />
    <Charts />
  </div>
);

export default Home;

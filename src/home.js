import Hello from './hello';
import Links from './links';
import React from 'react';
import {home} from './home.scss';

const Home = () => (
  <div className={home}>
    <Hello/>
    <Links/>
  </div>
);

export default Home;

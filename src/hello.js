import React from 'react';
import {hello} from './hello.scss';

const Hello = () => (
  <h1
    className={hello}
    data-test='hello'
  >

    {'Hello, world!'}
  </h1>
);

export default Hello;

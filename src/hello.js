import React from 'react';
import {hello} from './hello.scss';

const Hello = () => (
  <h1
    className={hello}
    data-test='hello'
  >

    {
      `${process.env.MESSAGE}, ${process.env.NAME}!!` // eslint-disable-line no-process-env
    }
  </h1>
);

export default Hello;

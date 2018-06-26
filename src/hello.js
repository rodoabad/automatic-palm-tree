import Links from './links';
import React from 'react';

const Hello = (props) => {

  console.log('helloProps', props);

  return (
    <div>
      <div>{'Hello, world!'}</div>
      <Links />
    </div>
  )
};

export default Hello;

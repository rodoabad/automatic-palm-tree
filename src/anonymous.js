import React, { Component } from 'react';
import { anonymous } from './anonymous.scss';

class Anonymous extends Component {
  render() {
    return (
      <div className={anonymous}>
        <div>{'Anonymous user.'}</div>
      </div>
    )
  }
};

export default Anonymous;

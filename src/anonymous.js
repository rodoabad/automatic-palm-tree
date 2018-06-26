import React, { Component } from 'react';
import ManInTheMirror from 'man-in-the-mirror';
import { anonymous } from './anonymous.scss';

class Anonymous extends Component {

  render() {
    console.log('anonymousProps', this.props);

    return (
      <div className={anonymous}>
        <div>{'Anonymous user.'}</div>
        <ManInTheMirror />
      </div>
    )
  }
};

export default Anonymous;

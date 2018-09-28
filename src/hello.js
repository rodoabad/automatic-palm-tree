import {hello, message, name} from './hello.scss';
import PropTypes from 'prop-types';
import React from 'react';

export const Hello = ({className}) => (
  <h1
    className={`${className} ${hello}`}
    data-test='hello'
  >
    <div className={message}>
      {`${process.env.MESSAGE}`}
    </div>
    <div className={name}>
      {`${process.env.NAME}`}
    </div>
  </h1>
);

Hello.propTypes = {
  className: PropTypes.string
};

Hello.defaultProps = {
  className: ''
};

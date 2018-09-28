import {hello, message, name} from './hello.scss';
import PropTypes from 'prop-types';
import React from 'react';

export const Hello = ({className}) => (
  <section
    className={`${className} ${hello}`}
    data-test='hello'
  >
    <div className={message}>
      {`${process.env.MESSAGE}`}
    </div>
    <div className={name}>
      {`${process.env.NAME}`}
    </div>
  </section>
);

Hello.propTypes = {
  className: PropTypes.string
};

Hello.defaultProps = {
  className: ''
};

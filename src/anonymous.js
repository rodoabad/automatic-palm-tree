import PropTypes from 'prop-types';
import React from 'react';
import {anonymous} from './anonymous.scss';

export const Anonymous = ({className}) => (
  <section className={`${className} ${anonymous}`}>
    <div>{'Anonymous user.'}</div>
  </section>
);

Anonymous.propTypes = {
  className: PropTypes.string
};

Anonymous.defaultProps = {
  className: ''
};


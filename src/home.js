import {Hello} from './hello';
import PropTypes from 'prop-types';
import React from 'react';

export const Home = ({className}) => (
  <section className={className}>
    <Hello />
  </section>
);

Home.propTypes = {
  className: PropTypes.string
};

Home.defaultProps = {
  className: ''
};

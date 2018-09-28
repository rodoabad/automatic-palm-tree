import {Hello} from './hello';
import PropTypes from 'prop-types';
import React from 'react';
import {SimpleAreaChart} from './chart';

export const Home = ({className}) => (
  <section className={className}>
    <Hello />
    <SimpleAreaChart/>
  </section>
);

Home.propTypes = {
  className: PropTypes.string
};

Home.defaultProps = {
  className: ''
};

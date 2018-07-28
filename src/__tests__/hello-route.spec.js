import ComponentToTest from '../hello-route';
import Hello from '../hello';
import React from 'react';
import {
  Route
} from 'react-router-dom';
import {
  shallow
} from 'enzyme';

describe('HelloRoute', () => {

  const requiredProps = () => ({});
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {

    const wrapper = render();

    expect(wrapper).toMatchSnapshot();

  });

  test('component to be open for non authorized users', () => {

    const wrapper = render();

    expect(wrapper.type()).toEqual(Route);
    expect(wrapper).toMatchSnapshot();

  });

  test('route renders Hello', () => {

    const wrapper = render();

    expect(wrapper.props().component).toEqual(Hello);
    expect(wrapper).toMatchSnapshot();

  });

  test('path is correct', () => {

    const wrapper = render();

    expect(wrapper.props().path).toEqual('/');
    expect(wrapper).toMatchSnapshot();

  });

});

import ComponentToTest from '../home-route';
import Home from '../home';
import React from 'react';
import {Route} from 'react-router-dom';
import {shallow} from 'enzyme';

describe('HomeRoute', () => {
  const requiredProps = () => ({
  });
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

  test('route renders Home', () => {
    const wrapper = render();

    expect(wrapper.props().component).toEqual(Home);
    expect(wrapper).toMatchSnapshot();
  });

  test('path is correct', () => {
    const wrapper = render();

    expect(wrapper.props().path).toEqual('/');
    expect(wrapper).toMatchSnapshot();
  });
});

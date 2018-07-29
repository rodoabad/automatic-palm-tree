import ComponentToTest from '../anonymous';
import React from 'react';
import {shallow} from 'enzyme';

describe('Anonnymous', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('component has styles', () => {
    const wrapper = render();

    expect(wrapper.props().className).toEqual('anonymous');
    expect(wrapper).toMatchSnapshot();
  });

  test('component is for anonymous users', () => {
    const wrapper = render();

    expect(wrapper.text()).toEqual('Anonymous user.');
    expect(wrapper).toMatchSnapshot();
  });
});


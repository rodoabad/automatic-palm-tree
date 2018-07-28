import Anonymous from '../anonymous';
import React from 'react';
import {
  shallow
} from 'enzyme';

describe('<Anonymous/>', () => {

  const requiredProps = () => ({});
  const render = (props = requiredProps()) => shallow(<Anonymous {...props}/>);

  test('component renders', () => {

    const wrapper = render();

    expect(wrapper).toMatchSnapshot();

  });

  test('component has styles', () => {

    const wrapper = render();

    expect(wrapper.props().className).toEqual('anonymous');

  });

  test('component is for anonymous users', () => {

    const wrapper = render();

    expect(wrapper.text()).toEqual('Anonymous user.');

  });

});

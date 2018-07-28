import ComponentToTest from '../restricted';
import React from 'react';
import {
  shallow
} from 'enzyme';

describe('Restricted', () => {

  const requiredProps = () => ({});
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {

    const wrapper = render();

    expect(wrapper).toMatchSnapshot();

  });

  test('component has styles', () => {

    const wrapper = render();

    expect(wrapper.props().className).toEqual('restricted');
    expect(wrapper).toMatchSnapshot();

  });

  test('component is for restricted users', () => {

    const wrapper = render();

    expect(wrapper.text()).toEqual('Restricted user.');
    expect(wrapper).toMatchSnapshot();

  });

});


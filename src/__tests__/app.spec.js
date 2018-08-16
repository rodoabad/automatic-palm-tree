import ComponentToTest from '../app';
import React from 'react';
import {shallow} from 'enzyme';

describe('App', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

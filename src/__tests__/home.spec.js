import ComponentToTest from '../home';
import React from 'react';
import {shallow} from 'enzyme';

describe('Home', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

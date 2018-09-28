import {HomeRoute} from '../home-route';
import React from 'react';
import {shallow} from 'enzyme';

describe('HomeRoute', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<HomeRoute {...props} />);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

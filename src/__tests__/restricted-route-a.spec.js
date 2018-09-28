import React from 'react';
import {RestrictedRouteA} from '../restricted-route-a';
import {shallow} from 'enzyme';

describe('RestrictedRouteA', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<RestrictedRouteA {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

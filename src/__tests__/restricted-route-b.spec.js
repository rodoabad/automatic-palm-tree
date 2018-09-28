import React from 'react';
import {RestrictedRouteB} from '../restricted-route-b';
import {shallow} from 'enzyme';

describe('RestrictedRouteB', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<RestrictedRouteB {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

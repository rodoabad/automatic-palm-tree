import ComponentToTest from '../restricted-route-b';
import React from 'react';
import Restricted from '../restricted';
import {SecureRoute} from '@okta/okta-react';
import {shallow} from 'enzyme';

describe('RestrictedRouteB', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('component to be closed for unauthorized users', () => {
    const wrapper = render();

    expect(wrapper.type()).toEqual(SecureRoute);
    expect(wrapper).toMatchSnapshot();
  });

  test('route renders Restricted', () => {
    const wrapper = render();

    expect(wrapper.props().component).toEqual(Restricted);
    expect(wrapper).toMatchSnapshot();
  });

  test('path is correct', () => {
    const wrapper = render();

    expect(wrapper.props().path).toEqual('/restricted-b');
    expect(wrapper).toMatchSnapshot();
  });
});

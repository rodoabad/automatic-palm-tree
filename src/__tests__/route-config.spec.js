import React from 'react';
import {RouteConfig} from '../route-config';
import {shallow} from 'enzyme';

describe('RouteConfig', () => {
  const requiredProps = () => ({
  });

  const render = (props = requiredProps()) => shallow(<RouteConfig {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

import {AnonymousRoute} from '../anonymous-route';
import React from 'react';
import {shallow} from 'enzyme';

describe('AnonymousRoute', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<AnonymousRoute {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

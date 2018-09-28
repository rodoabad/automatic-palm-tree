import {Hello} from '../hello';
import React from 'react';
import {shallow} from 'enzyme';

describe('Hello', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<Hello {...props} />);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});


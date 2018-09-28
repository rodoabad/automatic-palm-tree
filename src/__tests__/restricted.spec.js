import React from 'react';
import {Restricted} from '../restricted';
import {shallow} from 'enzyme';

describe('Restricted', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<Restricted {...props} />);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});


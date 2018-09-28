import {Navigation} from '../navigation';
import React from 'react';
import {shallow} from 'enzyme';

describe('Navigation', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<Navigation {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

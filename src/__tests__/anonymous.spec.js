import {Anonymous} from '../anonymous';
import React from 'react';
import {shallow} from 'enzyme';

describe('Anonnymous', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<Anonymous {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});


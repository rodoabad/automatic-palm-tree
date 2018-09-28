import {PageContainer} from '../page-container';
import React from 'react';
import {shallow} from 'enzyme';

describe('PageContainer', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<PageContainer {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });
});

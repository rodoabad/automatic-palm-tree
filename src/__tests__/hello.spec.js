import ComponentToTest from '../hello';
import React from 'react';
import {shallow} from 'enzyme';

describe('Hello', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('component has a welcome message', () => {
    const wrapper = render().find('[data-test="hello"]');

    expect(wrapper.text()).toEqual('Hello, World!');
    expect(wrapper).toMatchSnapshot();
  });
});


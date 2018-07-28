import ComponentToTest from '../hello';
import Links from '../links';
import React from 'react';
import {
  shallow
} from 'enzyme';

describe('Hello', () => {

  const requiredProps = () => ({});
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {

    const wrapper = render();

    expect(wrapper).toMatchSnapshot();

  });

  test('component has links', () => {

    const wrapper = render().find(Links);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();

  });

  test('component has a welcome message', () => {

    const wrapper = render().find('[data-test="hello"]');

    expect(wrapper.text()).toEqual('Hello, world!');
    expect(wrapper).toMatchSnapshot();

  });

});


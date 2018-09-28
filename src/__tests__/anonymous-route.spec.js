import {Anonymous} from '../anonymous';
import {AnonymousRoute} from '../anonymous-route';
import React from 'react';
import {shallow} from 'enzyme';

describe('AnonymousRoute', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(
    <AnonymousRoute {...props} />
  );

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('parent props should propagate', () => {
    const props = {
      ...requiredProps(),
      test: 'test'
    };
    const wrapper = render(props).props().render();

    expect(wrapper.type).toEqual(Anonymous);
    expect(wrapper.props.test).toEqual('test');
  });
});

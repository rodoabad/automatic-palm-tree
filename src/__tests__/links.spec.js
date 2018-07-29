import ComponentToTest from '../links';
import {Link} from 'react-router-dom';
import React from 'react';
import {shallow} from 'enzyme';

describe('Links', () => {
  const requiredProps = () => ({
  });
  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('component has the correct links', () => {
    const expectedLinks = [
      {
        path: '/'
      },
      {
        path: '/anonymous'
      },
      {
        path: '/restricted-a'
      },
      {
        path: '/restricted-b'
      }
    ];

    const wrapper = render().find('[data-test="links"]').children();

    wrapper.forEach((children, index) => {
      const link = children.find(Link);

      expect(link.props().to).toEqual(expectedLinks[index].path);
      expect(link).toMatchSnapshot();
    });
    expect(wrapper).toMatchSnapshot();
  });
});


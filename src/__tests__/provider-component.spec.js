import ProviderComponentConnector from '../provider-component-connector';
import ProviderComponent from '../provider-component';
import React from 'react';
import { shallow } from 'enzyme';
import { mockReduxStore } from '../../helpers/mock-redux-store';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

describe('<ProviderComponentConnector/>', () => {

  const requiredProps = () => {
    return {
    };
  };

  const render = (props = requiredProps()) => {
    const mockStore = mockReduxStore(props);
    return shallow(
      <ProviderComponentConnector
        store={mockStore}
        test='test'
      />
    );
  };

  // it('should match the snapshot', () => {
  //   const component = render();

  //   expect(component).toMatchSnapshot();
  // });

  // it('should be a metrics summary', () => {
  //   const component = render();

  //   expect(component.props().test).toEqual('test');
  // });

  // it('should have a Router', () => {
  //   const component = render().find(Route);

  //   // console.log(component.props().children().props);

  //   // console.log(component.children());

  //   expect(component.length).toEqual(1);

  //   // expect(component.type).toEqual(ProviderComponentConnector);

  //   // expect(component.type()).toEqual(Route)
  // });

  it('should have connected the right component', () => {
    const component = render().find(Route);

    const component2 = component.props().children();

    const connectedComponent = shallow(component2);

    // expect(x.props().test).toEqual('test');
    expect(connectedComponent.type()).toEqual(ProviderComponent);
  });

});

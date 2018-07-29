import {BrowserRouter, Route} from 'react-router-dom';
import {ImplicitCallback, Security} from '@okta/okta-react';
import AnonymousRoute from '../anonymous-route';
import ComponentToTest from '../route-config';
import HelloRoute from '../hello-route';
import React from 'react';
import RestrictedRouteA from '../restricted-route-a';
import RestrictedRouteB from '../restricted-route-b';
import {shallow} from 'enzyme';

describe('RouteConfig', () => {
  const requiredProps = () => ({
  });

  const render = (props = requiredProps()) => shallow(<ComponentToTest {...props}/>);

  test('component renders', () => {
    const wrapper = render();

    expect(wrapper).toMatchSnapshot();
  });

  test('component to use browser history', () => {
    const wrapper = render();

    expect(wrapper.type()).toEqual(BrowserRouter);
    expect(wrapper).toMatchSnapshot();
  });

  test('routes have Okta security', () => {
    const expectedOktaConfig = {
      clientId: '0oaf3emz9n7G0xYA20h7',
      issuer: 'https://dev-689082.oktapreview.com/oauth2/default',
      path: '/implicit/callback',
      redirectUri: `${window.location.origin}/implicit/callback`
    };

    const wrapper = render().find(Security);

    expect(wrapper.props().client_id).toEqual(expectedOktaConfig.clientId);
    expect(wrapper.props().issuer).toEqual(expectedOktaConfig.issuer);
    expect(wrapper.props().redirect_uri).toEqual(expectedOktaConfig.redirectUri);
    expect(wrapper).toMatchSnapshot();

    const callbackWrapper = wrapper.find(Route);

    expect(callbackWrapper.props().component).toEqual(ImplicitCallback);
    expect(callbackWrapper.props().path).toEqual(expectedOktaConfig.path);
    expect(wrapper).toMatchSnapshot();
  });

  test('include HelloRoute', () => {
    const wrapper = render().find(Security).children(HelloRoute);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('include AnonymousRoute', () => {
    const wrapper = render().find(Security).children(AnonymousRoute);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('include RestrictedRouteA', () => {
    const wrapper = render().find(Security).children(RestrictedRouteA);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('include RestrictedRouteB', () => {
    const wrapper = render().find(Security).children(RestrictedRouteB);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});

import ProviderComponent from '../provider-component';
import React from 'react';
import {shallow} from 'enzyme';

describe('<ProviderComponent/>', () => {

    const requiredProps = () => {
        return {
        };
    };

    const render = (props = requiredProps()) => {
        return shallow(<ProviderComponent {...props}/>);
    };

    it('should match the snapshot', () => {
        const component = render();

        expect(component).toMatchSnapshot();
    });

    // it('should be a metrics summary', () => {
    //     const component = render();

    //     expect(component.type()).toEqual('div');
    //     expect(component.props().className).toEqual(metricsSummary);
    // });

});

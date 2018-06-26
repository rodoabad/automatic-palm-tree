import React, { Children, Component } from 'react';

class ProviderComponent extends Component {

  render() {

    const { children, ...otherProps } = this.props;

    console.log('providerComponent', this.props);
    console.log('otherProps', otherProps);

    const childWithProp = Children.map(children, (child) => {
      return React.cloneElement(child, { a: 'a', b: 'b', ...otherProps });
    });

    console.log('childWithProp', childWithProp);

    // return this.props.children;
    return childWithProp;
  }
}

export default ProviderComponent;

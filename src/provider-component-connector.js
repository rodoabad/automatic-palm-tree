import React from 'react';
import ProviderComponent from './provider-component';
import Anonymous from './anonymous';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  console.log('state', state);
  console.log('ownProps', ownProps);

  return {
    ...ownProps
  }
}

// export default withRouter(connect(mapStateToProps)(ProviderComponent));
export default connect(mapStateToProps)(ProviderComponent);

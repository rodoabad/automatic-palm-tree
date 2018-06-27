import ProviderComponent from './provider-component';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps)(ProviderComponent));

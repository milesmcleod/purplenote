import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSearchQuery
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setBarNavType: (type) => dispatch(receiveBarNavType(type)),
    setSearchQuery: (query) => dispatch(receiveSearchQuery(query))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));

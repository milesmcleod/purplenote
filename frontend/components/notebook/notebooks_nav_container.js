import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveBarNavType } from '../../actions/ui_actions';
import values from 'lodash/values';
import NotebooksNav from './notebooks_nav';

const mapStateToProps = (state, ownProps) => ({
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksNav);

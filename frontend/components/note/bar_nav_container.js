import { connect } from 'react-redux';
import BarNav from './bar_nav';
import {
  receiveBarNavType,
  receiveSelectedNote
 } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  receiveSelectedNote: (id) => dispatch(receiveSelectedNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav));

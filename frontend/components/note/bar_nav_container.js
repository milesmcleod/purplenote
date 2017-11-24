import { connect } from 'react-redux';
import BarNav from './bar_nav';
import {
  receiveBarNavType,
  receiveSelectedNote,
  enterFullscreen
 } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType,
  fullscreen: state.ui.fullscreen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  enterFullscreen: () => dispatch(enterFullscreen()),
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  receiveSelectedNote: (noteId) => {
    dispatch(receiveSelectedNote(noteId));
    ownProps.history.push(`/home&n=${(noteId) ? noteId : 'new'}`);
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav));

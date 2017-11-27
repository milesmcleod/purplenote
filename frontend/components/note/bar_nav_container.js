import { connect } from 'react-redux';
import BarNav from './bar_nav';
import {
  receiveBarNavType,
  receiveSelectedNotebook,
  receiveSelectedTag,
  enterFullscreen } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType,
  fullscreen: state.ui.fullscreen,
  selectedNotebook: state.ui.selectedNotebook,
  selectedTag: state.ui.selectedTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  enterFullscreen: () => dispatch(enterFullscreen()),
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  selectNotebook: (id) => dispatch(receiveSelectedNotebook(id)),
  selectTag: (id) => dispatch(receiveSelectedTag(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav));

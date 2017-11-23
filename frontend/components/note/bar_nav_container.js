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

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  receiveSelectedNote: (noteId) => {
    dispatch(receiveSelectedNote(noteId));
    // .then((response) => ownProps.history.push(`/home&n=${
    //   (noteId) ? noteId : 'new'
    // }`));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav));

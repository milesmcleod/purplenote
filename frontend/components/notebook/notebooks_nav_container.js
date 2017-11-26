import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSelectedNotebook
 } from '../../actions/ui_actions';
import values from 'lodash/values';
import NotebooksNav from './notebooks_nav';
import { deleteNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: values(state.entities.notebooks),
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType,
  selectedNotebook: state.ui.selectedNotebook
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  selectNotebook: (id) => {
    dispatch(receiveSelectedNotebook(id));
    dispatch(receiveBarNavType('notes'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksNav);

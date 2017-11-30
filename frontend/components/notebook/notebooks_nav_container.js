import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSelectedNotebook,
  enterNotebookDeletion,
  activateModal,
  deactivateModal
 } from '../../actions/ui_actions';
 import {
   postShortcut,
   patchShortcut
  } from '../../actions/shortcut_actions';
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
  enterNotebookDeletion: (id) => dispatch(enterNotebookDeletion(id)),
  postShortcut: (shortcut) => dispatch(postShortcut(shortcut)),
  patchShortcut: (shortcut) => dispatch(patchShortcut(shortcut)),
  selectNotebook: (id) => {
    dispatch(receiveSelectedNotebook(id));
    dispatch(receiveBarNavType('notes'));
  },
  activateModal: (modalType) => dispatch(activateModal(modalType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksNav);

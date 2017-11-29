import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import {
  exitNotebookDeletion,
  receiveSelectedNotebook
 } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

import DeleteNotebookModal from './delete_notebook_modal';

const mapStateToProps = (state) => {
  let title = "";
  if (state.ui.notebookDeletion) {
    title = state.entities.notebooks[state.ui.notebookDeletion].title;
  }
  return {
    selected: state.ui.selectedNotebook,
    active: state.ui.notebookDeletion,
    activeModal: state.ui.activeModal,
    default: state.session.currentUser.default_notebook_id,
    title
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  receiveSelectedNotebook: (id) => dispatch(receiveSelectedNotebook(id)),
  exitNotebookDeletion: () => dispatch(exitNotebookDeletion())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNotebookModal));

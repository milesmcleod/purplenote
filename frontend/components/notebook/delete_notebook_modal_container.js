import { connect } from 'react-redux';
import { deleteNotebook } from '../../actions/notebook_actions';
import { exitNotebookDeletion } from '../../actions/ui_actions';

import DeleteNotebookModal from './delete_notebook_modal';

const mapStateToProps = (state) => {
  let title = "";
  if (state.ui.notebookDeletion) {
    title = state.entities.notebooks[state.ui.notebookDeletion].title;
  }
  return {
    active: state.ui.notebookDeletion,
    title
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  exitNotebookDeletion: () =>dispatch(exitNotebookDeletion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNotebookModal);

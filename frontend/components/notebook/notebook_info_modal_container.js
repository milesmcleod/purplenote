import { connect } from 'react-redux';
import NotebookInfoModal from './notebook_info_modal';
import { patchNotebook } from '../../actions/notebook_actions';
import {enterNotebookDeletion } from '../../actions/ui_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const titles = [];
  values(state.entities.notebooks).forEach(notebook => titles.push(notebook.title));
  return {
    titles,
    notebook: state.entities.notebooks[state.ui.selectedNotebook]
  };
};

const mapDispatchToProps = (dispatch) => ({
  patchNotebook: (notebook) => dispatch(patchNotebook(notebook)),
  enterNotebookDeletion: (id) => dispatch(enterNotebookDeletion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookInfoModal);

import { connect } from 'react-redux';
import NewNotebookModal from './new_notebook_modal';
import { postNotebook } from '../../actions/notebook_actions';
import { deactivateModal } from '../../actions/ui_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const titles = [];
  values(state.entities.notebooks).forEach(notebook => titles.push(notebook.title));
  return {
    titles,
    activeModal: state.ui.activeModal
  };
};

const mapDispatchToProps = (dispatch) => ({
  postNotebook: (notebook) => dispatch(postNotebook(notebook)),
  deactivateModal: () => dispatch(deactivateModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotebookModal);

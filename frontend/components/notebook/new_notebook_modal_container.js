import { connect } from 'react-redux';
import NewNotebookModal from './new_notebook_modal';
import { postNotebook } from '../../actions/notebook_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const titles = [];
  values(state.entities.notebooks).forEach(notebook => titles.push(notebook.title));
  return {
    titles
  };
};

const mapDispatchToProps = (dispatch) => ({
  postNotebook: (notebook) => dispatch(postNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotebookModal);

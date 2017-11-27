import { connect } from 'react-redux';
import Home from './home';
import { fetchNotes } from '../actions/note_actions';
import { postNotebook } from '../actions/notebook_actions';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => ({
  barNavType: state.ui.barNavType,
  selectedNote: ownProps.match.params.noteId,
  notebooks: values(state.entities.notebooks),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  postNotebook: (notebook) => dispatch(postNotebook(notebook))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Home));

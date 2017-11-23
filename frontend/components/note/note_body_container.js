import { connect } from 'react-redux';
import NoteBody from './note_body';
import { postNote, updateNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  note: state.entities.notes[ownProps.match.params.noteId]
});

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  updateNote: (note) => dispatch(updateNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBody));

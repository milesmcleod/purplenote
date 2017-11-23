import { connect } from 'react-redux';
import NoteContent from './note_content';
import { postNote, patchNote, fetchNotes } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note
});

// perhaps this should be refactored. the note should actually either
// be state.entities.notes[state.ui.selectedNote] OR if that is null it
// should be null. this would hinge on finding some way to set the URL
// right when the note is saved the first time.

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note)),
  fetchNotes: (note) => dispatch(fetchNotes(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContent));

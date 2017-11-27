import { connect } from 'react-redux';
import NoteContent from './note_content';
import {
  postNote,
  patchNote,
  fetchNotes,
  deleteNote
 } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import {
  enterFullscreen,
  exitFullscreen
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    selectedNote: ownProps.match.params.noteId,
    fullscreen: state.ui.fullscreen,
    selectedNotebook: state.ui.selectedNotebook
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note)),
  fetchNotes: (note) => dispatch(fetchNotes(note)),
  enterFullscreen: () => dispatch(enterFullscreen()),
  exitFullscreen: () => dispatch(exitFullscreen())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContent));

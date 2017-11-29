import { connect } from 'react-redux';
import NoteContent from './note_content';
import {
  postNote,
  patchNote,
  fetchNotes,
  trashNote,
  deleteNote
 } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import {
  enterFullscreen,
  exitFullscreen
} from '../../actions/ui_actions';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    notebooks: values(state.entities.notebooks),
    selectedNote: ownProps.match.params.noteId,
    fullscreen: state.ui.fullscreen,
    selectedNotebook: state.ui.selectedNotebook,
    defaultNotebook: state.session.currentUser.default_notebook_id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
  trashNote: (id) => dispatch(trashNote(id)),
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

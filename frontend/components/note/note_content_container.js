import { connect } from 'react-redux';
import NoteContent from './note_content';
import { postNote, patchNote, fetchNotes } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import {
  exitFullscreen
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    selectedNote: ownProps.match.params.noteId
  };
};

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note)),
  fetchNotes: (note) => dispatch(fetchNotes(note)),
  exitFullscreen: () => dispatch(exitFullscreen())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContent));

import { connect } from 'react-redux';
import NoteHeader from './note_header';
import { withRouter } from 'react-router-dom';
import { deleteNote } from '../../actions/note_actions';
import {
  enterFullscreen,
  exitFullscreen
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  selectedNote: ownProps.match.params.noteId,
  fullscreen: state.ui.fullscreen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
  enterFullscreen: () => dispatch(enterFullscreen()),
  exitFullscreen: () => dispatch(exitFullscreen())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteHeader));

import { connect } from 'react-redux';
import NoteBody from './note_body';
import { postNote, patchNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[state.ui.selectedNote]
  };
};

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBody));

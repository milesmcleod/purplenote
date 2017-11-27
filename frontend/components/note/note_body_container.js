import { connect } from 'react-redux';
import NoteBody from './note_body';
import { postNote, patchNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.match.params.noteId) {
    return {
      note: undefined
    };
  } else if (ownProps.match.params.noteId !== 'new') {
    return {
      note: state.entities.notes[ownProps.match.params.noteId]
    };
  } else {
    return {
      note: 'new',
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteBody));

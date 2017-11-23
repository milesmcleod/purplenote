import { connect } from 'react-redux';
import NoteContent from './note_content';
import { postNote, patchNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note
});

const mapDispatchToProps = (dispatch) => ({
  postNote: (note) => dispatch(postNote(note)),
  patchNote: (note) => dispatch(patchNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContent);

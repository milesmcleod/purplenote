import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import { receiveSelectedNote } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType,
  selectedNote: state.ui.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
  receiveSelectedNote: (noteId) => dispatch(receiveSelectedNote(noteId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

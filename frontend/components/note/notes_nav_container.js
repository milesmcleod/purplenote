import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import { receiveNoteSortType } from '../../actions/ui_actions';
import { deleteNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType,
  selectedNote: ownProps.match.params.noteId,
  noteSortType: state.ui.noteSortType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType)),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

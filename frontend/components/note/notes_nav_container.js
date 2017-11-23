import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import {
  receiveSelectedNote,
  receiveNoteSortType
} from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType,
  selectedNote: state.ui.selectedNote,
  noteSortType: state.ui.noteSortType
});

const mapDispatchToProps = (dispatch) => ({
  receiveSelectedNote: (noteId) => dispatch(receiveSelectedNote(noteId)),
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

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

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSelectedNote: (noteId) => {
    dispatch(receiveSelectedNote(noteId));
    ownProps.history.push(`/home&n=${(noteId) ? noteId : 'new'}`);
  },
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import { receiveNoteSortType } from '../../actions/ui_actions';
import {
  trashNote,
  deleteNote
 } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes;
  if (state.ui.selectedNotebook === -1) {
    notes = values(state.entities.notes).filter(note => (
      note.trashBoolean === true
    ));
  }
  else if (!state.ui.selectedNotebook) {
    notes = values(state.entities.notes).filter(note => (
      note.trashBoolean === false
    ));
  } else {
    notes = values(state.entities.notes).filter(note => (
      note.notebookId === state.ui.selectedNotebook &&
      note.trashBoolean === false
    ));
  }
  return {
    notes,
    barNavType: state.ui.barNavType,
    selectedNote: ownProps.match.params.noteId,
    noteSortType: state.ui.noteSortType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType)),
  trashNote: (note) => dispatch(trashNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

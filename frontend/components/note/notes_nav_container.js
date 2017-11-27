import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import { receiveNoteSortType } from '../../actions/ui_actions';
import {
  trashNote,
  deleteNote,
  restoreNote
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
      note.notebook_id === state.ui.selectedNotebook &&
      note.trashBoolean === false
    ));
  }
  return {
    notes,
    barNavType: state.ui.barNavType,
    selectedNote: ownProps.match.params.noteId,
    selectedNotebook: state.ui.selectedNotebook,
    selectedNotebookTitle: (
      state.ui.selectedNotebook &&
      state.ui.selectedNotebook > -1 &&
      state.entities.notebooks[state.ui.selectedNotebook]
    ) ? (
      state.entities.notebooks[state.ui.selectedNotebook].title
    ) : (
      undefined
    ),
    noteSortType: state.ui.noteSortType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType)),
  trashNote: (note) => dispatch(trashNote(note)),
  restoreNote: (note) => dispatch(restoreNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  emptyTrash: (e, notes) => {
    e.preventDefault();
    notes.forEach(note => {
      dispatch(deleteNote(note.id));
    });
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav));

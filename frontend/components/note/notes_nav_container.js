import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';
import { receiveNoteSortType, activateModal } from '../../actions/ui_actions';
import {
  trashNote,
  deleteNote,
  patchNote,
  restoreNote
} from '../../actions/note_actions';
import {
  postShortcut,
  patchShortcut
 } from '../../actions/shortcut_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let notes;
  if (state.ui.searchQuery) {
    notes = values(state.entities.notes).filter(note => (
      note.title.toLowerCase().match(state.ui.searchQuery.toLowerCase()) ||
      (note.content && note.content.toLowerCase().match(state.ui.searchQuery.toLowerCase()))
    ));
  } else if (state.ui.selectedTag) {
    notes = values(state.entities.notes).filter(note => (
      note.tagIds.includes(state.ui.selectedTag) &&
      note.trashBoolean === false
    ));
  } else if (state.ui.selectedNotebook === -1) {
    notes = values(state.entities.notes).filter(note => (
      note.trashBoolean === true
    ));
  } else if (!state.ui.selectedNotebook) {
    notes = values(state.entities.notes).filter(note => (
      note.trashBoolean === false
    ));
  } else {
    notes = values(state.entities.notes).filter(note => (
      note.notebook_id === state.ui.selectedNotebook &&
      note.trashBoolean === false
    ));
  }
  const noteShortcuts = values(state.entities.shortcuts).filter(s => s.type === 'Note');
  let shortcutNoteIds = [];
  noteShortcuts.forEach(s => shortcutNoteIds.push(s.shortcut_element_id));
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
    selectedTag: state.ui.selectedTag,
    selectedTagTitle: (state.ui.selectedTag && state.entities.tags[state.ui.selectedTag]) ? (
      state.entities.tags[state.ui.selectedTag].title
    ) : (
      undefined
    ),
    noteSortType: state.ui.noteSortType,
    fullscreen: state.ui.fullscreen,
    shortcutNoteIds,
    searchQuery: state.ui.searchQuery
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNoteSortType: (sortType) => dispatch(receiveNoteSortType(sortType)),
  trashNote: (note) => dispatch(trashNote(note)),
  postShortcut: (shortcut) => dispatch(postShortcut(shortcut)),
  patchShortcut: (shortcut) => dispatch(patchShortcut(shortcut)),
  patchNote: (note) => dispatch(patchNote(note)),
  restoreNote: (note) => dispatch(restoreNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  activateModal: (modalType) => dispatch(activateModal(modalType)),
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

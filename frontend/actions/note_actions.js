import * as NotesAPIUtil from '../util/notes_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";

const receiveNote = (payload) => ({
  type: RECEIVE_NOTE,
  payload
});
const receiveNotes = (payload) => ({
  type: RECEIVE_NOTES,
  payload
});

const removeNote = (payload) => ({
  type: REMOVE_NOTE,
  payload
});

export const fetchNotes = () => (dispatch) => {
  return NotesAPIUtil.fetchNotes()
  .then(response => dispatch(receiveNotes(response)));
};

export const postNote = (note) => (dispatch) => {
  return NotesAPIUtil.postNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const patchNote = (note) => (dispatch) => {
  return NotesAPIUtil.patchNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const trashNote = (note) => (dispatch) => {
  note.trashBoolean = true;
  return NotesAPIUtil.patchNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const restoreNote = (note) => (dispatch) => {
  note.trashBoolean = false;
  return NotesAPIUtil.patchNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const deleteNote = (id) => (dispatch) => {
  return NotesAPIUtil.deleteNote(id)
  .then(response => dispatch(removeNote(response)));
};

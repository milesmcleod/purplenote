import * as NoteAPIUtil from '../util/notes_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

const receiveNote = (payload) => ({
  type: RECEIVE_NOTE,
  payload
});

const removeNote = (payload) => ({
  type: REMOVE_NOTE,
  payload
});

export const postNote = (note) => (dispatch) => {
  return NoteAPIUtil.postNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const patchNote = (note) => (dispatch) => {
  return NoteAPIUtil.patchNote(note)
  .then(response => dispatch(receiveNote(response)));
};

export const deleteNote = (id) => (dispatch) => {
  return NoteAPIUtil.deleteNote(id)
  .then(response => dispatch(removeNote(response)));
};

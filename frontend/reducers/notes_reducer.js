import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';
import {
  RECEIVE_NOTE,
  RECEIVE_NOTES,
  REMOVE_NOTE
} from '../actions/note_actions';
import {
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import {
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';
import merge from 'lodash/merge';
import values from 'lodash/values';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTES:
    case RECEIVE_USER:
      newState = merge({}, state, action.payload.notes);
      return newState;
    case RECEIVE_NOTE:
      newState = merge({}, state);
      newState[action.payload.id] = merge({}, action.payload);
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case REMOVE_NOTEBOOK:
      newState = {};
      let notes = values(state);
      notes.forEach(note => {
        if (note.notebook_id !== action.payload.id) {
          newState[note.id] = note;
        }
      });
      return newState;
    case RECEIVE_TAGGING:
      newState = merge({}, state);
      let newIds = [action.payload.tagId];
      newState[action.payload.noteId].tagIds.forEach(id => {
        if (id !== action.payload.tagId) {
          newIds.push(id);
        }
      });
      newState[action.payload.noteId].tagIds = newIds;
      return newState;
    case REMOVE_TAGGING:
      newState = merge({}, state);
      let note = newState[action.payload.noteId];
      newIds = [];
      note.tagIds.forEach(id => {
        if (id !== action.payload.tagId) {
          newIds.push(id);
        }
      });
      newState[action.payload.noteId].tagIds = newIds;
      return newState;
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }
};

export default NotesReducer;

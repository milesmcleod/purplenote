import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';
import {
  RECEIVE_SHORTCUT,
  REMOVE_SHORTCUT
} from '../actions/shortcut_actions';
import {
  RECEIVE_NOTES
} from '../actions/note_actions';
import merge from 'lodash/merge';

const ShortcutsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTES:
    case RECEIVE_USER:
      newState = merge({}, state, action.payload.shortcuts);
      return newState;
    case RECEIVE_SHORTCUT:
      newState = merge({}, state);
      newState[action.payload.id] = merge({}, action.payload);
      return newState;
    case REMOVE_SHORTCUT:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }
};

export default ShortcutsReducer;

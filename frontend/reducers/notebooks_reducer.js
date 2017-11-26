import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';
import {
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import {
  RECEIVE_NOTES
} from '../actions/note_actions';
import merge from 'lodash/merge';

const NotebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
    case RECEIVE_NOTES:
    case RECEIVE_USER:
      newState = merge({}, state, action.payload.notebooks);
      return newState;
    case RECEIVE_NOTEBOOK:
      newState = merge({}, state);
      newState[action.payload.id] = merge({}, action.payload);
      return newState;
    case REMOVE_NOTEBOOK:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }
};

export default NotebooksReducer;

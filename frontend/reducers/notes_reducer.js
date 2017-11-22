import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';
import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.payload.notes);
      return newState;
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }

};

export default NotesReducer;

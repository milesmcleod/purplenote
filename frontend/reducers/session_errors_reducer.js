import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER,
  CLEAR_SESSION_ERRORS,
  REMOVE_SESSION
 } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      const newState = Object.assign([], action.errors.responseJSON);
      return newState;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_USER:
      return [];
    case REMOVE_SESSION:
      return [];
    default:
      return state;
  }
};

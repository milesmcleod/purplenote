import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER
 } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      const newState = Object.assign([], action.errors.responseJSON);
      return newState;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

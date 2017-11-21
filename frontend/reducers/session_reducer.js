import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';

const defaultState = {
  currentUser: null
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      return { currentUser: action.payload.currentUser };
    case REMOVE_SESSION:
      return defaultState;
    default:
      return state;
  }
};


export default SessionReducer;

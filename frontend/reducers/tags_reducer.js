import {
  RECEIVE_USER,
  REMOVE_SESSION
} from '../actions/session_actions';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';
import {
  RECEIVE_NOTES
} from '../actions/note_actions';
import merge from 'lodash/merge';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTES:
    case RECEIVE_TAGS:
    case RECEIVE_USER:
      newState = merge({}, state, action.payload.tags);
      return newState;
    case RECEIVE_TAG:
      newState = merge({}, state);
      newState[action.payload.id] = merge({}, action.payload);
      return newState;
    case REMOVE_TAG:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }
};

export default TagsReducer;

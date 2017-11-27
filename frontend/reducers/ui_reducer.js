import {
  RECEIVE_BAR_NAV_TYPE,
  RECEIVE_SPLASH_NAV_TYPE,
  RECEIVE_NOTE_SORT_TYPE,
  RECEIVE_SELECTED_NOTEBOOK,
  ENTER_NOTEBOOK_DELETION,
  EXIT_NOTEBOOK_DELETION,
  ENTER_FULLSCREEN,
  EXIT_FULLSCREEN
} from '../actions/ui_actions';
import {
  RECEIVE_NOTE
} from '../actions/note_actions';
import merge from 'lodash/merge';

// const combineReducers({
//   splashNavType: SplashNavTypeReducer,
//   barNavType: BarNavTypeReducer
// });

const defaultState = {
  splashNavType: 'regular',
  barNavType: 'notes',
  selectedNote: undefined,
  selectedNotebook: undefined,
  noteSortType: ['updatedAt', true],
  fullscreen: false,
  notebookDeletion : false,
  notebookEditing: false
};

const UIReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SPLASH_NAV_TYPE:
      newState = merge({}, state);
      newState['splashNavType'] = action.splashNavType;
      return newState;
    case RECEIVE_BAR_NAV_TYPE:
      newState = merge({}, state);
      newState['barNavType'] = action.barNavType;
      return newState;
    case RECEIVE_NOTE_SORT_TYPE:
      newState = merge({}, state);
      newState['noteSortType'] = action.noteSortType;
      return newState;
    case RECEIVE_NOTE:
      newState = merge({}, state);
      newState['selectedNote'] = action.payload.id;
      return newState;
    case RECEIVE_SELECTED_NOTEBOOK:
      newState = merge({}, state);
      newState['selectedNotebook'] = action.notebookId;
      return newState;
    case ENTER_NOTEBOOK_DELETION:
      newState = merge({}, state);
      newState['notebookDeletion'] = action.notebookId;
      return newState;
    case EXIT_NOTEBOOK_DELETION:
      newState = merge({}, state);
      newState['notebookDeletion'] = true;
      return newState;
    case ENTER_FULLSCREEN:
      newState = merge({}, state);
      newState['fullscreen'] = true;
      return newState;
    case EXIT_FULLSCREEN:
      newState = merge({}, state);
      newState['fullscreen'] = false;
      return newState;
    default:
      return state;
  }
}
;

export default UIReducer;

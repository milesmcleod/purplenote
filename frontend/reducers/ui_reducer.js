import {
  RECEIVE_BAR_NAV_TYPE,
  RECEIVE_SPLASH_NAV_TYPE,
  RECEIVE_NOTE_SORT_TYPE,
  RECEIVE_SELECTED_NOTEBOOK,
  ENTER_NOTEBOOK_DELETION,
  EXIT_NOTEBOOK_DELETION,
  RECEIVE_SELECTED_TAG,
  ENTER_TAG_DELETION,
  EXIT_TAG_DELETION,
  ENTER_FULLSCREEN,
  EXIT_FULLSCREEN,
  ACTIVATE_MODAL,
  DEACTIVATE_MODAL
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
  selectedTag: undefined,
  noteSortType: ['updatedAt', true],
  fullscreen: undefined,
  notebookDeletion: undefined,
  tagDeletion: undefined,
  activeModal: undefined
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
      newState['selectedTag'] = undefined;
      newState['selectedNotebook'] = action.notebookId;
      return newState;
    case ENTER_NOTEBOOK_DELETION:
      newState = merge({}, state);
      newState['notebookDeletion'] = action.notebookId;
      newState['activeModal'] = 'deleteNotebook';
      return newState;
    case EXIT_NOTEBOOK_DELETION:
      newState = merge({}, state);
      newState['notebookDeletion'] = undefined;
      newState['activeModal'] = undefined;
      return newState;
    case RECEIVE_SELECTED_TAG:
      newState = merge({}, state);
      newState['selectedNotebook'] = undefined;
      newState['selectedTag'] = action.tagId;
      return newState;
    case ENTER_TAG_DELETION:
      newState = merge({}, state);
      newState['tagDeletion'] = action.tagId;
      return newState;
    case EXIT_TAG_DELETION:
      newState = merge({}, state);
      newState['tagDeletion'] = undefined;
      return newState;
    case ENTER_FULLSCREEN:
      newState = merge({}, state);
      newState['fullscreen'] = true;
      return newState;
    case EXIT_FULLSCREEN:
      newState = merge({}, state);
      newState['fullscreen'] = undefined;
      return newState;
    case ACTIVATE_MODAL:
      newState = merge({}, state);
      newState['activeModal'] = action.modalType;
      return newState;
    case DEACTIVATE_MODAL:
      newState = merge({}, state);
      newState['activeModal'] = undefined;
      return newState;
    default:
      return state;
  }
}
;

export default UIReducer;

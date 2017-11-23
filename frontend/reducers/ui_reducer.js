import {
  RECEIVE_BAR_NAV_TYPE,
  RECEIVE_SPLASH_NAV_TYPE,
  RECEIVE_SELECTED_NOTE
} from '../actions/ui_actions';
import merge from 'lodash/merge';

// const combineReducers({
//   splashNavType: SplashNavTypeReducer,
//   barNavType: BarNavTypeReducer
// });

const defaultState = {
  splashNavType: 'regular',
  barNavType: 'notes',
  selectedNote: undefined
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
    case RECEIVE_SELECTED_NOTE:
      newState = merge({}, state);
      newState['selectedNote'] = action.noteId;
      return newState;
    default:
      return state;
  }
}
;

export default UIReducer;

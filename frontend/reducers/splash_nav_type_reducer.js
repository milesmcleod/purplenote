import {
  RECEIVE_SPLASH_NAV_TYPE,
  receiveSplashNavType } from '../actions/ui_actions';
import merge from 'lodash/merge';

const SplashNavTypeReducer = (state = 'regular', action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SPLASH_NAV_TYPE:
      newState = action.splashNavType;
      return newState;
    default:
      return state;
  }
};

export default SplashNavTypeReducer;

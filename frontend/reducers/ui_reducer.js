import { combineReducers } from 'redux';
import SplashNavTypeReducer from './splash_nav_type_reducer';

export default combineReducers({
  splashNavType: SplashNavTypeReducer
});

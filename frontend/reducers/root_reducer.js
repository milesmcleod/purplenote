// root_reducer.js
import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

const rootReducer = combineReducers({
  ui: UIReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default rootReducer;

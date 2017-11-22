// root_reducer.js
import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: EntitiesReducer,
  ui: UIReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default rootReducer;

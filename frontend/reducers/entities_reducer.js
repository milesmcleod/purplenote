import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';

export default combineReducers({
  notes: NotesReducer
});

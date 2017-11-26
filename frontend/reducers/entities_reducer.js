import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';
import NotebooksReducer from './notebooks_reducer';

export default combineReducers({
  notes: NotesReducer,
  notebooks: NotebooksReducer
});

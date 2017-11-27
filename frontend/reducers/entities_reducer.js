import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';
import NotebooksReducer from './notebooks_reducer';
import TagsReducer from './tags_reducer';

export default combineReducers({
  notes: NotesReducer,
  notebooks: NotebooksReducer,
  tags: TagsReducer
});

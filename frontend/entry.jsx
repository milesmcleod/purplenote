// entry.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
  postUser,
  postSession,
  deleteSession
} from './actions/session_actions';
import {
  postNote,
  patchNote,
  deleteNote
} from './actions/note_actions';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: window.currentUser
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.postNote = postNote;
  window.patchNote = patchNote;
  window.deleteNote = deleteNote;
  window.getState= store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

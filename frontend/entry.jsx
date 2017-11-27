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
import {
  fetchNotebooks,
  postNotebook,
  patchNotebook,
  deleteNotebook
} from './actions/notebook_actions';
import {
  fetchTags,
  postTag,
  patchTag,
  deleteTag
} from './actions/tag_actions';
import {
  postTagging,
  deleteTagging
} from './actions/tagging_actions';

import {
  enterFullscreen,
  exitFullscreen
 } from './actions/ui_actions';

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
  window.enterFullscreen = enterFullscreen;
  window.exitFullscreen = exitFullscreen;
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.postNote = postNote;
  window.patchNote = patchNote;
  window.deleteNote = deleteNote;
  window.fetchNotebooks =fetchNotebooks;
  window.postNotebook = postNotebook;
  window.patchNotebook = patchNotebook;
  window.deleteNotebook = deleteNotebook;
  window.fetchTags =fetchTags;
  window.postTag = postTag;
  window.patchTag = patchTag;
  window.deleteTag = deleteTag;
  window.postTagging = postTagging;
  window.deleteTagging = deleteTagging;
  window.getState= store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

export const RECEIVE_SPLASH_NAV_TYPE = 'RECEIVE_SPLASH_NAV_TYPE';
export const RECEIVE_BAR_NAV_TYPE = 'RECEIVE_BAR_NAV_TYPE';
export const RECEIVE_NOTE_SORT_TYPE = 'RECEIVE_NOTE_SORT_TYPE';
export const RECEIVE_SELECTED_NOTEBOOK = 'RECEIVE_SELECTED_NOTEBOOK';
export const ENTER_NOTEBOOK_DELETION = 'ENTER_NOTEBOOK_DELETION';
export const EXIT_NOTEBOOK_DELETION = 'EXIT_NOTEBOOK_DELETION';
export const RECEIVE_SELECTED_TAG = 'RECEIVE_SELECTED_TAG';
export const ENTER_TAG_DELETION = 'ENTER_TAG_DELETION';
export const EXIT_TAG_DELETION = 'EXIT_TAG_DELETION';
export const ENTER_FULLSCREEN = 'ENTER_FULLSCREEN';
export const EXIT_FULLSCREEN = 'EXIT_FULLSCREEN';
export const ACTIVATE_MODAL = 'ACTIVATE_MODAL';
export const DEACTIVATE_MODAL = 'DEACTIVATE_MODAL';
export const RECEIVE_SEARCH_QUERY = 'RECEIVE_SEARCH_QUERY';

export const receiveSplashNavType = (splashNavType) => ({
  type: RECEIVE_SPLASH_NAV_TYPE,
  splashNavType
});

export const receiveBarNavType = (barNavType) => ({
  type: RECEIVE_BAR_NAV_TYPE,
  barNavType
});

export const receiveNoteSortType = (noteSortType) => ({
  type: RECEIVE_NOTE_SORT_TYPE,
  noteSortType
});

export const receiveSelectedNotebook = (notebookId) => ({
  type: RECEIVE_SELECTED_NOTEBOOK,
  notebookId
});

export const enterNotebookDeletion = (notebookId) => {
  return {
    type: ENTER_NOTEBOOK_DELETION,
    notebookId
  };
};

export const exitNotebookDeletion = () => {
  return {
    type: EXIT_NOTEBOOK_DELETION
  };
};

export const receiveSelectedTag = (tagId) => ({
  type: RECEIVE_SELECTED_TAG,
  tagId
});

export const enterTagDeletion = (tagId) => {
  return {
    type: ENTER_TAG_DELETION,
    tagId
  };
};

export const exitTagDeletion = () => {
  return {
    type: ENTER_TAG_DELETION
  };
};

export const enterFullscreen = () => {
  const nav = document.getElementsByClassName("side-bar")[0];
  const note = document.getElementsByClassName("note-body")[0];
  const noteOptions = document.getElementsByClassName("note-options")[0];
  nav.classList.add("side-bar-hidden");
  note.classList.add("full-screen");
  noteOptions.classList.add("note-options-slide");
  return {
    type: ENTER_FULLSCREEN
  };
};

export const exitFullscreen = () => {
  const nav = document.getElementsByClassName("side-bar")[0];
  const note = document.getElementsByClassName("note-body")[0];
  const noteOptions = document.getElementsByClassName("note-options")[0];
  nav.classList.add("side-bar-show");
  window.setTimeout(() => nav.classList.remove("side-bar-hidden"), 200);
  window.setTimeout(() => nav.classList.remove("side-bar-show"), 300);
  window.setTimeout(() => noteOptions.classList.remove("note-options-slide"), 400);
  note.classList.remove("full-screen");
  return {
    type: EXIT_FULLSCREEN
  };
};

export const activateModal = (modalType) => ({
  type: ACTIVATE_MODAL,
  modalType
});

export const deactivateModal = () => ({
  type: DEACTIVATE_MODAL
});

export const receiveSearchQuery = (query) => ({
  type: RECEIVE_SEARCH_QUERY,
  query
});

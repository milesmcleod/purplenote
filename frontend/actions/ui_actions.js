export const RECEIVE_SPLASH_NAV_TYPE = 'RECEIVE_SPLASH_NAV_TYPE';
export const RECEIVE_BAR_NAV_TYPE = 'RECEIVE_BAR_NAV_TYPE';
export const RECEIVE_SELECTED_NOTE = 'RECEIVE_SELECTED_NOTE';
export const RECEIVE_NOTE_SORT_TYPE = 'RECEIVE_NOTE_SORT_TYPE';
export const ENTER_FULLSCREEN = 'ENTER_FULLSCREEN';
export const EXIT_FULLSCREEN = 'EXIT_FULLSCREEN';

export const receiveSplashNavType = (splashNavType) => ({
  type: RECEIVE_SPLASH_NAV_TYPE,
  splashNavType
});

export const receiveBarNavType = (barNavType) => ({
  type: RECEIVE_BAR_NAV_TYPE,
  barNavType
});

export const receiveSelectedNote = (noteId) => ({
  type: RECEIVE_SELECTED_NOTE,
  noteId
});

export const receiveNoteSortType = (noteSortType) => ({
  type: RECEIVE_NOTE_SORT_TYPE,
  noteSortType
});

export const enterFullscreen = () => {
  const nav = document.getElementsByClassName("side-bar")[0];
  const note = document.getElementsByClassName("note-body")[0];
  nav.classList.add("side-bar-hidden");
  note.classList.add("full-screen");
  return {
    type: ENTER_FULLSCREEN
  };
};

export const exitFullscreen = () => {
  const nav = document.getElementsByClassName("side-bar")[0];
  const note = document.getElementsByClassName("note-body")[0];
  nav.classList.add("side-bar-show");
  window.setTimeout(() => nav.classList.remove("side-bar-hidden"), 200);
  window.setTimeout(() => nav.classList.remove("side-bar-show"), 300);
  note.classList.remove("full-screen");
  return {
    type: EXIT_FULLSCREEN
  };
};

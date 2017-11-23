export const RECEIVE_SPLASH_NAV_TYPE = 'RECEIVE_SPLASH_NAV_TYPE';
export const RECEIVE_BAR_NAV_TYPE = 'RECEIVE_BAR_NAV_TYPE';
export const RECEIVE_SELECTED_NOTE = 'RECEIVE_SELECTED_NOTE';
export const RECEIVE_NOTE_SORT_TYPE = 'RECEIVE_NOTE_SORT_TYPE';

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

import * as ShortcutAPIUtil from '../util/shortcut_api_util';

export const RECEIVE_SHORTCUT = "RECEIVE_SHORTCUT";
export const REMOVE_SHORTCUT = "REMOVE_SHORTCUT";

const receiveShortcut = (payload) => ({
  type: RECEIVE_SHORTCUT,
  payload
});

const removeShortcut = (payload) => ({
  type: REMOVE_SHORTCUT,
  payload
});


export const postShortcut = (shortcut) => (dispatch) => {
  return ShortcutAPIUtil.postShortcut(shortcut)
  .then(response => dispatch(receiveShortcut(response)));
};

export const patchShortcut = (shortcut) => (dispatch) => {
  return ShortcutAPIUtil.patchShortcut(shortcut)
  .then(response => dispatch(removeShortcut(response)));
};

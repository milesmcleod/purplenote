import * as NotebooksAPIUtil from '../util/notebooks_api_util';

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

const receiveNotebook = (payload) => ({
  type: RECEIVE_NOTEBOOK,
  payload
});
const receiveNotebooks = (payload) => ({
  type: RECEIVE_NOTEBOOKS,
  payload
});

const removeNotebook = (payload) => ({
  type: REMOVE_NOTEBOOK,
  payload
});

export const fetchNotebooks = () => (dispatch) => {
  return NotebooksAPIUtil.fetchNotebooks()
  .then(response => dispatch(receiveNotebooks(response)));
};

export const postNotebook = (notebook) => (dispatch) => {
  return NotebooksAPIUtil.postNotebook(notebook)
  .then(response => dispatch(receiveNotebook(response)));
};

export const patchNotebook = (notebook) => (dispatch) => {
  return NotebooksAPIUtil.patchNotebook(notebook)
  .then(response => dispatch(receiveNotebook(response)));
};

export const deleteNotebook = (id) => (dispatch) => {
  return NotebooksAPIUtil.deleteNotebook(id)
  .then(response => dispatch(removeNotebook(response)));
};

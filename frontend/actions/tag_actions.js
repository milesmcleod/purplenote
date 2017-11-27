import * as TagsAPIUtil from '../util/tags_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";

const receiveTag = (payload) => ({
  type: RECEIVE_TAG,
  payload
});
const receiveTags = (payload) => ({
  type: RECEIVE_TAGS,
  payload
});

const removeTag = (payload) => ({
  type: REMOVE_TAG,
  payload
});

export const fetchTags = () => (dispatch) => {
  return TagsAPIUtil.fetchTags()
  .then(response => dispatch(receiveTags(response)));
};

export const postTag = (tag) => (dispatch) => {
  return TagsAPIUtil.postTag(tag)
  .then(response => dispatch(receiveTag(response)));
};

export const patchTag = (tag) => (dispatch) => {
  return TagsAPIUtil.patchTag(tag)
  .then(response => dispatch(receiveTag(response)));
};

export const deleteTag = (id) => (dispatch) => {
  return TagsAPIUtil.deleteTag(id)
  .then(response => dispatch(removeTag(response)));
};

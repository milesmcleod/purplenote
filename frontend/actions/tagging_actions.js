import * as TaggingsAPIUtil from '../util/taggings_api_util';

export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

const receiveTagging = (payload) => ({
  type: RECEIVE_TAGGING,
  payload
});

const removeTagging = (payload) => ({
  type: REMOVE_TAGGING,
  payload
});

export const postTagging = (tagging) => (dispatch) => {
  return TaggingsAPIUtil.postTagging(tagging)
  .then(response => dispatch(receiveTagging(response)));
};

export const deleteTagging = (tagging) => (dispatch) => {
  return TaggingsAPIUtil.deleteTagging(tagging)
  .then(response => dispatch(removeTagging(response)));
};

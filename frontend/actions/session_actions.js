import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
});

const removeSession = () => ({
  type: REMOVE_SESSION
});

export const postUser = (user) => (dispatch) => {
  return SessionAPIUtil.postUser(user)
    .then(response => dispatch(receiveUser(response)));
};

export const postSession = (user) => (dispatch) => {
  return SessionAPIUtil.postSession(user)
    .then(response => dispatch(receiveUser(response)));
};

export const deleteSession = () => (dispatch) => {
  return SessionAPIUtil.deleteSession()
  .then(response => dispatch(removeSession(response)));
};

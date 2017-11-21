import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
});

const removeSession = () => ({
  type: REMOVE_SESSION
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const postUser = (user) => (dispatch) => {
  return SessionAPIUtil.postUser(user)
    .then(
      response => dispatch(receiveUser(response)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const postSession = (user) => (dispatch) => {
  return SessionAPIUtil.postSession(user)
  .then(
    response => dispatch(receiveUser(response)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const deleteSession = () => (dispatch) => {
  return SessionAPIUtil.deleteSession()
  .then(
    response => dispatch(removeSession(response)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

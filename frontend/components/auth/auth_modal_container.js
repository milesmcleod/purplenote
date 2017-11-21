import AuthModal from './auth_modal';
import {
  postUser,
  postSession,
  clearSessionErrors
} from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let formType = 'login';
  if (ownProps.match.path === '/signup') {
    formType = 'signup';
  }
  return {
    sessionErrors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let post = postSession;
  if (ownProps.match.path === '/signup') {
    post = postUser;
  }
  return {
    post: (user) => dispatch(post(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal));

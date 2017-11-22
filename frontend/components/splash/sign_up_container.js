import { connect } from 'react-redux';
import {
  postUser,
  postSession,
  clearSessionErrors
} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SignUp from './sign_up';

const mapStateToProps = (state) => ({
  sessionErrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user)),
  postSession: (user) => dispatch(postSession(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp));

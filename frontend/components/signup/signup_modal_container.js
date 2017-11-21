import SignUpModal from './signup_modal';
import { postUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  sessionErrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal));

import LogInModal from './login_modal';
import { postSession } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  sessionErrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  postSession: (user) => dispatch(postSession(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInModal));

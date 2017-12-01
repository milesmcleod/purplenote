import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import LogoutButton from './logout_button';

const mapStateToProps = (state) => ({
  userName: state.session.currentUser.username
});

const mapDispatchToProps = (dispatch) => ({
  deleteSession: () => dispatch(deleteSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);

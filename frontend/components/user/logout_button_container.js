import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import LogoutButton from './logout_button';

const mapDispatchToProps = (dispatch) => ({
  deleteSession: () => dispatch(deleteSession())
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);

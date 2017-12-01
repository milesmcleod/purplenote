import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import UserImage from './user_image';

const mapStateToProps = (state) => ({
  url: state.session.currentUser.img_url
});

export default connect(
  mapStateToProps,
  null
)(UserImage);

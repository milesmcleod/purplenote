import { connect } from 'react-redux';
import { receiveSplashNavType } from '../../actions/ui_actions';
import SplashNav from './splash_nav';

const mapStateToProps = (state) => ({
  splashNavType: state.ui.splashNavType
});

const mapDispatchToProps = (dispatch) => ({
  receiveSplashNavType: (type) => dispatch(receiveSplashNavType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashNav);

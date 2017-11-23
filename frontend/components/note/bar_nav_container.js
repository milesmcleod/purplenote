import { connect } from 'react-redux';
import BarNav from './bar_nav';
import { receiveBarNavType } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav));

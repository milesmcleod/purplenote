import { connect } from 'react-redux';
import BarNav from './bar_nav';
import { receiveBarNavType } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarNav);

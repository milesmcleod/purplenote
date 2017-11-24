import { connect } from 'react-redux';
import SideBar from './side_bar';
import { receiveBarNavType } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType,
});

const mapDispatchToProps = (dispatch) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

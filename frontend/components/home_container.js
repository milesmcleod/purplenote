import { connect } from 'react-redux';
import Home from './home';
import { fetchNotes } from '../actions/note_actions';

const mapStateToProps = (state) => ({
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);

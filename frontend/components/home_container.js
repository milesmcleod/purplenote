import { connect } from 'react-redux';
import Home from './home';
import { fetchNotes } from '../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  barNavType: state.ui.barNavType,
  selectedNote: state.ui.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Home));

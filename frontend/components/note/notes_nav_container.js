import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesNav);

import { RECEIVE_BAR_NAV_TYPE } from '../actions/ui_actions';
import merge from 'lodash/merge';

const BarNavTypeReducer = (state = 'notes', action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BAR_NAV_TYPE:
      newState = action.barNavType;
      return newState;
    default:
      return state;
  }
};

export default BarNavTypeReducer;

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

// const initialState = {
//   session: [],
// };

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;

import { INCREMENT, DECREMENT } from '../actions/example.js';
import { combineReducers } from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const counterApp = combineReducers({
  counterReducer
});

export default counterApp;

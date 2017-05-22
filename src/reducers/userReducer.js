/**
 * Created by huy on 2017-05-19.
 */

import { REQUEST_SIGN_IN, RECEIVE_SIGN_IN, ERROR_SIGN_IN } from '../actions/userAction';
import { REQUEST_SIGN_OUT } from '../actions/userAction';
import { REQUEST_SIGN_UP, ERROR_SIGN_UP } from '../actions/userAction';

export function currentUserReducer(state = {
  isFetching: false,
  hasError: false,
  user: null,
  error: null
}, action) {
  switch (action.type) {
    case REQUEST_SIGN_IN:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false
      })
    case RECEIVE_SIGN_IN:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        hasError: false
      })
    case ERROR_SIGN_IN:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true
      })
    case REQUEST_SIGN_OUT:
      return Object.assign({}, state, {
        user: null
      })
    case REQUEST_SIGN_UP:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        user: action.user
      })
    case ERROR_SIGN_UP:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        error: action.error
      })
    default:
      return state;
  }
}

/**
 * Created by huy on 2017-05-19.
 */

import { REQUEST_SIGN_IN, RECEIVE_SIGN_IN, ERROR_SIGN_IN } from '../actions/userAction';

export function currentUserReducer(state = {
  isFetching: false,
  hasError: false,
  user: null
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
    default:
      return state;
  }
}

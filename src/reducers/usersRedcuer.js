/**
 * Created by huy on 2017-05-24.
 */
import { REQUEST_USER_SHOW, RECEIVE_USER_SHOW } from '../actions/usersAction';

export function usersReducer(state = {
  isFetching: false,
  user: null
}, action) {
  switch (action.type) {
    case REQUEST_USER_SHOW:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USER_SHOW:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      })
    default:
      return state;
  }
}

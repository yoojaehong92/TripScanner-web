/**
 * Created by jaehong on 2017. 5. 24..
 */
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/appBarAction';

export function appBarReducer(state = {
  open: false
}, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return Object.assign({}, state, {
        open: true
      })
    case CLOSE_DRAWER:
      return Object.assign({}, state, {
        open: false
      })
    default:
      return state
  }
}

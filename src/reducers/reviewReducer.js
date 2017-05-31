/**
 * Created by jaehong on 2017. 5. 31..
 */
import { RECEIVE_REVIEWS } from '../actions/reviewAction';

export function reviewReducer(state = {
  reviews: []
}, action) {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.reviews
      })
    default:
      return state
  }
}

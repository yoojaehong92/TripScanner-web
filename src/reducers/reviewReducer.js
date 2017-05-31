/**
 * Created by jaehong on 2017. 5. 31..
 */
import { RECEIVE_REVIEWS, PENDING, NOPENDING } from '../actions/reviewAction';

export function reviewReducer(state = {
  reviews: [],
  isPending: false
}, action) {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.reviews
      })
    case PENDING:
      return Object.assign({}, state, {
        isPending: true
      })
    case NOPENDING:
      return Object.assign({}, state, {
        isPending: false
      })
    default:
      return state
  }
}

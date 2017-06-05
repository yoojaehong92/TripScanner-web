/**
 * Created by jaehong on 2017. 5. 31..
 */
import { RECEIVE_REVIEWS, PENDING, NO_PENDING, SET_USER_REVIEW } from '../actions/reviewAction';

export function reviewReducer(state = {
  reviews: [],
  isPending: false,
  isOwned: false
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
    case NO_PENDING:
      return Object.assign({}, state, {
        isPending: false
      })
    case SET_USER_REVIEW:
      return Object.assign({}, state, {
        reviews: action.reviews
      })
    default:
      return state
  }
}

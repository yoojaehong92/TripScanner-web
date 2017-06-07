/**
 * Created by jaehong on 2017. 5. 31..
 */
import { RECEIVE_REVIEWS, PENDING, NO_PENDING, SET_USER_REVIEW, WRITE_REVIEW } from '../actions/reviewAction';

export function reviewReducer(state = {
  reviews: [],
  isPending: false,
  isFetching: false
}, action) {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.reviews,
        isFetching: false
      })
    case PENDING:
      return Object.assign({}, state, {
        isPending: true,
        isFetching: true
      })
    case NO_PENDING:
      return Object.assign({}, state, {
        isPending: false,
        isFetching: true
      })
    case SET_USER_REVIEW:
      return Object.assign({}, state, {
        isFetching: true
      })
    case WRITE_REVIEW:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

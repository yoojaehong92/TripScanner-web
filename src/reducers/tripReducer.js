import { RECEIVE_SEARCH_TRIP, REQUEST_SEARCH_TRIP } from '../actions/tripAction';
import { RECEIVE_JOINED_TRIP, REQUEST_JOINED_TRIP } from '../actions/tripAction';
import { RECEIVE_HOSTED_TRIP, REQUEST_HOSTED_TRIP } from '../actions/tripAction';

export function tripsReducer(state = {
  isFetching: false,
  trips: null
}, action) {
  switch (action.type) {
    case REQUEST_JOINED_TRIP:
    case REQUEST_HOSTED_TRIP:
    case REQUEST_SEARCH_TRIP:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_JOINED_TRIP:
    case RECEIVE_HOSTED_TRIP:
    case RECEIVE_SEARCH_TRIP:
      return Object.assign({}, state, {
        isFetching: false,
        trips: action.trips
      })
    default:
      return state;
  }
}

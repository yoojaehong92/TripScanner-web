import {
  RECEIVE_SEARCH_TRIP, REQUEST_SEARCH_TRIP,
  RECEIVE_SEARCH_TRIP, REQUEST_SEARCH_TRIP,
  RECEIVE_JOINED_TRIP, REQUEST_JOINED_TRIP,
  RECEIVE_HOSTED_TRIP, REQUEST_HOSTED_TRIP
} from '../actions/tripsAction';

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

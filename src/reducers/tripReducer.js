import { RECEIVE_SEARCH_TRIP, REQUEST_SEARCH_TRIP } from '../actions/tripsAction';

export function tripsReducer(state = {
  isFetching: false,
  trips: null
}, action) {
  switch (action.type) {
    case REQUEST_SEARCH_TRIP:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SEARCH_TRIP:
      return Object.assign({}, state, {
        isFetching: false,
        trips: action.trips
      })
    default:
      return state;
  }
}

/**
 * Created by jaehong on 2017. 5. 24..
 */
import { NEXT_STEP, PREV_STEP } from '../actions/makeTripAction'
import { SET_ADDRESS, SET_TRIP_CONTENT, SET_TRIP_IMAGE } from '../actions/makeTripAction'
import { REQUEST_MAKE_TRIP } from '../actions/makeTripAction'
import { LOCATION_CHANGE } from 'react-router-redux'

export function makeTripReducer(state = {
  step: 0,
  trip: {}
}, action) {
  switch (action.type) {
    case NEXT_STEP:
      return Object.assign({}, state, {
        step: state.step + 1
      })
    case PREV_STEP:
      return Object.assign({}, state, {
        step: state.step - 1
      })
    case SET_ADDRESS:
      return Object.assign({}, state, {
        trip: Object.assign(action.trip, state.trip)
      })
    case SET_TRIP_CONTENT:
      return Object.assign({}, state, {
        trip: Object.assign(action.content, state.trip)
      })
    case SET_TRIP_IMAGE:
      return Object.assign({}, state, {
        trip: Object.assign(action.image, state.trip)
      })
    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        trip: {},
        step: 0
      })
    case REQUEST_MAKE_TRIP:
      return Object.assign({}, state, {
        trip: {}
      })
    default:
      return state
  }
}

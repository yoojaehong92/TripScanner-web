/**
 * Created by jaehong on 2017. 5. 24..
 */
import { NEXT_STEP, PREV_STEP } from '../actions/makeTripAction'

export function makeTripReducer(state = {
  step: 0,
  trips: null
}, action) {
  switch (action.type) {
    case NEXT_STEP:
      return Object.assign({}, state, {
        step: this.step + 1
      })
    case PREV_STEP:
      return Object.assign({}, state, {
        step: this.step - 1
      })
    default:
      return state
  }
}

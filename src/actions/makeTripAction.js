/**
 * Created by jaehong on 2017. 5. 24..
 */
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const SET_TARGET = 'SET_TARGET'

function next() {
  return {
    type: NEXT_STEP
  }
}

function prev() {
  return {
    type: PREV_STEP
  }
}
// function setTarget() {
//   return {
//     type: SET_TARGET
//   }
// }

export function nextStep() {
  return dispatch => dispatch(next())
}

export function prevStep() {
  return dispatch => dispatch(prev())
}
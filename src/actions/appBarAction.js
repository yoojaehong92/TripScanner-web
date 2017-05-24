/**
 * Created by jaehong on 2017. 5. 24..
 */
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

function open() {
  return {
    type: OPEN_DRAWER
  }
}

function close() {
  return {
    type: CLOSE_DRAWER
  }
}

export function openDrawer() {
  return dispatch => dispatch(open())
}

export function closeDrawer() {
  return dispatch => dispatch(close())
}
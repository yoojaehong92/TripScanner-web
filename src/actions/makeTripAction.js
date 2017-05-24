/**
 * Created by jaehong on 2017. 5. 24..
 */
import config from '../../config';

export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const SET_ADDRESS = 'SET_ADDRESS'
export const SET_TRIP_CONTENT = 'SET_TRIP_CONTENT'
export const SET_TRIP_IMAGE = 'SET_TRIP_IMAGE'
export const REQUEST_MAKE_TRIP = 'REQUEST_MAKE_TRIP'

const makeTripUrl = `${config.apiServer.host}/trips`

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

function requestMakeTrip() {
  return {
    type: REQUEST_MAKE_TRIP
  }
}
export function nextStep() {
  return dispatch => dispatch(next())
}

export function prevStep() {
  return dispatch => dispatch(prev())
}

export function setAddress(trip) {
  return {
    type: SET_ADDRESS,
    trip
  };
}

export function setTripContent(content) {
  return {
    type: SET_TRIP_CONTENT,
    content
  }
}

export function setTripImage(image) {
  return {
    type: SET_TRIP_IMAGE,
    image
  }
}

export function fetchMakeTrip(trip) {
  return dispatch => {
    dispatch(requestMakeTrip());
    return fetch(makeTripUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: trip
    })
  }
}
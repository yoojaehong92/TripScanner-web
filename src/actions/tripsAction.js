import config from '../../config';

// For api/v1/trips
export const REQUEST_SEARCH_TRIP = 'REQUEST_SEARCH_TRIP';
export const RECEIVE_SEARCH_TRIP = 'RECEIVE_SEARCH_TRIP';

const tripsSearchUrl = `${config.apiServer.host}/trips`

// For api/v1/trips/joined
export const REQUEST_JOINED_TRIP = 'REQUEST_JOINED_TRIP';
export const RECEIVE_JOINED_TRIP = 'RECEIVE_JOINED_TRIP';

const joinedTripUrl = `${config.apiServer.host}/trips/joined`

// For api/v1/trips/owned
export const REQUEST_HOSTED_TRIP = 'REQUEST_HOSTED_TRIP';
export const RECEIVE_HOSTED_TRIP = 'RECEIVE_HOSTED_TRIP';

const hostedTripUrl = `${config.apiServer.host}/trips/owned`

// For api/v1/trips/:id
export const REQUEST_TRIP_SHOW = 'REQUEST_TRIP_SHOW';
export const RECEIVE_TRIP_SHOW = 'RECEIVE_TRIP_SHOW';

const tripShowUrl = (id) => `${config.apiServer.host}/trips/${id}`

// For api/v1/trips/:id/join
export const REQUEST_JOIN_TRIP = 'REQUEST_JOIN_TRIP';
export const RECEIVE_JOIN_TRIP = 'RECEIVE_JOIN_TRIP';

const tripJoinUrl = (id) => `${config.apiServer.host}/trips/${id}/join`

// For api/v1/trips/:id/leave
export const REQUEST_LEAVE_TRIP = 'REQUEST_LEAVE_TRIP';
export const RECEIVE_LEAVE_TRIP = 'RECEIVE_LEAVE_TRIP';

const tripLeaveUrl = (id) => `${config.apiServer.host}/trips/${id}/leave`

function requestSearchTrip(query) {
  return {
    type: REQUEST_SEARCH_TRIP,
    query
  };
}

function receiveSearchTrip(json) {
  return {
    type: RECEIVE_SEARCH_TRIP,
    trips: json.trips
  };
}

function getQueryString(params) {
  return Object.keys(params)
    .map(k => k + '=' + params[k])
    .join('&');
}

function requestJoinedTrip() {
  return {
    type: REQUEST_JOINED_TRIP
  }
}

function receiveJoinedTrip(json) {
  return {
    type: RECEIVE_JOINED_TRIP,
    trips: json.trips
  }
}

function requestHostedTrip() {
  return {
    type: REQUEST_HOSTED_TRIP
  }
}

function receiveHostedTrip(json) {
  return {
    type: RECEIVE_HOSTED_TRIP,
    trips: json.trips
  }
}

function requestShow(id) {
  return {
    type: REQUEST_TRIP_SHOW,
    id
  }
}

function receiveShow(json) {
  return {
    type: RECEIVE_TRIP_SHOW,
    trip: json.trip
  }
}

function requestJoin(id) {
  return {
    type: REQUEST_JOIN_TRIP,
    id
  };
}

function receiveJoin(json) {
  return {
    type: RECEIVE_JOIN_TRIP,
    trip: json.trip
  };
}

function requestLeave(id) {
  return {
    type: REQUEST_LEAVE_TRIP,
    id
  };
}

function receiveLeave(json) {
  return {
    type: RECEIVE_LEAVE_TRIP,
    trip: json.trip
  };
}

export function fetchSearchTrip(query) {
  return dispatch => {
    dispatch(requestSearchTrip(query));
    return fetch(`${tripsSearchUrl}?${getQueryString(query)}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveSearchTrip(json)));
  };
}

export function fetchJoinedTrip() {
  return dispatch => {
    dispatch(requestJoinedTrip())
    return fetch(joinedTripUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveJoinedTrip(json)));
  }
}

export function fetchHostedTrip() {
  return dispatch => {
    dispatch(requestHostedTrip())
    return fetch(hostedTripUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveHostedTrip(json)));
  }
}

export function fetchShow(id) {
  return dispatch => {
    dispatch(requestShow(id));
    return fetch(tripShowUrl(id), {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveShow(json)))
  };
}

export function fetchJoin(id) {
  return dispatch => {
    dispatch(requestJoin(id));
    return fetch(tripJoinUrl(id), {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveJoin(json)))
  };
}

export function fetchLeave(id) {
  return dispatch => {
    dispatch(requestLeave(id));
    return fetch(tripLeaveUrl(id), {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveLeave(json)))
  };
}
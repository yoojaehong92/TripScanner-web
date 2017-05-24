import config from '../../config';

// For api/v1/trips
export const REQUEST_SEARCH_TRIP = 'REQUEST_SEARCH_TRIP';
export const RECEIVE_SEARCH_TRIP = 'RECEIVE_SEARCH_TRIP';

const tripsSearchUrl = `${config.apiServer.host}/trips`


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
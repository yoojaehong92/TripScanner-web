/**
 * Created by huy on 2017-05-24.
 */

import config from '../../config';

// For api/v1/users/:id
export const REQUEST_USER_SHOW = 'REQUEST_USER_SHOW';
export const RECEIVE_USER_SHOW = 'RECEIVE_USER_SHOW';

const userShowUrl = (id) => `${config.apiServer.host}/users/${id}`

function requestShow(id) {
  return {
    type: REQUEST_USER_SHOW,
    id
  }
}

function receiveShow(json) {
  return {
    type: RECEIVE_USER_SHOW,
    user: json.user
  }
}

export function fetchShow(id) {
  return dispatch => {
    dispatch(requestShow(id));
    return fetch(userShowUrl(id), {
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

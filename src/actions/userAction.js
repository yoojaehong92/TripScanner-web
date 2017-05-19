/**
 * Created by huy on 2017-05-19.
 */

import config from '../../config';
// For api/v1/users/me
export const REQUEST_USER_ME = 'REQUEST_USER_ME';
export const RECEIVE_USER_ME = 'RECEIVE_USER_ME';

// For api/v1/users/sign_in
export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const RECEIVE_SIGN_IN = 'RECEIVE_SIGN_IN';
export const ERROR_SIGN_IN = 'ERROR_SIGN_IN';

const usersSignInUrl = `${config.apiServer.host}/users/sign_in`

function requestSignIn(user) {
  return {
    type: REQUEST_SIGN_IN,
    user
  };
}

function recceiveSignIn(json) {
  return {
    type: RECEIVE_SIGN_IN,
    user: json.user
  };
}

function errorSignIn(statusText) {
  return {
    type: ERROR_SIGN_IN,
    error: statusText
  }
}

function handleErrors(response) {
  if (!response.ok)
    throw Error(response.statusText);
  return response;
}

export function fetchSignIn(user) {
  return dispatch => {
    dispatch(requestSignIn(user));
    return fetch(usersSignInUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => dispatch(recceiveSignIn(json)))
    .catch(error => dispatch(errorSignIn(error)));
  };
}

// function shouldFetchSignIn(state, user) {
//   const posts = state.postsByReddit[reddit];
//   if (!posts) {
//     return true;
//   } else if (posts.isFetching) {
//     return false;
//   } else {
//     return posts.didInvalidate;
//   }
// }
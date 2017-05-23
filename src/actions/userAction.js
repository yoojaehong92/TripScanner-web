/**
 * Created by huy on 2017-05-19.
 */

import config from '../../config';
// For api/v1/users/me
export const REQUEST_USER_ME = 'REQUEST_USER_ME';
export const RECEIVE_USER_ME = 'RECEIVE_USER_ME';

const userMeUrl = `${config.apiServer.host}/users/me`

// For api/v1/users/sign_in
export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const RECEIVE_SIGN_IN = 'RECEIVE_SIGN_IN';
export const ERROR_SIGN_IN = 'ERROR_SIGN_IN';

const usersSignInUrl = `${config.apiServer.host}/users/sign_in`

// For api/v1/users/sign_out
export const REQUEST_SIGN_OUT = 'REQUEST_SIGN_OUT';

const userSignOutUrl = `${config.apiServer.host}/users/sign_out`

// For api/v1/users/sign_up
export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
export const ERROR_SIGN_UP = 'ERROR_SIGN_UP';

const userSignUpUrl = `${config.apiServer.host}/users`

function requestUserMe() {
  return {
    type: REQUEST_USER_ME
  }
}

function receiveUserMe(json) {
  return {
    type: RECEIVE_USER_ME,
    user: json.user
  }
}

function requestSignIn(user) {
  return {
    type: REQUEST_SIGN_IN,
    user
  };
}

function receiveSignIn(json) {
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
    throw response;
  return response;
}

function requestSignOut() {
  return {
    type: REQUEST_SIGN_OUT
  }
}

function requestSignUp() {
  return {
    type: REQUEST_SIGN_UP
  }
}

function errorSignUp(json) {
  return {
    type: ERROR_SIGN_UP,
    error: json.errors
  }
}

export function fetchUserMe() {
  return dispatch => {
    dispatch(requestUserMe());
    return fetch(userMeUrl, {
      method: 'GET',
      credentials: 'include'
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => dispatch(receiveUserMe(json)))
    .catch(error => console.log(error.statusText))
  }
}

export function fetchProfileEdit(user) {
  return dispatch => {
    dispatch(requestUserMe());
    return fetch(userMeUrl, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => dispatch(receiveUserMe(json)))
    .catch()
  }
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
    .then(json => dispatch(receiveSignIn(json)))
    .catch(error => dispatch(errorSignIn(error.statusText)));
  };
}

export function fetchSignOut() {
  return dispatch => {
    dispatch(requestSignOut());
    return fetch(userSignOutUrl, {
      method: 'DELETE',
      credentials: 'include'
    })
  };
}

export function fetchSignUp(user) {
  return dispatch => {
    dispatch(requestSignUp());
    return fetch(userSignUpUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => dispatch(receiveSignIn(json)))
    .catch(error => error.json())
    .then(json => dispatch(errorSignUp(json)));
  };
}

export function fetchSignOut() {
  return dispatch => {
    dispatch(requestSignOut());
    return fetch(userSignOutUrl, {
      method: 'DELETE',
      credentials: 'include'
    })
  }
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
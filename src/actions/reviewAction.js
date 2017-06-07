/**
 * Created by jaehong on 2017. 5. 31..
 */

import config from '../../config';

export const RECEIVE_REVIEWS = 'RECEIVE;_REVIEWS';
export const PENDING = 'PENDING';
export const NO_PENDING = 'NO_PENDING';
export const SET_USER_REVIEW = 'SET_USER_REVIEW';
export const WRITE_REVIEW = 'WRITE_REVIEW'

const ownedReviewUrl = `${config.apiServer.host}/reviews/owned`;

const writtenReviewUrl = `${config.apiServer.host}/reviews/written`;

const pendingReviewUrl = `${config.apiServer.host}/reviews/pending`;

const getUserReviewUrl = (id) => `${config.apiServer.host}/users/${id}/reviews/owned`;

const updateReviewUrl = (id) => `${config.apiServer.host}/reviews/${id}`;

function receiveReviews(json) {
  return {
    type: RECEIVE_REVIEWS,
    reviews: json.reviews
  }
}
function pendingReviews() {
  return {
    type: PENDING
  }
}
function noPendingReviews() {
  return {
    type: NO_PENDING
  }
}

function writeReview() {
  return {
    type: WRITE_REVIEW
  }
}

export function fetchUserReview(id) {
  return dispatch => {
    dispatch(noPendingReviews())
    return fetch(getUserReviewUrl(id), {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  }
}
export function fetchOwnedReview() {
  return dispatch => {
    dispatch(noPendingReviews())
    return fetch(ownedReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

export function fetchWrittenReview() {
  return dispatch => {
    dispatch(noPendingReviews())
    return fetch(writtenReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

export function fetchPendingReview() {
  return dispatch => {
    dispatch(pendingReviews())
    return fetch(pendingReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

export function fetchUpdateReview(id, review) {
  return dispatch => {
    dispatch(writeReview())
    return fetch(updateReviewUrl(id), {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: review
    })
  };
}

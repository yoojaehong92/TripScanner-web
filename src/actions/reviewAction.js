/**
 * Created by jaehong on 2017. 5. 31..
 */

import config from '../../config';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

const ownedReviewUrl = `${config.apiServer.host}/reviews/owned`;

const writtenReviewUrl = `${config.apiServer.host}/reviews/written`;

const pendingReviewUrl = `${config.apiServer.host}/reviews/pending`;

function receiveReviews(json) {
  return {
    type: RECEIVE_REVIEWS,
    reviews: json.reviews
  }
}
export function fetchOwnedReview() {
  return dispatch => {
    return fetch(ownedReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

export function fetchWrittenReveiw() {
  return dispatch => {
    return fetch(writtenReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

export function fetchPendingReveiw() {
  return dispatch => {
    return fetch(pendingReviewUrl, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveReviews(json)))
  };
}

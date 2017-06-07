/**
 * Created by jaehong on 2017. 5. 31..
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewList from '../components/reviewList'


class ReviewShow extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    reviews: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {
          this.props.reviews.length ?
            <ReviewList/> :
          <p> There is no review </p>
        }
      </div>
    );
  }
}

function mapReview(state) {
  return {
    reviews: state.reviewReducer.reviews
  };
}
export default connect(mapReview)(ReviewShow);

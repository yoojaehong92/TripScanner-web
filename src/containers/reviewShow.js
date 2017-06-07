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
    reviews: PropTypes.array,
    isPending: PropTypes.bool,
    isFetching: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ReviewList
          reviews={ this.props.reviews }
          isPending={ this.props.isPending }
          isFetching={ this.props.isFetching }
        />
      </div>
    );
  }
}

function mapReview(state) {
  return {
    reviews: state.reviewReducer.reviews,
    isPending: state.reviewReducer.isPending,
    isFetching: state.reviewReducer.isFetching
  };
}
export default connect(mapReview)(ReviewShow);

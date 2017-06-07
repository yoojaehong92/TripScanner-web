/**
 * Created by jaehong on 2017. 5. 29..
 */
import { Card, CardHeader, Divider } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './reviewListItem';
import S from 'shorti';
import { connect } from 'react-redux';

class ReviewList extends React.Component {
  static propTypes = {
    reviews: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const { reviews } = this.props;


    if (reviews) {
      const reviewListItems = reviews.map((review, index) =>
        <div key={ index }>
          <Divider />
          <ReviewListItem
            key={ review.id }
            review={ review }
          />
          <Divider />
        </div>
      );
      return (
        <Card style={S('mt-20')}>
          <CardHeader title="Review"/>
          <Divider />
          { reviewListItems }
        </Card>
      );
    }
    return (<div> Something wrong...</div>);
  }
}

function mapReviews(state) {
  return {
    reviews: state.reviewReducer.reviews
  }
}
export default connect(mapReviews)(ReviewList);
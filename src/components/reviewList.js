/**
 * Created by jaehong on 2017. 5. 29..
 */
import { Card, CardHeader, Divider } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './reviewListItem';
import S from 'shorti';
import ApplicationComponent from './baseComponent'

class ReviewList extends ApplicationComponent {
  static propTypes = {
    reviews: PropTypes.array,
    isPending: PropTypes.bool,
    isFetching: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const { reviews, isPending, isFetching } = this.props;

    if (isFetching)
      return this.spinner();

    if (reviews.length) {
      const reviewListItems = reviews.map((review, index) =>
        <div key={ index }>
          <Divider />
          <ReviewListItem
            key={ review.id }
            review={ review }
            isPending={ isPending }
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
    return this.empty('Empty Reviews')
  }
}


export default ReviewList;
/**
 * Created by jaehong on 2017. 5. 29..
 */
import { Card, CardHeader, Divider } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './reviewListItem';
import S from 'shorti';
import { fetchOwnedReview } from '../actions/reviewAction'
import { connect } from 'react-redux';

class ReviewList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    reviews: PropTypes.array
  };
  static defaultProps = {
    reviews: new Array({
      id: 1,
      review: {
        id: 1,
        owner: {
          name: 'Yoo jaehong',
          image_thumb: '//localhost:3000/system/users/images/000/000/001/thumb/data?1495718081'
        },
        rate: 4.5,
        updated_at: '2017-05-01',
        content: 'Good'
      } },
      {
        id: 2,
        review: {
          id: 2,
          owner: {
            name: 'Yoo jaehong',
            image_thumb: '//localhost:3000/system/users/images/000/000/001/thumb/data?1495718081'
          },
          rate: 1.5,
          updated_at: '2017-05-01',
          content: 'Good'
        } }
    )
  }
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchOwnedReview())
  }

  render() {
    const { reviews } = this.props;

    if (reviews) {
      const reviewListItems = reviews.map((review, index) =>
        <div key={ index }>
          <ReviewListItem
            key={ review.id }
            review={ review.review }
          />
          <Divider />
        </div>
      );
      return (
        <Card style={S('mt-20')}>
          <CardHeader title='Review '/>
          <Divider />
          { reviewListItems }
        </Card>
      );
    }
    return (<div> Something wrong...</div>);
  }
}
export default connect()(ReviewList);

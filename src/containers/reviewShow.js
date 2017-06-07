/**
 * Created by jaehong on 2017. 5. 31..
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewList from '../components/reviewList'
import ActionDescription from 'material-ui/svg-icons/action/description'
import { cyan500 } from 'material-ui/styles/colors';
import S from 'shorti'

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
            <div className="container" style={S('text-center')}>
              <ActionDescription color={ cyan500 } style={S('w-120 h-120')}/>
              <p> Empty Reviews</p>
            </div>
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

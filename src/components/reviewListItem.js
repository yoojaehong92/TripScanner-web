/**
 * Created by jaehong on 2017. 5. 29..
 */

import { CardHeader, CardText } from 'material-ui';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import PropTypes from 'prop-types';
import { cyan500 } from 'material-ui/styles/colors';
import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './reviewForm';

class ReviewListItem extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    review: PropTypes.object,
    isPending: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { isPending, review } = this.props
    const {
      id, rate, updated_at, content, writer, owner, trip
    } = review;

    const contentToHtml = content ? content.split('\n')
        .map((line, index) => {
          return (<span key={ index }>{ line }<br/></span>)
        }) : '';
    const rateToHtml = []
    for (let i = 0; i < 5; i++) {
      if ((rate - i) >= 1)
        rateToHtml.push(<ToggleStar key={ i } color={ cyan500 }/>);
      else if ((rate - i) === 0.5)
        rateToHtml.push(<ToggleStarHalf key={ i } color={ cyan500 }/>);
      else
        rateToHtml.push(<ToggleStarBorder key={ i } color={ cyan500 }/>);
    }
    return (
      <div>
        { // review에 owner가 오지 않는 경우 임시로 writer id 만 출력
          review.writer ?
            <CardHeader
              title={ isPending ? owner.name : writer.name }
              subtitle={
                isPending ?
                  <div>
                    <span>{ `${trip.city}, ${trip.country}` }</span>
                    <br/>
                    <span>{ `${trip.check_in} ~ ${trip.check_out}` }</span>
                  </div> :
                  <span>{ `${updated_at}` }</span>
              }
              children={
                <div style={{ float: 'right', textAlign: 'center' }}>
                  { isPending ? '' : rateToHtml }
                  <p>{ rate }</p>
                </div>
              }
              avatar={ isPending ? owner.image_thumb : writer.image_thumb }
            /> :
            <CardHeader
              title={ 'writer id :' + review.writer_id }
              children={
                <div style={{ float: 'right', textAlign: 'center' }}>
                  { isPending ? '' : rateToHtml }
                  <p>{ rate }</p>
                </div>
              }
            />

        }
        <CardText>
          {
            isPending ? <ReviewForm id={ id }/> :
            contentToHtml
          }
        </CardText>
      </div>
    )
  }
}
function mapReview(state) {
  return {
    isPending: state.reviewReducer.isPending
  }
}
export default connect(mapReview)(ReviewListItem);
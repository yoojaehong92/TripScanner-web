/**
 * Created by huy on 2017-05-24.
 */

import * as React from 'react';
import UserInfoChips from './userInfoChips';
import {
  Card, CardHeader, CardText, Divider
} from 'material-ui';
import ReviewList from './reviewList'
import PropTypes from 'prop-types';
import { fetchWrittenReview } from '../actions/reviewAction'
import { connect } from 'react-redux';

class UserDetail extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchWrittenReview())
  }

  render() {
    const { user } = this.props;
    const introductionToHtml = user.introduction ? user.introduction.split('\n')
      .map((line, index) => {
        return (<span key={ index }>{ line }<br/></span>)
      }) : '';
    return (
      <div>
        <Card>
          <CardHeader
            title={ user.name }
            subtitle={ user.email }
            avatar={ user.image_thumb }
          />
          <Divider />
          <UserInfoChips owner={ user }/>
          <CardText>
            { introductionToHtml }
          </CardText>
        </Card>
        <ReviewList/>
      </div>
    )
  }
}
export default connect()(UserDetail);
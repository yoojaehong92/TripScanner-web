/**
 * Created by huy on 2017-05-24.
 */

import * as React from 'react';
import UserInfoChips from './userInfoChips';
import {
  Card, CardHeader, CardText, Divider
} from 'material-ui';
import PropTypes from 'prop-types';

class UserDetail extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    const introductionToHtml = user.introduction ? user.introduction.split('\n')
      .map(line => {
        return (<span>{ line }<br/></span>)
      }) : '';
    return (
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
    )
  }
}
export default UserDetail
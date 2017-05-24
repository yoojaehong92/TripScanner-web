/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardText, Divider, FlatButton
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import S from 'shorti';
import MemberList from './memberList';
import UserInfoChips from './userInfoChips';

class TripListItem extends React.Component {
  static propTypes = {
    check_in: PropTypes.string.isRequired,
    check_out: PropTypes.string.isRequired,
    content: PropTypes.string,
    image_original: PropTypes.string,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    reviews: PropTypes.array,
    members: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { check_in, check_out, city, country, content } = this.props;
    const { owner, members } = this.props;
    const contentToHtml = content ? content.split('\r\n')
      .map(line => {
        return (<span>{ line }<br/></span>)
      }) : '';
    return (
      <Card>
        <CardHeader
          title={ owner.name }
          subtitle={
            <div>
              <span>{ `${city}, ${country}` }</span>
              <br/>
              <span>{ `${check_in} ~ ${check_out}` }</span>
            </div>
          }
          avatar={ owner.image_thumb }
        />
        <Divider />
        <UserInfoChips owner={ owner }/>
        <Divider />
        <CardText style={S('bg-eee')}>
          { contentToHtml }
        </CardText>
        <Divider />
        members.length > 0 ? <MemberList members={ members }/> : null
        <Divider />
        <CardActions>
          <FlatButton label="호스트 정보보기" primary />
          <FlatButton label="동행 자세히보기" secondary />
        </CardActions>
      </Card>
    )
  }
}

export default TripListItem;
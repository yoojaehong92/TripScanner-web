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
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class TripListItem extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trip: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      id, check_in, check_out, city, country, content,
      owner, members
    } = this.props.trip;
    const { dispatch } = this.props;

    const contentToHtml = content ? content.split('\n')
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
          <FlatButton
            label="호스트 정보보기"
            onTouchTap={ () => dispatch(push(`users/${owner.id}`)) }
          />
          <FlatButton
            label="동행 자세히보기" secondary
            onTouchTap={ () => dispatch(push(`trips/${id}`)) }
          />
          <FlatButton label="동행 참여하기" primary />
        </CardActions>
      </Card>
    )
  }
}

export default connect()(TripListItem);
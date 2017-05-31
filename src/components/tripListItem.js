/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardText, Divider, FlatButton,
  RaisedButton
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import S from 'shorti';
import MemberList from './memberList';
import UserInfoChips from './userInfoChips';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchJoin, fetchLeave } from '../actions/tripsAction';

function findByKey(trips, key) {
  return trips.filter((trip) => trip.id === key).shift()
}

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.currentUserReducer.user,
    trip: findByKey(state.tripsReducer.trips, ownProps.uniqKey)
  };
}

class TripListItem extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trip: PropTypes.object,
    currentUser: PropTypes.object,
    uniqKey: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.alreadyJoined = this.alreadyJoined.bind(this);
    this.joinOrLeaveBtn = this.joinOrLeaveBtn.bind(this);
    this.isOwner = this.isOwner.bind(this);
  }

  isOwner(user) {
    return this.props.trip.owner.id === user.id
  }

  alreadyJoined(user) {
    return this.props.trip.members
      .findIndex((member) => member.id === user.id) !== -1
  }

  joinOrLeaveBtn(user) {
    if (this.alreadyJoined(user)) {
      return (<RaisedButton
        label="동행 취소" secondary
        onTouchTap={ () => this.props.dispatch(fetchLeave(this.props.trip.id)) }
      />)
    }

    return (<FlatButton
      label="동행 참여하기" primary
      onTouchTap={ () => this.props.dispatch(fetchJoin(this.props.trip.id)) }
    />)
  }

  render() {
    if (this.props.trip) {
      const {
        id, check_in, check_out, city, country, content,
        owner, members
      } = this.props.trip;
      const { dispatch, currentUser } = this.props;

      const contentToHtml = content ? content.split('\n')
        .map((line, index) => {
          return (<span key={ index }>{ line }<br/></span>)
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
            { this.isOwner(currentUser) ? '' : this.joinOrLeaveBtn(currentUser) }
          </CardActions>
        </Card>
      )
    }
    return (
      <div></div>
    )
  }
}

export default connect(mapStateToProps)(TripListItem);
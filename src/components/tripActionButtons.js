/**
 * Created by huy on 2017-06-07.
 */


import * as React from 'react';
import { fetchJoin, fetchLeave } from '../actions/tripsAction';
import { connect } from 'react-redux';
import { FlatButton, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

class TripActionButtons extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trip: PropTypes.object,
    currentUser: PropTypes.object,
    isTripDetailLink: PropTypes.object
  };

  static defaultProps = {
    isTripDetailLink: true
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
    const { dispatch, currentUser } = this.props;
    const { id, owner } = this.props.trip;

    return (
      <div>
        <FlatButton
          label="호스트 정보보기"
          style={{ marginRight: '5px' }}
          onTouchTap={ () => dispatch(push(`users/${owner.id}`)) }
        />
        {
          this.props.isTripDetailLink ?
            <FlatButton
              label="동행 자세히보기" secondary
              style={{ marginRight: '5px' }}
              onTouchTap={ () => dispatch(push(`trips/${id}`)) }
            />
            : ''
        }
        { this.isOwner(currentUser) ? '' : this.joinOrLeaveBtn(currentUser) }
      </div>
    )
  }
}

export default connect()(TripActionButtons);
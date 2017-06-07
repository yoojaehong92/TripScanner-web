/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardText, Divider
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import S from 'shorti';
import MemberList from './memberList';
import UserInfoChips from './userInfoChips';
import TripActionButtons from './tripActionButtons';
import { connect } from 'react-redux';

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
  }

  render() {
    if (this.props.trip) {
      const {
        check_in, check_out, city, country, content,
        owner, members
      } = this.props.trip;

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
            <TripActionButtons
              trip={ this.props.trip }
              currentUser={ this.props.currentUser }
            />
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
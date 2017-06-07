/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardMedia,
  CardText, CardTitle, Divider
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import UserInfoChips from './userInfoChips';
import { connect } from 'react-redux';
import TripActionButtons from './tripActionButtons';
import MemberList from './memberList';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer.user
  };
}

class TripDetail extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trip: PropTypes.object,
    currentUser: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      check_in, check_out, city, country, image_original, content,
      owner, members
    } = this.props.trip;
    return (
      <Card>
        <CardHeader
          title={ owner.name }
          subtitle={ owner.email }
          avatar={ owner.image_thumb }
        />
        <CardMedia
          overlay={
            <CardTitle
              title={ `${city}, ${country}` }
              subtitle={ `${check_in} ~ ${check_out}` }
            />
          }
        >
          <img src={ image_original } />
        </CardMedia>
        <UserInfoChips owner={ owner }/>
        <Divider />
        <CardText>
          {
            content ?
              content.split('\n').map(line => {
                return (<span>{ line }<br/></span>)
              }) :
              null
          }
        </CardText>
        <Divider />
          members.length > 0 ? <MemberList members={ members }/> : null
        <Divider />
        <CardActions>
          <TripActionButtons
            trip={ this.props.trip }
            currentUser={ this.props.currentUser }
            isTripDetailLink={ false }
          />
        </CardActions>
      </Card>
    )
  }
}

export default connect(mapStateToProps)(TripDetail);
/**
 * Created by jaehong on 2017. 5. 24..
 */
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';
import React from 'react';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import MapsRateReview from 'material-ui/svg-icons/maps/rate-review'
import ActionAccountBox from 'material-ui/svg-icons/action/account-box'
import { fetchJoinedTrip, fetchHostedTrip } from './actions/tripsAction'
import { closeDrawer } from './actions/appBarAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Menu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trips: PropTypes.array,
    open: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  onTouchJoinedTrips = () => {
    const { dispatch } = this.props
    dispatch(closeDrawer())
    dispatch(fetchJoinedTrip())
      .then(() => this.props.dispatch(push('/trips_index')))
  }

  onTouchHostedTrips = () => {
    const { dispatch } = this.props
    dispatch(closeDrawer())
    dispatch(fetchHostedTrip())
      .then(() => this.props.dispatch(push('/trips_index')))
  }

  render() {
    return (
      <div>
        <Drawer
          docked={ false }
          open={ this.props.open }
          onRequestChange={ () => this.props.dispatch(closeDrawer()) }
        >
          <ListItem
            primaryText="Trip"
            initiallyOpen
            primaryTogglesNestedList
            leftIcon={ <ActionFlightTakeoff /> }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Joined Trips"
                onTouchTap={ this.onTouchJoinedTrips }
              />,
              <ListItem
                key={2}
                primaryText="Hosted Trips"
                onTouchTap={ this.onTouchHostedTrips }
              />
            ]}
          />
          <ListItem
            primaryText="Review"
            initiallyOpen
            primaryTogglesNestedList
            leftIcon={ <MapsRateReview /> }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Joined Trips"
                onTouchTap={ this.onTouchJoinedTrips }
              />,
              <ListItem
                key={2}
                primaryText="Hosted Trips"
                onTouchTap={ this.onTouchHostedTrips }
              />
            ]}
          />
          <ListItem
            primaryText="User"
            primaryTogglesNestedList
            leftIcon={ <ActionAccountBox /> }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Edit Profile"
                onTouchTap={ this.onTouchJoinedTrips }
              />,
              <ListItem
                key={2}
                primaryText="Hosted Trips"
                onTouchTap={ this.onTouchHostedTrips }
              />
            ]}
          />
        </Drawer>
      </div>
    )
  }
}

function mapApp(state) {
  return {
    open: state.appBarReducer.open
  }
}

export default connect(mapApp)(Menu);
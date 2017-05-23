/**
 * Created by jaehong on 2017. 5. 24..
 */
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List';
import React from 'react';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { fetchJoinedTrip, fetchHostedTrip } from './actions/tripAction'
import { closeDrawer } from './actions/appAction'
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
      .then(() => this.props.dispatch(push('/trips')))
  }

  onTouchHostedTrips = () => {
    const { dispatch } = this.props
    dispatch(closeDrawer())
    dispatch(fetchHostedTrip())
      .then(() => this.props.dispatch(push('/trips')))
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
            primaryTogglesNestedList
            initiallyOpen
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
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

function mapApp(state) {
  return {
    open: state.appReducer.open
  }
}

export default connect(mapApp)(Menu);
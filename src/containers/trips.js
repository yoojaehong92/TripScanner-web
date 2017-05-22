import React from 'react';
import { connect } from 'react-redux';
import TripListItem from '../components/tripListItem';
import PropTypes from 'prop-types';


class Trips extends React.Component {
  static propTypes = {
    trips: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { trips } = this.props
    const tripListItems = trips.map((trip) =>
      <TripListItem
        key={ trip.id }
        check_in={ trip.check_in }
        check_out={ trip.check_out }
        city={ trip.city }
        country={ trip.country }
        address={ trip.address }
        owner={ trip.owner }
        members={ trip.members }
        reviews={ trip.reviews }
      />
    );
    return (
      <div className="container">
        { tripListItems }
      </div>
    );
  }
}

function mapTrips(state) {
  return {
    trips: state.tripsReducer.trips
  };
}

export default connect(mapTrips)(Trips);

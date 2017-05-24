import React from 'react';
import { connect } from 'react-redux';
import TripListItem from '../components/tripListItem';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';


class Trips extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trips: PropTypes.array
  };

  constructor(props) {
    super(props);
    if (!this.props.trips)
      this.props.dispatch(push('/'));
  }

  componentWillMount() {
  }

  render() {
    const { trips } = this.props;
    if (trips) {
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
          content={ trip.content }
          image_original={ trip.image_original }
        />
      );
      return (
        // Need to check tripListItems empty.
        <div className="container">
          { tripListItems }
        </div>
      );
    }
    return (<div className="container"> Something wrong...</div>);
  }
}

function mapTrips(state) {
  return {
    trips: state.tripsReducer.trips
  };
}

export default connect(mapTrips)(Trips);

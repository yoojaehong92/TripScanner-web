import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import TripList from '../components/tripList'


class TripIndex extends React.Component {
  static propTypes = {
    dispatch: PropTypes.object.isRequired,
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
    const { trips } = this.props
    return (
      <div className="container">
        <TripList trips={ trips } />
      </div>
    );
  }
}

function mapTrips(state) {
  return {
    trips: state.tripsReducer.trips
  };
}

export default connect(mapTrips)(TripIndex);

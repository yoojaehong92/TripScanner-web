import React from 'react';
import S from 'shorti'
import { connect } from 'react-redux';

const Trips = () => {
  return (
    <div style={S('p-20 pt-80')}>
      Trips
    </div>
  );
};

function mapTrips(state) {
  return {
    trips: state.tripsReducer.trips
  };
}

export default connect(mapTrips)(Trips);

/**
 * Created by huy on 2017-05-24.
 */

import React from 'react';
import TripDetail from '../components/tripDetail'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShow } from '../actions/tripsAction';

class TripShow extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    trip: PropTypes.object
  };

  constructor(props) {
    super(props);
    const { id } = this.props.params;
    const { dispatch } = this.props;
    dispatch(fetchShow(id));
  }

  render() {
    const { trip } = this.props;
    return (
      <div
        className="container"
      >
        {
          trip ? <TripDetail trip={ trip }/> : ''
        }
      </div>
    );
  }
}

function mapTrip(state) {
  return {
    trip: state.tripsReducer.trip
  };
}

export default connect(mapTrip)(TripShow);

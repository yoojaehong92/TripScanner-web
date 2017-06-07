import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import TripList from '../components/tripList'


function mapStateToProps(state) {
  return {
    trips: state.tripsReducer.trips,
    isFetching: state.tripsReducer.isFetching
  };
}

class TripIndex extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const { trips, isFetching } = this.props;
    return (
      <div className="container">
        <TripList trips={ trips } isFetching={ isFetching } />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TripIndex);

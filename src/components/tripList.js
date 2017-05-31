/**
 * Created by huy on 2017-05-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TripListItem from './tripListItem';
import { CircularProgress, Divider } from 'material-ui';
import S from 'shorti';

class TripList extends React.Component {
  static propTypes = {
    trips: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const { trips } = this.props;
    if (trips) {
      const tripListItems = trips.map((trip, index) =>
        <div style={S('mt-20 mb-20')} key={ index }>
          <TripListItem
            key={ trip.id }
            uniqKey={ trip.id }
          />
          <Divider />
        </div>
      );
      return (
        // Need to check tripListItems empty.
        <div>
          { tripListItems }
        </div>
      );
    }
    return (
      <div className="text-center">
        Please wait...
        <div>
          <CircularProgress size={80} thickness={5} />
        </div>
      </div>
    );
  }
}

export default TripList;

/**
 * Created by huy on 2017-05-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TripListItem from './tripListItem';
import { Divider } from 'material-ui';
import S from 'shorti';
import ApplicationComponent from './baseComponent'

class TripList extends ApplicationComponent {
  static propTypes = {
    trips: PropTypes.array,
    isFetching: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { trips, isFetching } = this.props;

    if (isFetching)
      return this.spinner();

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
      <div>
        {
          tripListItems.length ?
            tripListItems :
            this.empty('Empty Trips')
        }
      </div>
    );
  }
}

export default TripList;

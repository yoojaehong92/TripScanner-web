/**
 * Created by huy on 2017-05-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TripListItem from './tripListItem';
import { Divider } from 'material-ui';
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
      const tripListItems = trips.map((trip) =>
        <div style={ S('mt-20 mb-20')}>
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
    return (<div> Something wrong...</div>);
  }
}

export default TripList;

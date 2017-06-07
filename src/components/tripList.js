/**
 * Created by huy on 2017-05-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TripListItem from './tripListItem';
import { CircularProgress, Divider } from 'material-ui';
import S from 'shorti';
import ActionDescription from 'material-ui/svg-icons/action/description'
import { cyan500 } from 'material-ui/styles/colors';

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
        <div>
          {
            tripListItems.length ?
              tripListItems :
              <div className="container" style={S('text-center')}>
                <ActionDescription color={ cyan500 } style={S('w-120 h-120')}/>
                <p> Empty Trips</p>
              </div>
          }
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

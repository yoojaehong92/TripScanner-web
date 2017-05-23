/**
 * Created by huy on 2017-05-23.
 */

import { Card, CardActions, CardHeader, CardText, CardTitle, FlatButton } from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';

class TripListItem extends React.Component {
  static propTypes = {
    check_in: PropTypes.string.isRequired,
    check_out: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    reviews: PropTypes.array,
    members: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { check_in, check_out, city, country, address } = this.props;
    const { owner } = this.props;

    return (
      <Card>
        <CardHeader
          title={ owner.name }
          avatar="images/jsa-128.jpg"
        />
        <CardTitle title={ country } subtitle={ city } />
        <CardText>
          { address }
          <br/>
          { check_in } ~ { check_out }
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

export default TripListItem;
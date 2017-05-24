/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardMedia,
  CardText, CardTitle, FlatButton, Chip, Divider
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  amber200, blue300, blueGrey300, deepOrange100
} from 'material-ui/styles/colors';

class TripListItem extends React.Component {
  static propTypes = {
    check_in: PropTypes.string.isRequired,
    check_out: PropTypes.string.isRequired,
    content: PropTypes.string,
    image_original: PropTypes.string,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    reviews: PropTypes.array,
    members: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { check_in, check_out, city, country, image_original, content } = this.props;
    const { owner } = this.props;
    const chipStyles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px'
      }
    };
    return (
      <Card>
        <CardHeader
          title={ owner.name }
          subtitle={ owner.email }
          avatar={ owner.image_thumb }
        />
        <CardMedia
          overlay={
            <CardTitle
              title={ `${city}, ${country}` }
              subtitle={ `${check_in} ~ ${check_out}` }
            />
          }
        >
          <img src={ image_original } />
        </CardMedia>
        <div style={chipStyles.wrapper}>
          <Chip
            style={chipStyles.chip}
            backgroundColor={ blue300 }
          >
            { owner.school }
          </Chip>
          <Chip
            style={chipStyles.chip}
            backgroundColor={ blueGrey300 }
          >
            { owner.job }
          </Chip>
          <Chip
            style={chipStyles.chip}
            backgroundColor={ deepOrange100 }
          >
            { owner.locale }
          </Chip>
          <Chip
            style={chipStyles.chip}
            backgroundColor={ amber200 }
          >
            { owner.country }
          </Chip>
        </div>
        <Divider />
        <CardText>
          { content }
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
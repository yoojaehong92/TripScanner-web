/**
 * Created by huy on 2017-05-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from 'material-ui';
import {
  amber200, blue300, blueGrey300, deepOrange100
} from 'material-ui/styles/colors';

class UserInfoChips extends React.Component {
  static propTypes = {
    owner: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { owner } = this.props
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
    )
  }
}

export default UserInfoChips;
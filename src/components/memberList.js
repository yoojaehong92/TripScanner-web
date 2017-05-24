import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { Chip } from 'material-ui';

class MemberList extends React.Component {
  static propTypes = {
    members: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { members } = this.props
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
      <div>
        <div style={chipStyles.wrapper}>
          {
            members.map((member) =>
              <Chip
                style={chipStyles.chip}
              >
                <Avatar
                  src={ member.image_thumb }
                />
                { member.name }
              </Chip>
            )
          }
        </div>
      </div>
    )
  }
}

export default MemberList;
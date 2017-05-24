import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { Chip } from 'material-ui';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class MemberList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    members: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { members, dispatch } = this.props
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
              <div key={ member.id }>
                <Chip
                  style={chipStyles.chip}
                  onTouchTap={ () => dispatch(push(`users/${member.id}`)) }
                >
                  <Avatar
                    src={ member.image_thumb }
                  />
                  { member.name }
                </Chip>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default connect()(MemberList);
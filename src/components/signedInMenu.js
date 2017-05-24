import React from 'react';
import 'whatwg-fetch';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';

import PropTypes from 'prop-types'
import { fetchSignOut } from '../actions/currentUserAction'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import S from 'shorti'

class SignedInMenu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ListItem
          primaryText={ this.props.user.email }
          leftAvatar={<Avatar src={ this.props.user.image_thumb }/>}
          style={S('color-fff')}
          rightIconButton={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon color="white"/>
                </IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem
                primaryText="Edit Profile"
                onTouchTap={ () => this.props.dispatch(push('/profile_edit')) }
              />
              <MenuItem
                primaryText="Sign out"
                onTouchTap={ () => this.props.dispatch(fetchSignOut()) }
              />
            </IconMenu>
          }
          disabled
        />
    )
  }
}
function mapCurrentUser(state) {
  return {
    user: state.currentUserReducer.user
  };
}
export default connect(mapCurrentUser)(SignedInMenu);
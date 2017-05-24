import React from 'react';
import 'whatwg-fetch';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import PropTypes from 'prop-types'
import { fetchSignOut } from '../actions/currentUserAction'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class SignedInMenu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
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
    )
  }
}

export default connect()(SignedInMenu);
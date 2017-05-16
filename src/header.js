import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom'
import 'whatwg-fetch';
import S from 'shorti'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

function handleTouchTap() {
  window.location.href = '/'
}

class Login extends React.Component {
  render() {
    return (
      <div style={S('mt-7')}>
        <FlatButton
          label="SignIn"
          containerElement={ <Link to="/sign_in" /> }
          style={S('color-fff')}
        />
        <FlatButton
          label="SignUp"
          containerElement={ <Link to="/sign_up" /> }
          style={S('color-fff')}
        />
      </div>
    )
  }
}

class Logged extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem
          primaryText="Sign out"
          onTouchTap={
            () => {
              console.log('out')
              fetch('http://localhost:3000/api/v1/users/sign_out', {
                method: 'DELETE',
                credentials: 'include'
              })
            }
          }
        />
      </IconMenu>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { signIn: false }
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title={ <span style={S('pointer')}>TripScanner</span> }
          onTitleTouchTap={ handleTouchTap }
          iconElementRight={
            this.state.signIn ? <Logged /> : <Login />
          }
        />
      </MuiThemeProvider>
    );
  }
}


export default Header;

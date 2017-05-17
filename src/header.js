import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';


function handleTouchTap() {
  window.location.href = '/'
}


const Header = () => {
  return (
    <MuiThemeProvider>
      <AppBar
        title={ <span style={ { cursor: 'pointer' } }>TripScanner</span> }
        onTitleTouchTap={ handleTouchTap }
        iconElementRight={
          <FlatButton
            label="Login"
            containerElement={ <Link to="/sign_in" /> }
          />
        }
      />
    </MuiThemeProvider>
  );
};


export default Header;

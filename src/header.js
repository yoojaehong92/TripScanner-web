import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch } = this.props;
    return (
      <MuiThemeProvider>
        <AppBar
          title={ <span style={ { cursor: 'pointer' } }>TripScanner</span> }
          onTitleTouchTap={ () => dispatch(push('/')) }
          iconElementRight={
            <FlatButton
              label="Login"
              containerElement={ <Link to="/sign_in" /> }
            />
          }
        />
      </MuiThemeProvider>
    );
  }
}

export default connect()(Header);

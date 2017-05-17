import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
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
      <AppBar
        title={ <span style={ { cursor: 'pointer' } }>TripScanner</span> }
        onTitleTouchTap={ () => dispatch(push('/')) }
        iconElementRight={
          <FlatButton
            label="SignIn"
            containerElement={ <Link to="/sign_in" /> }
          />
        }
      />
    );
  }
}

export default connect()(Header);

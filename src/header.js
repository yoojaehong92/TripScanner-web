import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignedInMenu from './components/signedInMenu'
import S from 'shorti'
import { openDrawer } from './actions/appBarAction'

class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch, user } = this.props;
    return (
      <AppBar
        style={ S('fixed')}
        title={ <span style={ S('pointer') }>TripScanner</span> }
        onLeftIconButtonTouchTap={ user ? () => dispatch(openDrawer()) : null }
        onTitleTouchTap={ () => dispatch(push('/')) }
        iconElementRight={
          user ?
            <SignedInMenu/> :
            <FlatButton
              label="SignIn"
              containerElement={ <Link to="/sign_in" /> }
            />
        }
      />
    );
  }
}

function mapCurrentUser(state) {
  return {
    user: state.currentUserReducer.user
  };
}

export default connect(mapCurrentUser)(Header);

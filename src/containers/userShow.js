/**
 * Created by huy on 2017-05-24.
 */

import React from 'react';
import UserDetail from '../components/userDetail'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShow } from '../actions/usersAction';

class UserShow extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { id } = this.props.params;
    const { dispatch } = this.props;
    dispatch(fetchShow(id));
  }

  render() {
    const { user } = this.props;
    return (
      <div
        className="container"
      >
        {
          user ? <UserDetail user={ user }/> : ''
        }
      </div>
    );
  }
}

function mapUser(state) {
  return {
    user: state.usersReducer.user
  };
}

export default connect(mapUser)(UserShow);

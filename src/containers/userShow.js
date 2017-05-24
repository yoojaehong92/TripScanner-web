/**
 * Created by huy on 2017-05-24.
 */

import React from 'react';
import S from 'shorti'
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
    const { id } = this.props.params;
    const { dispatch } = this.props;
    dispatch(fetchShow(id));
  }

  render() {
    const { user } = this.props;
    return (
      <div style={S('p-20 pt-80')}>
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

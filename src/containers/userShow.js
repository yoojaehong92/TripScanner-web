/**
 * Created by huy on 2017-05-24.
 */

import React from 'react';
import UserDetail from '../components/userDetail'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShow } from '../actions/usersAction';
import { fetchUserReview } from '../actions/reviewAction'

class UserShow extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    user: PropTypes.object,
    reviews: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { id } = this.props.params;
    const { dispatch } = this.props;
    dispatch(fetchShow(id));
    this.props.dispatch(fetchUserReview(id))
  }

  render() {
    const { user, reviews } = this.props;
    return (
      <div
        className="container"
      >
        {
          user ? <UserDetail user={ user } reviews={ reviews }/> : ''
        }
      </div>
    );
  }
}

function mapUser(state) {
  return {
    user: state.usersReducer.user,
    reviews: state.reviewReducer.reviews
  };
}

export default connect(mapUser)(UserShow);

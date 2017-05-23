import React from 'react';
import SearchForm from '../components/searchForm'
import S from 'shorti'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    if (!this.props.user)
      dispatch(push('/sign_in'))
  }

  render() {
    return (
      <div style={S('p-20 pt-65')}>
        <SearchForm/>
      </div>
    );
  }
}

function mapCurrentUser(state) {
  return {
    user: state.currentUserReducer.user
  };
}

export default connect(mapCurrentUser)(Home);

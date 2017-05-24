import React from 'react';
import SearchForm from '../components/searchForm'
import S from 'shorti'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import { Link } from 'react-router';

class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch } = this.props;
    if (!this.props.user)
      dispatch(push('/sign_in'));

    return (
      <div style={S('p-20 pt-65')}>
        <SearchForm/>
        <div className="text-center">
          <RaisedButton
            label="새로운 동행 만들기"
            containerElement={ <Link to="/make_trip" /> }
            icon={ <ContentAddCircle /> }
            primary
          />
        </div>
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

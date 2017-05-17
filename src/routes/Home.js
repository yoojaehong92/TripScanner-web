import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/searchForm';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // via connect()
    return (
      <div>
        <SearchForm/>
        <span>Home</span>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number,
  store: PropTypes.object
};

export default connect()(Home);

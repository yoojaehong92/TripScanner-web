import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../components/searchForm'
import { increment, decrement } from '../actions/example';
import S from 'shorti'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

class Home extends React.Component {
  static propTypes = {
    count: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, count } = this.props;
    return (
      <div style={S('p-20 pt-65')}>
        <SearchForm/>
        <RaisedButton
          type="button"
          label="Increment"
          primary
          onTouchTap={ () => dispatch(increment()) }
        />
        <RaisedButton
          type="button"
          label="Decrement"
          secondary
          onTouchTap={ () => dispatch(decrement()) }
        />
        <h1>{ count }</h1>
      </div>
    );
  }
}


function select(state) {
  return {
    count: state.counterApp.counterReducer
  };
}


export default connect(select)(Home);

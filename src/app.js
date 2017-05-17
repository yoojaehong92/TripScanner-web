import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './header'
import Footer from './footer'
import { increment, decrement } from './actions/example.js';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

// Component
// constructor -> componentWillMount -> render -> componentDidMount

// Props change
// componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate ->
// componentDidUpdate
// Unmount
// componentWillUnmount

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const { dispatch, count } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          {this.props.children}
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
          <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  count: PropTypes.number,
  dispatch: PropTypes.func
};

function select(state) {
  return {
    count: state.counterApp.counterReducer
  };
}

export default connect(select)(App);

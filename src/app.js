import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './header'
import Footer from './footer'
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
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          {this.props.children}
          <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default connect()(App);

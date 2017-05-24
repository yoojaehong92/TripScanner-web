import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './header'
import Footer from './footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { fetchUserMe } from './actions/userAction'

// Component
// constructor -> componentWillMount -> render -> componentDidMount

// Props change
// componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate ->
// componentDidUpdate
// Unmount
// componentWillUnmount

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.props.dispatch(fetchUserMe())
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const tableWrapper = {
      display: 'table',
      width: '100%',
      height: '100%'
    };
    const tableCell = {
      display: 'table-cell',
      margin: '0 auto',
      verticalAlign: 'middle'
    };
    const tableHeaderRow = {
      display: 'table-row',
      height: '64px'
    };
    const tableRow = {
      display: 'table-row'
    };
    const tableCellAlignBottom = {
      display: 'table-cell',
      verticalAlign: 'bottom'
    };
    const childrenContainer = {
      paddingTop: '60px',
      paddingBottom: '60px'
    }

    return (
      <MuiThemeProvider>
        <div style={ tableWrapper }>
          <div style={ tableHeaderRow }>
            <Header/>
          </div>
          <div style={ tableRow }>
            <div style={ tableCell }>
              <div style={ childrenContainer } >
                {this.props.children}
              </div>
            </div>
          </div>
          <div style={ tableCellAlignBottom }>
            <Footer/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default connect()(App);

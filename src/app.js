import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './header'
import Footer from './footer'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App

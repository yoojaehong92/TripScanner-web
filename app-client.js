// app-client.js
import React, { Component } from 'react'
import { render } from 'react-dom'
// import config from './config'
// import uuid from 'node-uuid'
// import S from 'shorti'
// import _ from 'lodash'
// import { Input } from 'react-bootstrap'
import Home from './src/routes/home';
import SignIn from './src/routes/sign-in'
import Header from './src/header'
import Footer from './src/footer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';

injectTapEventPlugin();

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {
      }
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Footer/>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/sign_in" component={ SignIn }/>
        </div>
      </BrowserRouter>
    )
  }
}

const app = document.getElementById('app')
render(<App />, app)

// app-client.js
import React, { Component } from 'react'
import { render } from 'react-dom'
// import uuid from 'node-uuid'
// import S from 'shorti'
// import _ from 'lodash'
// import { Input } from 'react-bootstrap'
import Home from './src/routes/home';
import SignIn from './src/routes/sign-in'
import SignUp from './src/routes/sign-up'
import Header from './src/header'
import Footer from './src/footer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';
import 'whatwg-fetch';

injectTapEventPlugin();

fetch('http://localhost:3000/api/v1/users/me', {
  method: 'GET',
  credentials: 'include'
}).then(function (response) {
  if (response.ok)
    console.log('ok')

  if (!response.ok)
    console.log('not ok')
})

class App extends Component {
  constructor() {
    super()
    this.state = {
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
          <Route exact path="/sign_up" component={ SignUp }/>
          <Route exact path="/sign_in" component={ SignIn }/>
        </div>
      </BrowserRouter>
    )
  }
}

const app = document.getElementById('app')
render(<App />, app)

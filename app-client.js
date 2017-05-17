import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './src/app';
import Home from './src/routes/home';
import SignIn from './src/routes/signIn'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Component
// constructor -> componentWillMount -> render -> componentDidMount

// Props change
// componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate ->
// componentDidUpdate
// Unmount
// componentWillUnmount


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home }/>
      <Route path="/sign_in" component={ SignIn }/>
    </Route>
  </Router>,
  document.getElementById('root')
);

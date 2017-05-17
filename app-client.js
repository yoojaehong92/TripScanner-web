import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './src/app';
import Home from './src/routes/home';
import SignIn from './src/routes/signIn'

import counterApp from './src/reducers/example'

// for material-ui
injectTapEventPlugin();

const store = createStore(
  combineReducers({
    counterApp,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/sign_in" component={ SignIn }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

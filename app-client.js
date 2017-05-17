import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './src/app';
import Home from './src/containers/home';
import SignIn from './src/containers/signIn'
import SignUp from './src/containers/signUp'

import counterApp from './src/reducers/example'

// for material-ui
injectTapEventPlugin();

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory)
const store = createStore(
  combineReducers({
    counterApp,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/sign_in" component={ SignIn }/>
        <Route path="/sign_up" component={ SignUp }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

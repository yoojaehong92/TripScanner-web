import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import './index.css';
import navInstance from './Navigation'
import footerInstance from './Footer'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render( navInstance,document.getElementById('navi'));
ReactDOM.render(<App/>,document.getElementById('App'));
ReactDOM.render(<Search/>,document.getElementById('root'));
ReactDOM.render( footerInstance,document.getElementById('footer'));
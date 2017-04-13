import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import footerInstance from './Footer'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<App/>,document.getElementById('App'));
ReactDOM.render( footerInstance,document.getElementById('footer'));
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<p className="Hello-World">
	  Hello World!
	</p>
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
	<ul>
	  <li>Instagram</li>
	  <li>WhatsApp</li>
	  <li>Oculus</li>
	</ul>
      </div>
      </div>
    );
  }
}

export default App;



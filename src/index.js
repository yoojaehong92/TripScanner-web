import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import footerInstance from "./Footer";
import App from "./App";
import injectTapEventPlugin from "react-tap-event-plugin";
import "whatwg-fetch";

injectTapEventPlugin();

console.log("hello")

fetch('http://localhost:3000/api/v1/users/me', {
    method: 'GET',
    credentials: 'include'
}).then(function (response) {
    return response.json()
}).then(function (json) {
    console.log('parsed json', json)
}).catch(function (ex) {
    console.log('parsing failed', ex)
})

ReactDOM.render(<App/>, document.getElementById('App'));
ReactDOM.render(footerInstance, document.getElementById('footer'));
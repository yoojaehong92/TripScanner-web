import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login"
import Navigator from './Navigation'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

const App = () => {
    return (

        <BrowserRouter>
            <div>
                <Navigator />
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </div>
        </BrowserRouter>

    );
};


export default App;
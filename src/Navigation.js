import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const navInstance = (
    <MuiThemeProvider>
        <AppBar
            title="TripScanner"
            iconElementRight={<FlatButton label="Login"/>}
        />
    </MuiThemeProvider>
);


export default navInstance;


import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Link} from "react-router-dom"


function handleTouchTap() {
    //alert('onTouchTap triggered on the title component');
    window.location.href = "/"
}


const Navigator = () => {
    return (
        <MuiThemeProvider>
            <AppBar
                title={<span style={{cursor: 'pointer'}}>TripScanner</span>}
                onTitleTouchTap={handleTouchTap}
                iconElementRight={<FlatButton label="Login" containerElement={<Link to='/login'/>}/>}
            />
        </MuiThemeProvider>
    );
};


export default Navigator;


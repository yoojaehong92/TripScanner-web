import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FacebookLogin from "react-facebook-login";

const style = {
    border: "solid",
    width: "50%"
}

const responseFacebook = (response) => {
    console.log(response);
}

const LoginForm = () => {
    return (
        <form style={style}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <MuiThemeProvider>
                <RaisedButton type="submit" label="Log in" primary={true}/>
            </MuiThemeProvider>
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}/>
        </form>
    );
};

export default LoginForm;
import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FacebookLogin from "react-facebook-login";

const style = {
    border: "solid",
    width: "50%"
}
JSON.stringify()
const responseFacebook = (response) => {
    console.log(response);
}

const LoginForm = () => {
    return (
        <form encType="application/json" style={style} action="test" method="post">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email" name="user[email]"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" name="user[password]"/>
            </div>
            <MuiThemeProvider>
                <RaisedButton type="submit" label="Log in" primary={true}/>
            </MuiThemeProvider>
            <FacebookLogin
                appId="200726200423220"
                size="small"
                fields="name,email,picture"
                callback={responseFacebook}/>
        </form>
    );
};

export default LoginForm;
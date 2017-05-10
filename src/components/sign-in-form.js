import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';

const responseFacebook = (response) => {
  console.log(response);
}

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      title: 'User',
      properties: {
        email: { type: 'string', title: 'Email' },
        password: { type: 'string', title: 'Password' }
      }
    }
  }
}

const uiSchema = {
  user: {
    email: {
      'ui:widget': 'email'
    },
    password: {
      'ui:widget': 'password'
    }
  }
}

const onSubmit = ({ formData }) => {
  fetch('http://localhost:3000/api/v1/users/sign_in', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
}

const SignInForm = () => {
  return (
    <div className="card w-50"
      style={
        {
          margin: 'auto',
          align: 'center',
          padding: '20px'
        }
      }
    >
      <h2 className="card-header" style={ { textAlign: 'center' } }>
        SignIn
      </h2>
      <Form encType="application/json"
        action="signin"
        method="post"
        schema={ schema }
        uiSchema={ uiSchema }
        onSubmit={ onSubmit }
      >
        <div>
          <MuiThemeProvider>
            <RaisedButton type="submit" label="Sign in" primary/>
          </MuiThemeProvider>
          <FacebookLogin
            appId="200726200423220"
            size="small"
            fields="name,email,picture"
            callback={ responseFacebook }
          />
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;

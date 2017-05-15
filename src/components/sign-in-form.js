import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import S from 'shorti';

const facebookAuthUrl = 'http://localhost:3000/api/v1/users/auth/facebook'

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
    <MuiThemeProvider>
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
          schema={ schema }
          uiSchema={ uiSchema }
          onSubmit={ onSubmit }
        >
          <div>
            <RaisedButton
              type="submit"
              label="Sign in"
              primary
              style={S('mr-10')}
            />
            <RaisedButton
              href={facebookAuthUrl}
              type="submit"
              label="Sign With Facebook"
              secondary
              style={S('mr-10')}
            />
          </div>
        </Form>
      </div>
    </MuiThemeProvider>
  );
};

export default SignInForm;

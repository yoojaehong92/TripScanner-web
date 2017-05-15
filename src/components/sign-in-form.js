import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom'
// const responseFacebook = (response) => {
//   response
// }

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

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      redirect: false
    }
  }

  onSubmit = ({ formData }) => {
    fetch('http://localhost:3000/api/v1/users/sign_in', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(function (response) {
      if (response.ok) {
        return (
          this.setState({ redirect: true })
        )
      }
      if (!response.ok)
        this.setState({ error: true })
      return response.json()
    }.bind(this))
  }

  render() {
    if (this.state.redirect)
      return <Redirect push to='/'/>
    return (
      <div className="card w-50"
        style={
          {
            align: 'center',
            margin: 'auto',
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
          onSubmit={ this.onSubmit }
        >
          <div>
            {
              this.state.error ?
                <p className="card-text"
                  style={
                    {
                      color: 'red'
                    }
                  }
                >
                  Invalid Email or password.
                </p> :
                <p/>
            }
            <MuiThemeProvider>
              <RaisedButton type="submit" label="Sign in" primary/>
            </MuiThemeProvider>
            <FacebookLogin
              appId="200726200423220"
              size="small"
              fields="name,email,picture"
            />
          </div>
        </Form>
      </div>
    )
  }
}

export default SignInForm;

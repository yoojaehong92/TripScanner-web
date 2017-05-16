import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom'
import S from 'shorti';


const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      title: 'User',
      properties: {
        email: { type: 'string', title: 'Email' },
        password: { type: 'string', title: 'Password' },
        password_confirmation: { type: 'string', title: 'Password Confirm' }
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
    },
    password_confirmation: {
      'ui:widget': 'password'
    }
  }
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      redirect: false
    }
  }
  onSubmit = ({ formData }) => {
    fetch('http://localhost:3000/api/v1/users', {
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
  validate(formData, errors) {
    if (formData.user.password !== formData.user.password_confirmation)
      errors.user.password_confirmation.addError('Passwords don\'t match');
    return errors;
  }
  render() {
    if (this.state.redirect)
      return <Redirect push to='/'/>
    return (
      <MuiThemeProvider>
        <div className="card w-50"
          style={S('center-block p-20')}
        >
          <h2 className="card-header" style={S('text-center')}>
            Sign Up
          </h2>
          <Form encType="application/json"
            schema={ schema }
            uiSchema={ uiSchema }
            onSubmit={ this.onSubmit }
            validate={ this.validate }
            liveValidate
          >
            <div>
              {
                this.state.error ?
                  <p className="card-text"
                    style={S('color-f00')}
                  >
                    Email has already been taken
                  </p> :
                  <p/>
              }
              <RaisedButton
                type="submit"
                label="Sign Up"
                primary
                style={S('mr-10')}
              />
            </div>
          </Form>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default SignUpForm;

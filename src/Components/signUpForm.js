import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import 'whatwg-fetch';
import { Redirect } from 'react-router'
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
      redirect: false,
      errors: ''
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
    }).then(function callback(response) {
      if (response.ok) {
        return (
          this.setState({ redirect: true })
        )
      }
      if (!response.ok) {
        response.json().then(res => {
          let errorMessage = ''
          Object.keys(res.errors).forEach(function x(value) {
            errorMessage += value + ' ' + res.errors[value][0] + '\n'
          })
          this.setState({ errors: errorMessage })
        })
        this.setState({ error: true })
      }
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
      return <Redirect push to="/"/>
    return (
      <Card style={S('w-50p center-block color-eee')}>
        <CardTitle title="SignUp" titleStyle={S('text-center')} style={S('bg-eee')}/>
        <CardText>
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
                    { this.state.errors }
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
        </CardText>
      </Card>
    )
  }
}

export default SignUpForm;

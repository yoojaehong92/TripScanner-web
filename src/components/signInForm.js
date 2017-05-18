import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';
import { Redirect } from 'react-router';
import S from 'shorti';
import config from '../../config';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const facebookAuthUrl = `${config.apiServer.host}/users/auth/facebook`

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
    }).then(function cb(response) {
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
      return <Redirect push to="/"/>
    return (
      <Card style={S('w-50p center-block color-eee')}>
        <CardTitle title="SignIn" titleStyle={S('text-center')} style={S('bg-eee')}/>
        <CardText>
          <Form encType="application/json"
            schema={ schema }
            uiSchema={ uiSchema }
            onSubmit={ this.onSubmit }
          >
            <div>
              {
                this.state.error ?
                  <p className="card-text"
                    style={S('color-f00')}
                  >
                    Invalid Email or password.
                  </p> :
                  <p/>
              }
              <RaisedButton
                type="submit"
                label="Sign in"
                primary
                style={S('mr-10')}
              />
              <RaisedButton
                href={facebookAuthUrl}
                type="button"
                label="Sign With Facebook"
                secondary
                style={S('mr-10')}
              />
              <RaisedButton
                containerElement={ <Link to="sign_up"/>}
                type="button"
                label="Sign Up"
                secondary
                style={S('mr-10')}
              />
            </div>
          </Form>
        </CardText>
      </Card>
    )
  }
}

export default SignInForm;

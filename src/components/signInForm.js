import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import S from 'shorti';
import config from '../../config'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchSignIn } from '../actions/userAction';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

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
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    hasError: PropTypes.bool
  };

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit = ({ formData }) => {
    const { dispatch } = this.props
    dispatch(fetchSignIn(JSON.stringify(formData)))
  }

  render() {
    if (this.props.user)
      this.props.dispatch(push('/'))
    return (
      <MuiThemeProvider>
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
                this.props.hasError ?
                  <p className="card-text" style={{ color: 'red' }}>
                    Invalid Email or password.
                  </p>
                : null
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
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapCurrentUser(state) {
  return {
    isFetching: state.currentUserReducer.isFetching,
    hasError: state.currentUserReducer.hasError,
    user: state.currentUserReducer.user
  };
}

export default connect(mapCurrentUser)(SignInForm);
